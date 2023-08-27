interface InputWithLabelProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
}

const InputWithLabel = ({
  title,
  value,
  onChange,
  onEnter,
}: InputWithLabelProps) => {
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (event.key === "Enter") {
      onEnter();
    }
  }

  return (
    <div
      className="grid grid-cols-5 col-span-1 pr-2 flex flex-row"
      onKeyDown={handleKeyDown}
    >
      <label className="h-full col-span-2 block text-gray-700 font-bold mb-2 text-center flex items-center justify-center font-bold">
        {title}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="col-span-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputWithLabel;
