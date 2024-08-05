import React, { useState } from "react";
const Boglanish = () => {
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

  return (
    <div id="boglanish">
      <h1 className=" text-[30px] mt-[40px]">Bog'lanish</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <img
          className=" w-[100%]"
          src="https://www.banquet.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcallcenter.abad4910.jpeg&w=640&q=75"
          alt=""
        />
        <div className=" flex flex-col text-center justify-center items-center mx-auto">
          <b className=" text-[20px]">Ariza qoldirish uchun</b>
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
  );
};

export default Boglanish;
