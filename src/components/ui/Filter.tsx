import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";

interface Props {
  switchValue: boolean;
  options: string[];
  selectedOrder: string;
  setSeletedOrder: (value: string) => void;
}

const Filter = ({
  switchValue,
  options,
  selectedOrder,
  setSeletedOrder,
}: Props) => {
  const [optionsBarVisibltiy, setoptionsBarVisibltiy] = useState(false);
  const optionsBar = useRef<HTMLUListElement>(null);

  function handleOptionClick(option: string) {
    setSeletedOrder(option);
    setoptionsBarVisibltiy(!optionsBarVisibltiy);
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
        } shadow-md bg-white text-black w-full pl-5 py-2 rounded-md transition-all duration-300 ease-in-out`}
      >
        {options.map((option) => (
          <li
            onClick={() => handleOptionClick(option)}
            className="hover:opacity-60 transition-opacity duration-200 cursor-default flex justify-between items-center"
            key={option}
          >
            {option}
            <IoMdCheckmark
              size={"18px"}
              className={
                selectedOrder === option ? "mr-[20px] text-green-500" : "hidden"
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
        } shadow-md rounded-xl px-5 py-3 text-[13.5px]  flex text-nowrap items-center gap-4 transition-opacity duration-100`}
      >
        <span>
          {options[0] === "Relevance" && "Order by: "}
          <span className="font-bold">{selectedOrder}</span>
        </span>
        <IoIosArrowDown className="" size={"18px"} />
      </button>
    </div>
  );
};

export default Filter;
