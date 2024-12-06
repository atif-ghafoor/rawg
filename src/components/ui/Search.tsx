import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Params } from "../../services/useService";
import { useForm } from "react-hook-form";

interface Props {
  switchValue: boolean;
  totalGames: number;
  axiosParams: Params;
  setAxiosParams: (value: Params) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  setHeaderText: (value: string) => void;
}

const Search = ({
  switchValue,
  totalGames,
  setAxiosParams,
  axiosParams,
  searchValue,
  setSearchValue,
  setHeaderText,
}: Props) => {
  const { handleSubmit } = useForm();
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const onsubmit = () => {
    setHeaderText("Search");
    const { genres, ...rest } = axiosParams;
    setAxiosParams({ ...rest, search: searchValue });
  };
  const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit(onsubmit)}
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
      <button
        type="submit"
        className=" h-[38px] rounded-full rounded-r-none flex items-center pl-4 bg-transparent"
      >
        <IoSearch size={"15px"} className="" />
      </button>
      <input
        className="bg-transparent border-0 outline-0 w-[50vw] h-[38px] rounded-full placeholder:text-[#B0B0B0] pl-3 rounded-l-none"
        placeholder={`Search ${
          !Number.isNaN(totalGames) ? totalGames.toLocaleString() : "..."
        } games`}
        type="text"
        value={searchValue}
        onChange={HandleInputChange}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
    </form>
  );
};

export default Search;
