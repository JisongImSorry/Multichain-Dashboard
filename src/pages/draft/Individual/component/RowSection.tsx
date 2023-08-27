import SelectInput from "./SelectInput";
import { useContext, useState, useEffect } from "react";
import { IndividualContext } from "@context/individual/IndividualContext";

const RowSection = ({
  title,
  args,
  hasAction,
  action,
}: {
  title: string;
  args: Array<{
    title: string;
    type: string;
    options?: Array<any>;
    current?: string;
    tag?: string;
  }>;
  hasAction?: boolean;
  action?: () => void;
}) => {
  const [text, setText] = useState<{ [key: string]: string } | null>(null);

  const {
    basicServiceInputs,
    setBasicServiceInputs,
    additionalService1Inputs,
    setAdditionalService1Inputs,
    additionalService2Inputs,
    setAdditionalService2Inputs,
  } = useContext(IndividualContext);

  const contextValueUpdate = (value: string, tag: string) => {
    const category = tag.split("-")[0];
    const key = tag.split("-")[1];

    if (category === "basic") {
      setBasicServiceInputs({
        ...basicServiceInputs,
        [key]: value,
      });
    }

    if (category === "as1") {
      setAdditionalService1Inputs({
        ...additionalService1Inputs,
        [key]: value,
      });
    }

    if (category === "as2") {
      setAdditionalService2Inputs({
        ...additionalService2Inputs,
        [key]: value,
      });
    }
  };

  useEffect(() => {
    if (text) {
      const textKeyArray = Object.keys(text);
      textKeyArray.map((item) => {
        contextValueUpdate(text[item], item);
      });
    }
  }, [text]);

  return (
    <div className="col-span-1 mb-4 p-5">
      <div className="flex flex-row">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        {hasAction && (
          <button
            className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={action}
          >
            저장
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {args.map((_, index) => (
          <div key={index} className="h-fit grid grid-cols-5 mt-3 mb-3">
            <span className="h-fit col-span-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 flex justify-center items-center">
              {_.title}
            </span>
            <div className="col-span-3">
              {_.type === "select" ? (
                <SelectInput
                  options={_.options!}
                  current={_.current}
                  tag={_.tag!}
                  checkValue={contextValueUpdate}
                />
              ) : _.type === "input" ? (
                <input
                  type="text"
                  value={text ? text[_.tag!] : "" || ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    const key = _.tag!;
                    setText({
                      ...text,
                      [key]: value,
                    });
                  }}
                  className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              ) : _.type === "value" ? (
                <div className="h-fit appearance-none border bg-gray-200 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  {_.options
                    ? _.options.map((option, index) => (
                        <div key={index}>{option}</div>
                      ))
                    : ""}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowSection;
