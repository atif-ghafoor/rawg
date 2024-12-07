import Search from "../ui/Search";
import { Switch } from "..//ui/switch";
import { Params } from "../../services/useService";
import { RiLogoutCircleLine, RiLogoutCircleRLine } from "react-icons/ri";
interface Props {
  switchValue: boolean;
  setSwitchValue: (value: boolean) => void;
  totalGames: number;
  axiosParams: Params;
  setAxiosParams: (value: Params) => void;
  setSearchValue: (value: string) => void;
  searchValue: string;
  setHeaderText: (value: string) => void;
  sidebarVisiblty: boolean;
  setSidebarVisiblty: (value: boolean) => void;
}

const NavBar = ({
  switchValue,
  setSwitchValue,
  totalGames,
  setAxiosParams,
  axiosParams,
  searchValue,
  setSearchValue,
  setHeaderText,
  sidebarVisiblty,
  setSidebarVisiblty,
}: Props) => {
  const handleCheckedChange = (checked: boolean) => {
    setSwitchValue(checked);
  };
  return (
    <>
      <div className="h-[60px] flex items-center justify-between">
        <h1 className="logo text-[20px] hover:opacity-60 transition-opacity cursor-default duration-300 font-extrabold -tracking-[-3.5px]">
          RAWG
        </h1>
        <div className="sh:hidden">
          <Search
            setHeaderText={setHeaderText}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            axiosParams={axiosParams}
            setAxiosParams={setAxiosParams}
            totalGames={totalGames}
            switchValue={switchValue}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            className="shadow-md"
            checked={switchValue}
            onCheckedChange={handleCheckedChange}
            id="theme"
          />
        </div>
      </div>
      <div className="sh:flex justify-between items-center gap-3 hidden">
        <div
          onClick={() => setSidebarVisiblty(!sidebarVisiblty)}
          className={`sh:flex relative hidden w-[30px] h-[30px] text-[23px] rounded-full shadow-md p-1 ${
            switchValue ? "bg-customGray" : "bg-gray-100"
          }`}
        >
          <RiLogoutCircleLine
            className={`transition-all duration-500 absolute ${
              sidebarVisiblty ? "opacity-100" : "opacity-0"
            }`}
          />
          <RiLogoutCircleRLine
            className={`transition-all duration-500 absolute ${
              sidebarVisiblty ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
        <Search
          setHeaderText={setHeaderText}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          axiosParams={axiosParams}
          setAxiosParams={setAxiosParams}
          totalGames={totalGames}
          switchValue={switchValue}
        />
      </div>
    </>
  );
};

export default NavBar;
