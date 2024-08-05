import React from "react";
import Navbar from "./Navbar";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Navbar2 from "./Navbar2";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className=" fixed top-0 z-20 backdrop-blur-xl w-[100%] mb-[180px]">
      <div className=" mx-auto max-w-[1300px] py-4">
        <div className="hidden lg:flex justify-between px-3 items-center ">
          <div className=" flex justify-between items-center gap-3">
            <a href="/">
              <h1 className=" text-purple-800 text-[30px]">Logo</h1>
            </a>
            <Navbar />
          </div>
          <div className=" flex gap-4">
            <NavLink to={"/Xizmatlar"}>
              <button className=" bg-purple-500 p-2 text-white rounded-lg">
                Xizmatlar
              </button>
            </NavLink>

            <select className=" border-2 px-3 rounded-md" name="" id="">
              <option value="">Uz</option>
              <option value="">Ru</option>
            </select>
          </div>
        </div>
        {/*  */}
        <div className=" flex lg:hidden items-center justify-between px-2">
          <div>
            <h1 className=" text-purple-800 text-[30px]">Logo</h1>
          </div>
          <div className=" flex gap-4">
            <button className=" bg-purple-500 p-2 text-white rounded-lg">
              Xizmatlar
            </button>
            <button onClick={toggleDrawer}>
              <img
                width={30}
                src="https://www.banquet.uz/assets/icons/fries-menu.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
          <div className=" mx-auto pl-[100px] pt-28">
            <Navbar2 />
            <select className=" border-2 px-3 rounded-md" name="" id="">
              <option value="">Uz</option>
              <option value="">Ru</option>
            </select>
          </div>
        </Drawer>
      </div>
      <hr />
    </div>
  );
};

export default Header;
