import { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { Params } from "./services/useService";

const Constant = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const [totalGames, setTotalGames] = useState<number>(NaN);
  const [selctedGenre, setGenre] = useState<Params>({});
  useEffect(() => {
    const Body = document.body;
    if (switchValue) {
      Body.classList.add("bg-[#151515]");
      Body.classList.add("text-white");
    } else {
      Body.classList.remove("text-white");
      Body.classList.add("bg-white");
      Body.classList.add("text-black");
    }
    return () => {
      Body.classList.remove("bg-[#151515]");
      Body.classList.remove("bg-white");
      Body.classList.remove("text-black");
    };
  }, [switchValue]);
  return (
    <>
      <div
        id="theme_body"
        className="w-full p-[20px] transition-all duration-300"
      >
        <NavBar
          totalGames={totalGames}
          switchValue={switchValue}
          setSwitchValue={setSwitchValue}
        />
        <div className="flex gap-5">
          <SideBar selctedGenre={selctedGenre} setGenre={setGenre} />
          <Content
            selctedGenre={selctedGenre}
            setGenre={setGenre}
            setTotalGames={setTotalGames}
            switchValue={switchValue}
          />
        </div>
      </div>
    </>
  );
};

export default Constant;
