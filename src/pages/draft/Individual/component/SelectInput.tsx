import { useState } from "react";

function SelectInput({
  options,
  current,
  tag,
  checkValue,
}: {
  options: Array<any>;
  current?: string;
  tag: string;
  checkValue: (text: string, tag: string) => void;
}) {
  const [selectedOption, setSelectedOption] = useState(current);

  function handleSelectChange(event: any) {
    setSelectedOption(event.target.value);
    checkValue(event.target.value, tag);
  }

  return (
    <div className="inline-block relative">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
        </svg>
      </div>
    </div>
  );
}

export default SelectInput;
