import Search from "../ui/Search";
import { Switch } from "..//ui/switch";
import { Params } from "../../services/useService";

interface Props {
  switchValue: boolean;
  setSwitchValue: (value: boolean) => void;
  totalGames: number;
  setAxiosParams: (value: Params) => void;
  setSearchValue: (value: string) => void;
  searchValue: string;
  setHeaderText: (value: string) => void;
}

const NavBar = ({
  switchValue,
  setSwitchValue,
  totalGames,
  setAxiosParams,
  searchValue,
  setSearchValue,
  setHeaderText,
}: Props) => {
  const handleCheckedChange = (checked: boolean) => {
    setSwitchValue(checked);
  };
  return (
    <div className="h-[60px] flex items-center justify-between">
      <h1 className="logo text-[20px] hover:opacity-60 transition-opacity cursor-default duration-300 font-extrabold -tracking-[-3.5px]">
        RAWG
      </h1>
      <div>
        <Search
          setHeaderText={setHeaderText}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
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
  );
};

export default NavBar;
