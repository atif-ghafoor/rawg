import Search from "../ui/Search";
import { Switch } from "..//ui/switch";

interface Props {
  switchValue: boolean;
  setSwitchValue: (value: boolean) => void;
  totalGames: number;
}

const NavBar = ({ switchValue, setSwitchValue, totalGames }: Props) => {
  const handleCheckedChange = (checked: boolean) => {
    setSwitchValue(checked);
  };
  return (
    <div className="h-[60px] flex items-center justify-between">
      <h1 className="logo text-[20px] hover:opacity-60 transition-opacity cursor-default duration-300 font-extrabold -tracking-[-3.5px]">
        RAWG
      </h1>
      <div>
        <Search totalGames={totalGames} switchValue={switchValue} />
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
