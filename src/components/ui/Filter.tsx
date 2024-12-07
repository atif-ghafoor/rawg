import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";
import { Params } from "../../services/useService";

interface Props {
  switchValue: boolean;
  options: {
    name: string;
    id: string;
  }[];
  selectedOrder: string;
  setSeletedOrder: (value: string) => void;
  axiosParams?: Params;
  setAxiosParams?: (value: Params) => void;
}

const platforms = [
  "All Platforms",
  "PC",
  "PlayStation",
  "Xbox",
  "iOS",
  "Android",
  "Apple Macintosh",
  "Linux",
  "Nintendo",
];

const Filter = ({
  switchValue,
  options,
  selectedOrder,
  setSeletedOrder,
  setAxiosParams,
  axiosParams,
}: Props) => {
  const [optionsBarVisibltiy, setoptionsBarVisibltiy] = useState(false);
  const optionsBar = useRef<HTMLUListElement>(null);

  function handleOptionClick(option: string, id: string) {
    setSeletedOrder(option);
    setoptionsBarVisibltiy(!optionsBarVisibltiy);
    if (option === selectedOrder) return;
    if (id === "" && axiosParams) {
      if (option === "Relevance") {
        const { ordering, ...rest } = axiosParams;
        setAxiosParams?.(rest);
        return;
      }
      const { platforms, ...rest } = axiosParams;
      setAxiosParams?.(rest);
      return;
    }
    if (platforms.includes(option)) {
      setAxiosParams?.({ ...axiosParams, platforms: id });
      return;
    }
    setAxiosParams?.({ ...axiosParams, ordering: "-" + id });
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionsBar.current &&
      !optionsBar.current.contains(event.target as Node)
    ) {
      setoptionsBarVisibltiy(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-fit min-w-[150px] relative">
      <ul
        ref={optionsBar}
        className={`absolute ${
          optionsBarVisibltiy ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } ${
          switchValue ? "bg-white text-black" : "bg-gray-100"
        } shadow-md text-nowrap fh:text-[10px] bg-white z-40 text-black w-full pl-5 py-2 rounded-md transition-all duration-300 ease-in-out`}
      >
        {options.map((option) => (
          <li
            onClick={() => handleOptionClick(option.name, option.id)}
            className="hover:opacity-60 transition-opacity duration-200 cursor-default flex justify-between items-center"
            key={option.name}
          >
            {option.name}
            <IoMdCheckmark
              size={"18px"}
              className={
                selectedOrder === option.name
                  ? "mr-[20px] text-green-500"
                  : "hidden"
              }
            />
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setoptionsBarVisibltiy(!optionsBarVisibltiy);
        }}
        className={`${
          switchValue
            ? "bg-[#262626] hover:text-white/55"
            : "bg-gray-100 hover:text-black/55"
        } shadow-md rounded-xl px-5 py-3 text-[13.5px] fh:text-[10px]  flex text-nowrap items-center gap-4 transition-opacity duration-100`}
      >
        <span>
          {options[0].name === "Relevance" && "Order by: "}
          <span className="font-bold">{selectedOrder}</span>
        </span>
        <IoIosArrowDown className="" size={"18px"} />
      </button>
    </div>
  );
};

export default Filter;
