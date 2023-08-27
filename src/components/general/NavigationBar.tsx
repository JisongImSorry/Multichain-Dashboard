import { useNavigate, useLocation } from "react-router-dom";

interface NavigationBarProps {
  items: Array<{
    title: string;
    dest: string;
    tag: string;
  }>;
}

const NavigationBar = ({ items }: NavigationBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <div className="grid grid-cols-5 gap-2 p-2 bg-gray-200 rounded-lg">
      {items?.map((item, idx) => {
        const { tag, title, dest } = item;
        return (
          <button
            key={idx}
            className={`${
              path[path.length - 1] === tag ? "bg-blue-200" : "bg-white"
            } text-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:shadow-outline`}
            onClick={() => {
              navigate(dest);
            }}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default NavigationBar;
