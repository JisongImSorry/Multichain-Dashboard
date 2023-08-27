interface GeneralButtonProps {
  title: string;
  onClick: any;
  color?: string;
}

const GeneralButton = ({
  title,
  onClick,
  color = "blue",
}: GeneralButtonProps) => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default GeneralButton;
