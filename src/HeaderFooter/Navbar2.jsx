import { Link } from "react-scroll";

const Navbar2 = () => {
  return (
    <div className=" flex flex-col gap-3">
      <Link
        className=" cursor-pointer"
        activeClass="news"
        to="news"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Yangiliklar
      </Link>
      <Link
        className=" cursor-pointer"
        activeClass="aboutUs"
        to="aboutUs"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Biz haqimizda
      </Link>
      <Link
        className=" cursor-pointer"
        activeClass="status"
        to="status"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Statistika
      </Link>
      <Link
        className=" cursor-pointer"
        activeClass="galery"
        to="galery"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Galereya
      </Link>
      <Link
        className=" cursor-pointer"
        activeClass="boglanish"
        to="boglanish"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Bog'lanish
      </Link>
    </div>
  );
};

export default Navbar2;
