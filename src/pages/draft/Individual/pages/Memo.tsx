import { useContext, useState, useEffect } from "react";
import { IndividualContext } from "@context/individual/IndividualContext";
import {
  useCreateMemoMutation,
  useUpdateMemoMutation,
  useDeleteMemoMutation,
} from "@services/member-detail";

export const Memo = () => {
  const { userId, memoData, listMemo } = useContext(IndividualContext);
  const [consultMemos, setConsultMemos] = useState<TResListMemo>([]);
  const [defaultMemos, setDefaultMemos] = useState<TResListMemo>([]);

  const [createMemo] = useCreateMemoMutation();
  const [updateMemo] = useUpdateMemoMutation();
  const [deleteMemo] = useDeleteMemoMutation();

  useEffect(() => {
    const consult = memoData?.filter((memo) => memo.type === "consult");
    consult && setConsultMemos(consult);

    const defualt = memoData?.filter((memo) => memo.type === "default");
    defualt && setDefaultMemos(defualt);
  }, [memoData]);

  const saveMemo = async (
    id: number,
    type: string,
    title: string,
    content: string,
    date: string
  ) => {
    if (userId) {
      if (id === -1) {
        await createMemo({
          id: userId,
          type,
          title,
          content,
          date,
        } as TReqCreateMemo);
        await listMemo({ id: userId, type: "all" } as TReqListMemo);
      } else {
        await updateMemo({
          id: userId,
          memoId: id,
          type,
          title,
          content,
          date,
        } as TReqUpdateMemo);
        await listMemo({ id: userId, type: "all" } as TReqListMemo);
      }
    }
  };

  const removeMemo = async (id: number) => {
    if (userId) {
      await deleteMemo({ id: userId, memoId: id });
      await listMemo({ id: userId, type: "all" } as TReqListMemo);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-row text-black font-extrabold">
          기본 메모장
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setDefaultMemos([
              ...defaultMemos,
              {
                id: -1,
                title: "",
                content: "",
                type: "default",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              },
            ]);
          }}
        >
          메모장 탭 추가
        </button>
      </div>
      {defaultMemos?.map((memo, idx) => {
        return (
          <LargeInputSection
            key={idx}
            id={memo.id}
            title={memo.title}
            type={memo.type}
            date={memo.createdAt}
            content={memo.content}
            saveMemo={saveMemo}
            removeMemo={removeMemo}
          />
        );
      })}
      <div className="mt-10 flex items-center justify-between">
        <div className="flex flex-row text-black font-extrabold">상담일지</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setConsultMemos([
              ...consultMemos,
              {
                id: -1,
                title: "",
                content: "",
                type: "consult",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              },
            ]);
          }}
        >
          메모장 탭 추가
        </button>
      </div>
      {consultMemos?.map((memo, idx) => {
        return (
          <LargeInputSection
            key={idx}
            id={memo.id}
            title={memo.title}
            type={memo.type}
            date={memo.createdAt}
            content={memo.content}
            saveMemo={saveMemo}
            removeMemo={removeMemo}
          />
        );
      })}
    </>
  );
};

interface ILargeInputSection {
  id: number;
  title: string;
  type: string;
  date: string;
  content: string;
  saveMemo: (
    id: number,
    type: string,
    title: string,
    content: string,
    date: string
  ) => Promise<void>;
  removeMemo: (id: number) => Promise<void>;
}
const LargeInputSection = ({
  id,
  title,
  type,
  date,
  content,
  saveMemo,
  removeMemo,
}: ILargeInputSection) => {
  const [titleText, setTitleText] = useState<string>(title);
  const [text, setText] = useState<string>(content);

  useEffect(() => {
    setText(content);
  }, [content]);

  useEffect(() => {
    setTitleText(title);
  }, [title]);

  return (
    <div className="bg-white rounded-lg shadow-md mt-5 mb-5">
      <div className="flex flex-row justify-between items-center bg-gray-200 rounded-t-lg px-4 py-2">
        <div className="flex flex-row">
          <input
            className="bg-gray-200 hover:bg-white text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline"
            value={titleText}
            onChange={(e) => {
              setTitleText(e.target.value);
            }}
          ></input>
          <div className="ml-4 text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline">
            {date}
          </div>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              saveMemo(id, type, titleText, text, date);
            }}
          >
            저장
          </button>
          <button
            className="ml-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              console.log("삭제");
              removeMemo(id);
            }}
          >
            삭제
          </button>
        </div>
      </div>
      <div className="p-4">
        <textarea
          id="input"
          value={text}
          className="h-40 appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
