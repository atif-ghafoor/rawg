import Search from "../ui/search";
import { Switch } from "..//ui/switch";

const NavBar = () => {
  return (
    <div className="h-[60px] flex items-center justify-between">
      <h1 className="logo font-extrabold -tracking-[-3.5px]">
        <a href="/">RAWG</a>
      </h1>
      <div>
        <Search />
      </div>
      <div className="flex shadow-md items-center space-x-2">
        <Switch id="theme" />
      </div>
    </div>
  );
};

export default NavBar;
