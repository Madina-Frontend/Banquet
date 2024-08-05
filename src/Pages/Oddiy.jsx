import React, { useState } from "react";
import Menu1 from "../Main/BizningMenu/Menu1";
import Btn from "../Main/BizningMenu/Btn";
import Menu2 from "../Main/BizningMenu/Menu2";
import Menu3 from "../Main/BizningMenu/Menu3";

const Standart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  let back = [
    {
      id: 111,
      img: "https://i.redd.it/tn8wim1acm601.jpg",
      name: "madina",
    },
  ];
  const [activeButton, setActiveButton] = useState(1);
  const buttonClicker = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (name === "" || phone === "") {
      setError("Iltimos, hamma maydonlarni to'ldiring");
      return;
    } else {
      console.log("Ariza yuborildi", name, phone);
      setError("Ariza yuborildi");
    }
  };

  const [imageSrc, setImageSrc] = useState(
    "https://www.banquet.uz/_next/image?url=%2Fassets%2Fimages%2Fbase-catering.jpeg&w=384&q=75"
  ); // Dastlabki rasm

  const handleClick = (newSrc) => {
    setImageSrc(newSrc);
  };

  return (
    <div className="mt-[90px]">
      <h1 className=" text-center text-[30px] text-purple-500">Bizning menu</h1>
      <div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-6 mb-3">
          <button
            className={`border-2 py-3 px-5 rounded-xl ${
              activeButton === 1 ? "border-green-500 text-green-500" : ""
            }`}
            onClick={() => buttonClicker(1)}
          >
            menu-1
          </button>
          <button
            className={`border-2 py-3 px-5 rounded-xl ${
              activeButton === 2 ? "border-green-500 text-green-500" : ""
            }`}
            onClick={() => buttonClicker(2)}
          >
            menu-2
          </button>
          <button
            className={`border-2 py-3 px-5 rounded-xl ${
              activeButton === 3 ? "border-green-500 text-green-500" : ""
            }`}
            onClick={() => buttonClicker(3)}
          >
            menu-3
          </button>
          <button
            className={`border-2 py-3 px-5 rounded-xl ${
              activeButton === 4 ? "border-green-500 text-green-500" : ""
            }`}
            onClick={() => buttonClicker(4)}
          >
            menu-4
          </button>
          <button
            className={`border-2 py-3 px-5 rounded-xl ${
              activeButton === 5 ? "border-green-500 text-green-500" : ""
            }`}
            onClick={() => buttonClicker(5)}
          >
            menu-5
          </button>
        </section>
      </div>
      <div>
        {back.map((v) => {
          if (activeButton == 1) {
            return (
              <div id={v.id}>
                <Menu1 />
              </div>
            );
          }
          if (activeButton == 2) {
            return (
              <div id={v.id}>
                <Menu2 />
              </div>
            );
          }
          if (activeButton == 3) {
            return (
              <div id={v.id}>
                <Menu3 />
              </div>
            );
          }
          if (activeButton == 4) {
            return (
              <div id={v.id}>
                <h1>Bu menuda hech narsa yo'q</h1>
              </div>
            );
          }
          if (activeButton == 5) {
            return (
              <div id={v.id}>
                <h1>Bu menuda hech narsa yo'q</h1>
              </div>
            );
          }
        })}
      </div>

      <div>
        <h1 className=" text-center text-[30px] text-purple-500 mt-[50px]">
          Stol va stullar
        </h1>
        <div className=" lg:flex lg:justify-between grid gap-3 w-[100%]">
          <img
            src={imageSrc}
            alt="Rasm"
            className=" lg:h-[350px] lg:w-[500px] w-[100%] h-[350px] rounded-lg object-cover"
          />
          <div className=" w-[100%]">
            <div className=" gap-3 overflow-hidden">
              <button
                className=" ml-2 mb-2 border-2 overflow-hidden focus:border-green-500 focus:text-green-500 border-black p-2 rounded-lg"
                onClick={() =>
                  handleClick(
                    "https://www.banquet.uz/_next/image?url=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1679280550151-4c56e920b277%3Fw%3D800%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFibGV8ZW58MHx8MHx8fDA%253D&w=384&q=75"
                  )
                }
              >
                Свободный Хлопковый
              </button>
              <button
                className=" ml-2 mb-2 border-2 overflow-hidden focus:border-green-500 focus:text-green-500 border-black p-2 rounded-lg"
                onClick={() =>
                  handleClick(
                    "https://www.banquet.uz/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1581428982868-e410dd047a90%3Fw%3D800%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV8ZW58MHx8MHx8fDA%253D&w=384&q=75"
                  )
                }
              >
                Практичный Пластиковый
              </button>
              <button
                className=" ml-2 mb-2 border-2 overflow-hidden focus:border-green-500 focus:text-green-500 border-black p-2 rounded-lg"
                onClick={() =>
                  handleClick(
                    "https://www.banquet.uz/_next/image?url=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1670315264849-8cb4a1b1342e%3Fw%3D800%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV8ZW58MHx8MHx8fDA%253D&w=384&q=75"
                  )
                }
              >
                Интеллектуальный
              </button>
              <button
                className=" ml-2 mb-2 border-2 overflow-hidden focus:border-green-500 focus:text-green-500 border-black p-2 rounded-lg"
                onClick={() =>
                  handleClick(
                    "https://www.banquet.uz/_next/image?url=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1670950411934-e21abf39191e%3Fw%3D800%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRhYmxlfGVufDB8fDB8fHww&w=384&q=75"
                  )
                }
              >
                Интеллектуальный
              </button>
              <button
                className=" ml-2 mb-2 border-2 overflow-hidden focus:border-green-500 focus:text-green-500 border-black p-2 rounded-lg"
                onClick={() =>
                  handleClick(
                    "https://www.banquet.uz/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1437419764061-2473afe69fc2%3Fw%3D800%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhYmxlfGVufDB8fDB8fHww&w=384&q=75"
                  )
                }
              >
                Большой Натуральный
              </button>
              <button
                className=" ml-2 mb-2 border-2 overflow-hidden focus:border-green-500 focus:text-green-500
                 border-black p-2 rounded-lg"
                onClick={() =>
                  handleClick(
                    "https://www.banquet.uz/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533090481720-856c6e3c1fdc%3Fw%3D800%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRhYmxlfGVufDB8fDB8fHww&w=384&q=75"
                  )
                }
              >
                Потрясающий Кожанный
              </button>
            </div>

            <div className=" mt-4">
              <h1 className=" text-[20px]">Stol turlari</h1>
              <div className=" flex gap-4">
                <button className=" border-2  border-black font-bold focus:border-green-500 focus:text-green-500 p-2 rounded-lg">
                  To'rtburchak
                </button>
                <button className="border-2  border-black font-bold focus:border-green-500 focus:text-green-500 p-2 rounded-lg">
                  Dumaloq
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-end">
        <button
          onClick={handleOpenModal}
          className=" text-purple-500 border-purple-500 border-2 p-2 rounded-lg"
        >
          Buyurtma berish
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg ">
            <div id="boglanish">
              <div className=" flex flex-col text-center justify-center items-center mx-auto">
                <div className=" flex items-center justify-between w-[100%]">
                  <b className=" text-[20px]">Qayta Aloqa</b>
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
                <input
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  className=" border-2 mt-8 p-3 w-72  outline-blue-600 rounded-lg"
                  type="text"
                  placeholder="Ism familiyangizni qoldiring"
                />
                <div>
                  <input
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    className=" border-2 mt-3 p-3 w-72  outline-blue-600 rounded-lg"
                    type="text"
                    placeholder="telefon raqamingizni kiriting"
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}{" "}
                <button
                  onClick={handleSubmit}
                  className=" bg-purple-500 text-white px-[20px] py-2 mt-4 rounded-md"
                >
                  Yuborish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Standart;
