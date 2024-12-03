import INTheValeyOfGod from "../../img/INTheValleyOfGod.jpg";
import { IoLogoWindows, IoLogoApple } from "react-icons/io5";
import { VscTerminalLinux } from "react-icons/vsc";
import "./video.css";

interface Props {
  switchValue: boolean;
  img?: string;
  title?: string;
  releaseDate?: string;
  genres?: string[];
  chart?: string;
}

const Video = ({
  img = INTheValeyOfGod,
  title = "In The Valley of Gods",
  releaseDate = "Dec 31, 2029",
  genres = ["Action", "Adventure", "Indie"],
  chart = "#1 Top 2029",
  switchValue,
}: Props) => {
  return (
    <div
      className={`card relative rounded-xl w-fit h-fit hover:rounded-b-none max-w-[330px] flex flex-col shadow-md ${
        switchValue ? "bg-[#202020]" : "bg-gray-100"
      }`}
    >
      <div className="video">
        <img className="w-full rounded-md" src={img} alt="" />
      </div>
      <div className="otherInfo p-5 pb-7 flex flex-col gap-2">
        <div className="icons flex gap-1 text-[13.5px]">
          <IoLogoWindows />
          <IoLogoApple />
          <VscTerminalLinux />
        </div>
        <h1 className="title text-[23px] font-bold">{title}</h1>
      </div>
      <div
        className={`MoreInfo top-[90%] rounded-xl shadow-md rounded-t-none left-0 p-5 w-full ${
          switchValue ? "bg-[#202020]" : "bg-gray-100"
        } opacity-0 absolute z-10 flex-col gap-3 text-[12px] mt-2 flex cursor-default`}
      >
        <h1 className="flex justify-between items-center">
          <span className="text-[#797979]">Release Date: </span>
          <span>{releaseDate}</span>
        </h1>
        <h1 className="flex justify-between items-center">
          <span className="text-[#797979]">Genres: </span>
          <span>{genres.join(" ")}</span>
        </h1>
        <h1 className="flex justify-between items-center">
          <span className="text-[#797979]">Chart: </span>
          <span>{chart}</span>
        </h1>
      </div>
    </div>
  );
};

export default Video;
