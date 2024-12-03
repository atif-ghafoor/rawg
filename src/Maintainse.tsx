import { useState } from "react";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

const Constant = () => {
  const [switchValue, setSwitchValue] = useState(true);
  return (
    <>
      <div
        className={
          switchValue
            ? "w-full h-[100vh] bg-black p-[20px] text-white transition-opacity duration-300"
            : "w-full h-[100vh] bg-white p-[20px] text-black transition-all duration-300"
        }
      >
        <NavBar switchValue={switchValue} setSwitchValue={setSwitchValue} />
        <div className="flex">
          <SideBar />
          <Content switchValue={switchValue} />
        </div>
      </div>
    </>
  );
};

export default Constant;
