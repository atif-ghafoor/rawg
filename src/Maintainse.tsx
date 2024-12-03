import { useState } from "react";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

const Constant = () => {
  const [switchValue, setSwitchValue] = useState(true);
  return (
    <>
      <div
        id="theme_body"
        className={
          switchValue
            ? "w-full bg-[#151515] p-[20px] text-white transition-opacity duration-300"
            : "w-full bg-white p-[20px] text-black transition-all duration-300"
        }
      >
        <NavBar switchValue={switchValue} setSwitchValue={setSwitchValue} />
        <div className="flex gap-5">
          <SideBar />
          <Content switchValue={switchValue} />
        </div>
      </div>
    </>
  );
};

export default Constant;
