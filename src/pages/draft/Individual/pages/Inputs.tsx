import RowSection from "../component/RowSection";
import { useContext, useState, useEffect } from "react";
import { IndividualContext } from "@context/individual/IndividualContext";
import { RightArrow } from "src/svg/RightArrow";
import { Photo } from "src/svg/Photo";
import { Record } from "src/svg/Record";

export type TCategoryTab =
  | { type: "health"; index: 0 }
  | { type: "medical"; index: 1 }
  | { type: "economical"; index: 2 }
  | { type: "lifestyle"; index: 3 }
  | { type: "death"; index: 4 }
  | { type: "guardian"; index: 5 };

export const Inputs = () => {
  const { userId, userData, instructionData } = useContext(IndividualContext);
  const [category, setCategory] = useState<TCategoryTab | null>(null);
  const [isReady, setReady] = useState(false);
  const [displayData, setDisplayData] = useState<Answers>();

  useEffect(() => {
    if (instructionData && category) {
      setDisplayData(instructionData[category.type]);
      setReady(true);
    }

    return () => {
      setDisplayData(undefined);
      setReady(false);
    };
  }, [instructionData, category]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-5 grid grid-cols-6 grid-flow-col gap-2 justify-stretch">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setCategory({ type: "health", index: 0 });
          }}
        >
          건강
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setCategory({ type: "medical", index: 1 });
          }}
        >
          의료
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setCategory({ type: "economical", index: 2 });
          }}
        >
          경제
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setCategory({ type: "lifestyle", index: 3 });
          }}
        >
          생활
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setCategory({ type: "death", index: 4 });
          }}
        >
          죽음
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setCategory({ type: "guardian", index: 5 });
          }}
        >
          보호자
        </button>
      </div>
      <div>
        {isReady &&
          displayData?.result?.map((item, idx: number) => {
            return (
              <CheckCard
                key={idx}
                item={item}
                category={category}
                index={idx}
                name={userData!.name}
              />
            );
          })}
      </div>
    </div>
  );
};

interface ICheckCard {
  key: number;
  item: InstructionCorpus;
  category: TCategoryTab | null;
  index: number;
  name: string;
}
const CheckCard = ({ key, item, category, index, name }: ICheckCard) => {
  const title = item.title
    .replaceAll("{username}", name)
    .replaceAll(`<span class="font-title3">`, "")
    .replaceAll("</span>", "")
    .replaceAll(`<div class="font-body2">`, "")
    .replaceAll(`<div class="font-body3">`, "")
    .replaceAll("</div", "")
    .replaceAll("<br/>", "")
    .replaceAll("<br />", "")
    .replaceAll(">", "");

  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState<string | number>("");
  const [isPhoto, setIsPhoto] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  const readUserAnswer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let tempAnswer = "";
    item?.input_item?.map((inputItem) => {
      tempAnswer += inputItem.answer;
    });
    setAnswer(tempAnswer);

    item?.file_item?.map((fileItem) => {
      if (fileItem.type.toUpperCase() === "VOICE") {
        setIsPhoto(true);
      }

      if (fileItem.type.toUpperCase() === "IMAGE") {
        setIsRecord(true);
      }
    });
  }, [item]);

  useEffect(() => {
    setIsOpen(false);
  }, [category]);

  return (
    <>
      <div
        className={
          isOpen
            ? "outline outline-2 rounded-lg h-20 mb-5 w-full"
            : "outline outline-2 rounded-lg h-10 mb-5 w-full"
        }
      >
        <div className="w-full justify-start inline-flex items-center mt-2">
          <div className="flex flex-row w-11/12">
            <div className="flex">
              <div className="ml-3 max-w-8 w-8 text-center">{`${
                category!.index + 1
              }-${index + 1}`}</div>
              <div className="max-w-xl w-170 ml-3 truncate">{title}</div>
            </div>
          </div>
          <div className="text-center items-center font-medium pr-2">
            {item.input_item || item.file_item ? (
              <div
                className={isOpen ? "rotate-90" : ""}
                onClick={readUserAnswer}
              >
                <RightArrow />
              </div>
            ) : (
              "미응답"
            )}
          </div>
        </div>
        {isOpen ? (
          <div className="ml-5 mt-3 flex">
            {isPhoto ? (
              <div>
                <Photo />
              </div>
            ) : null}
            {isRecord ? (
              <div>
                <Record />
              </div>
            ) : null}
            <div className="ml-3">{answer}</div>
          </div>
        ) : null}
      </div>
    </>
  );
};
