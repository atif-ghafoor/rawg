import { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface Props {
  switchValue: boolean;
}

const Search = ({ switchValue }: Props) => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  return (
    <div
      className={
        onFocus
          ? `flex items-center rounded-full shadow-md w-fit ${
              switchValue ? "text-black bg-white" : "text-white bg-black"
            }   transition-colors duration-300`
          : `flex items-center rounded-full shadow-md w-fit text-[#B0B0B0] ${
              switchValue
                ? "hover:bg-white hover:text-black bg-customGray"
                : "hover:bg-black hover:text-white bg-gray-100"
            } transition-colors duration-300`
      }
    >
      <div className=" h-[38px] rounded-full rounded-r-none flex items-center pl-4 bg-transparent">
        <IoSearch size={"15px"} className="" />
      </div>
      <input
        className="bg-transparent border-0 outline-0 w-[50vw] h-[38px] rounded-full placeholder:text-[#B0B0B0] pl-3 rounded-l-none"
        placeholder="Search 877, 732 games"
        type="text"
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
    </div>
  );
};

export default Search;
