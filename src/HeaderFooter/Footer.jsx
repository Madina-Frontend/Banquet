

const Footer = () => {
  return (
    <div className=" bg-gray-100 mt-11 pt-12 pb-20 mb-0 bottom-0 mx-auto ">
      <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 max-w-[1300px] lg:items-center pl-5 justify-between mx-auto gap-[20px]">
        <div>
          <h1 className=" text-[40px]">Logo</h1>
        </div>
        <div>
          <p>Ichtimoiy tarmoqlarimiz</p>
          <div className=" flex items-center gap-3">
            <img
              src="https://www.banquet.uz/_next/static/media/telegram.23eda8a9.svg"
              alt=""
            />
            <img
              src="https://www.banquet.uz/_next/static/media/instagram.2b1c0dce.svg"
              alt=""
            />
            <img
              src="https://www.banquet.uz/_next/static/media/facebook.b2f90f2d.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className=" flex items-center gap-2">
            <img
              src="https://www.banquet.uz/_next/static/media/phone.2e862df4.svg"
              alt=""
            />
            <p>+998 (91) 919 20 20</p>
          </div>
          <div className=" flex items-center gap-2">
            <img
              src="https://www.banquet.uz/_next/static/media/email.b3124a79.svg"
              alt=""
            />
            <p>kamronalimov80@gmail.com</p>
          </div>
        </div>
        <div>
          <p>Toshkent shahri, Сhilanzor Yakkabog’ ko’chasi 25-uy</p>
          <button className=" flex gap-3 bg-white p-4 rounded-xl">
            <img
              src="https://www.banquet.uz/_next/static/media/map.85f5cc13.svg"
              alt=""
            />
            <p>Xarita</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
