import Images, { ImageKeys } from "../../services/AllImages";
import { Params } from "../../services/useService";

interface Props {
  selctedGenre: Params;
  setGenre: (value: Params) => void;
}
const SideBar = ({ selctedGenre, setGenre }: Props) => {
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
    if (!selctedGenre.genres) return;
    setGenre({});
  };
  const handleGenreClick = (genre: ImageKeys) => {
    const slug = genre.toLowerCase();
    if (selctedGenre.genres === slug) return;
    setGenre({ genres: slug });
  };
  console.log(selctedGenre);
  return (
    <div className="h-fit p-[20px] pl-0 w-fit max-w-fit flex flex-col">
      <h1
        onClick={handleHomeClick}
        className={`text-[30px] ${
          !selctedGenre.genres && "opacity-60 !cursor-default"
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
            selctedGenre.genres === genre.toLocaleLowerCase() &&
            "opacity-60 !cursor-default"
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
  );
};

export default SideBar;
