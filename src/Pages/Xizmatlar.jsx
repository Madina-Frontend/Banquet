import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Xizmatlar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-[60px]">
      <b className="text-[30px]">Bizning xizmatlar</b>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center text-center gap-4">
        <div>
          <button
            onClick={handleOpenModal}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              className="transition duration-300 w-[344px] h-[230px] rounded-lg ease-in-out transform hover:scale-110"
              src="https://www.banquet.uz/_next/image?url=%2Fassets%2Fimages%2Fcatering.jpeg&w=640&q=75"
              alt=""
            />
            <b className=" relative bottom-7 text-[18px] text-white right-[80px]">Keytering xizmati</b>
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 shadow-lg ">
              <div className=" flex gap-3 items-center  justify-between mb-3">
                <p className=" text-[30px]">Tariflar</p>
                <button
                  onClick={handleCloseModal}
                  className=" hover:bg-gray-100"
                >
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/watchify-v1-0-80px/80/remove-80px-256.png"
                    className=" w-[40px]"
                    alt=""
                  />
                </button>
              </div>
              <div className=" flex  gap-3 items-center  overflow-hidden rounded-lg">
                <div className="relative">
                  <NavLink to={"/Oddiy"}>
                    <img
                      className="w-[162px] h-[230px] ease-in-out transform rounded-lg hover:scale-110 transition duration-300"
                      src="https://www.banquet.uz/_next/image?url=%2Fassets%2Fimages%2Fbase-catering.jpeg&w=384&q=75"
                      alt=""
                    />
                    <p className="absolute font-bold top-[200px] left-3 text-[20px] text-white ">
                      Oddiy
                    </p>
                  </NavLink>
                </div>
                <div className="relative">
                  <NavLink to={"/Standart"}>
                    <img
                      className="w-[162px] h-[230px] ease-in-out transform rounded-lg hover:scale-110 transition duration-300"
                      src="https://www.banquet.uz/_next/image?url=%2Fassets%2Fimages%2Fstandart-catering.jpeg&w=384&q=75"
                      alt=""
                    />
                    <p className="absolute font-bold top-[200px] left-3 text-[20px] text-white ">
                      Standart
                    </p>
                  </NavLink>
                </div>
                <div className="relative">
                  <NavLink to={'/Premium'}>
                    <img
                      className="w-[162px] h-[230px] ease-in-out transform rounded-lg hover:scale-110 transition duration-300"
                      src="https://www.banquet.uz/_next/image?url=%2Fassets%2Fimages%2Fpremium-catering.webp&w=384&q=75"
                      alt=""
                    />
                    <p className="absolute font-bold top-[200px] left-3 text-[20px] text-white ">
                      Premium
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className=" text-center flex justify-center">
          <NavLink to={"/ArendaXizmati"}>
            <div className=" relative overflow-hidden rounded-lg">
              <img
                className=" transition duration-300 w-[344px] h-[230px] ease-in-out transform hover:scale-110  rounded-lg"
                src="https://www.banquet.uz/_next/image?url=%2Fassets%2Fimages%2Frent.webp&w=828&q=75"
                alt=""
              />
              <b className=" relative bottom-7 text-[18px] text-white right-[90px]">Arenda xizmati</b>
            </div>
          </NavLink>
        </div>
        <div className=" text-center flex justify-center">
          <div className=" relative overflow-hidden rounded-lg">
            <NavLink to={"/CofeeBreack"}>
              <img
                className=" transition duration-300 w-[344px] rounded-lg h-[230px] ease-in-out transform hover:scale-110 "
                src="https://www.banquet.uz/_next/image?url=%2Fassets%2Fimages%2Fcofe-break.jpg&w=828&q=75"
                alt=""
              />
              <b className=" relative bottom-7 text-[18px] text-white right-[90px]">Coffe Breack</b>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xizmatlar;
