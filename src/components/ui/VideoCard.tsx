import { IoLogoWindows, IoLogoApple } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { FaPlaystation, FaXbox, FaPlus, FaStar } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { VscTerminalLinux } from "react-icons/vsc";
import Images, { ImageKeys } from "../../services/AllImages";
import "./video.css";

const icons: any = {
  android: <BsAndroid2 key={5} />,
  ios: <MdPhoneIphone key={4} />,
  linux: <VscTerminalLinux key={7} />,
  mac: <IoLogoApple key={6} />,
  nintendo: <SiNintendo key={8} size={"25px"} />,
  pc: <IoLogoWindows key={1} />,
  playstation: <FaPlaystation key={2} />,
  xbox: <FaXbox key={3} />,
};

interface Props {
  added: number;
  cardCssClass: string;
  genres: string[];
  img: string;
  metacritic: number;
  plartForms: {
    id: number;
    slug: string;
  }[];
  releaseDate: string;
  rating: number;
  ratings: ImageKeys;
  switchValue: boolean;
  title: string;
}

const Video = ({
  added,
  cardCssClass,
  genres,
  img,
  metacritic,
  plartForms,
  releaseDate,
  rating,
  ratings,
  switchValue,
  title,
}: Props) => {
  return (
    // <div className="relative flex z-0 hover:z-10 items-center justify-center">
    <div
      className={`video-card mb-6 hover:translate-y-[-4px] rounded-xl h-fit ${cardCssClass} hover:rounded-b-none w-full flex flex-col shadow-md ${
        switchValue ? "bg-[#202020]" : "bg-gray-100"
      }`}
    >
      <div className="video">
        <img className="w-full rounded-md" src={img} alt="" />
      </div>
      <div className="otherInfo p-5 pb-7 flex flex-col gap-2">
        <div className="icons flex items-center justify-between text-[13.5px]">
          <div className="flex items-center gap-1">
            {plartForms.map((platform) => icons[platform.slug])}
          </div>
          {metacritic !== null && (
            <h1
              onClick={() => console.log(metacritic)}
              className="px-[5px] border-[1px] cursor-default rounded-sm font-bold border-green-500 text-green-500"
            >
              {metacritic}
            </h1>
          )}
        </div>
        <h1 className="title cursor-default flex flex-wrap items-center hover:opacity-60 text-[23px] font-bold">
          <span>{title} </span>
          <img
            className="ml-[7px] w-[26px]"
            src={Images.getRatingIcon(ratings)}
            alt=""
          />
        </h1>
        <div className="flex items-center gap-2">
          <button
            className={`flex items-center shadow-inner rounded-md w-fit gap-2 py-1 px-3 ${
              switchValue
                ? "hover:bg-white bg-[#373737] hover:text-black"
                : "bg-gray-200 hover:bg-black hover:text-white text-black"
            }`}
          >
            <FaPlus />
            <span>{added}</span>
          </button>
          <button
            className={`flex items-center shadow-inner rounded-md w-fit gap-2 py-1 px-3 ${
              switchValue
                ? "hover:bg-white bg-[#373737] hover:text-black"
                : "bg-gray-200 hover:bg-black hover:text-white text-black"
            }`}
          >
            <FaStar className="text-yellow-500" />
            <span>{rating}</span>
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`MoreInfo absolute rounded-xl shadow-md rounded-t-none p-5 pt-0 w-full  ${
            switchValue ? "bg-[#202020]" : "bg-gray-100"
          } opacity-0 z-30 flex-col gap-3 text-[12px] flex cursor-default`}
        >
          <h1 className="flex justify-between items-center">
            <span className="text-[#797979]">Release Date: </span>
            <span>{releaseDate}</span>
          </h1>
          <h1 className="flex justify-between items-center">
            <span className="text-[#797979]">Genres: </span>
            <span>{genres.join(", ")}</span>
          </h1>
          <h1 className="flex justify-between items-center">
            {/* <span className="text-[#797979]">Chart: </span>
          <span>{chart}</span> */}
          </h1>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Video;
