import React from "react";
import { NavLink } from "react-router-dom";

const Loading = () => {
  return (
    <div className=" mt-[200px] mx-auto w-[100%] flex flex-col items-center justify-center">
      <h1 className=" text-[60px] text-purple-500 font-bold">404</h1>
      <p>Sahifa topilmadi</p>
      <NavLink to={'/'}>
        <button className=" bg-purple-500 text-white p-2 rounded-lg">Bosh sahifaga qaytish</button>
      </NavLink>
    </div>
  );
};

export default Loading;
