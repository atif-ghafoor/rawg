import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

const Constant = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <Content />
      </div>
    </>
  );
};

export default Constant;
