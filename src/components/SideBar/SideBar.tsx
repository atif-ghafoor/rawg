import Images, { ImageKeys } from "../../services/AllImages";

const SideBar = () => {
  const genres: ImageKeys[] = [
    "Free Online Games",
    "Action",
    "Strategy",
    "RPG",
    "Shooter",
    "Adventure",
    "Puzzle",
    "Racing",
    "Sports",
  ];
  return (
    <div className="h-fit p-[20px] pl-0 w-fit max-w-fit flex flex-col">
      <h1 className="text-[30px] mb-2 font-bold">Genres</h1>
      {genres.map((genre) => (
        <div
          key={genre}
          className="flex w-fit gap-3 text-nowrap items-center p-1 pl-[1px] cursor-pointer text-[20px] hover:opacity-60 transition-opacity duration-200  rounded-md px-3"
        >
          <img
            className="w-[36px]"
            src={Images.getImage(genre)}
            alt={`${genre} genre image`}
          />
          <h2 className="max-w-fit">{genre}</h2>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
