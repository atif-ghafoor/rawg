import Images, { ImageKeys } from "../../services/AllImages";
import { Params } from "../../services/useService";

interface Props {
  axiosParams: Params;
  setAxiosParams: (value: Params) => void;
  setSearchValue: (value: string) => void;
  setHeaderText: (value: string) => void;
  sidebarVisiblty: boolean;
  headerText: string;
  switchValue: boolean;
}
const SideBar = ({
  axiosParams,
  setAxiosParams,
  setSearchValue,
  setHeaderText,
  headerText,
  sidebarVisiblty,
  switchValue,
}: Props) => {
  const genres: ImageKeys[] = [
    "Action",
    "Strategy",
    "RPG",
    "Shooter",
    "Adventure",
    "Puzzle",
    "Racing",
    "Sports",
  ];
  const handleHomeClick = () => {
    if (headerText === "All Games") return;
    setSearchValue("");
    setHeaderText("All Games");
    const { platforms } = axiosParams;
    setAxiosParams({ platforms });
  };
  const handleGenreClick = (genre: ImageKeys) => {
    const slug = genre.toLowerCase();
    const headertext = genre.toUpperCase().split("-").join(" ");
    if (headerText === headertext) return;
    setSearchValue("");
    setHeaderText(headertext);
    const { search, ...rest } = axiosParams;
    if (slug === "rpg") {
      setAxiosParams({ ...rest, genres: "role-playing-games-rpg" });
      return;
    }
    setAxiosParams({ ...rest, genres: slug });
  };
  return (
    <div className="relative">
      <div
        className={`h-fit transition-all duration-500 ${
          sidebarVisiblty
            ? "sh:opacity-0 sh:scale-0"
            : "sh:opacity-100 sh:scale-100"
        } sh:absolute sh:z-[100] sh:pl-[20px] sh:pr-[30px] sh:shadow-md sh:rounded-md sh:mt-5 ${
          switchValue ? "sh:bg-black" : "sh:bg-white"
        } p-[20px] pl-0 w-fit max-w-fit flex flex-col`}
      >
        <h1
          onClick={handleHomeClick}
          className={`text-[30px] ${
            headerText === "All Games" && "opacity-60 !cursor-default"
          } hover:opacity-60 cursor-pointer text-nowrap mb-2 font-bold`}
        >
          All Games
        </h1>
        <h1 className="text-[30px] mb-2 font-bold">Genres</h1>
        {genres.map((genre) => (
          <div
            onClick={() => handleGenreClick(genre)}
            key={genre}
            className={`flex w-fit ${
              headerText === genre.toUpperCase() && "opacity-60 !cursor-default"
            } gap-3 text-nowrap items-center p-1 pl-[1px] cursor-pointer text-[20px] hover:opacity-60 transition-opacity duration-200  rounded-md px-3`}
          >
            <img
              className="w-[36px]"
              src={Images.getSideBarIcon(genre)}
              alt={`${genre} genre image`}
            />
            <h2 className="max-w-fit">{genre}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
