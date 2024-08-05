import BizHaqimizda from "../Main/BizHaqimizda"
import Boglanish from "../Main/Boglanish"
import MijozlarimizFikrlari from "../Main/MijozlarniFikrlari"
import Statistika from "../Main/Statistika"
import SwiperBanner from "../Main/SwiperBanner"
import Yangiliklar from "../Main/Yangiliklar"

const Home = () => {
  return (
    <div>
       <SwiperBanner/>
          <Yangiliklar />
          <BizHaqimizda />
          <Statistika/>
          <MijozlarimizFikrlari/>
          <Boglanish/>
    </div>
  )
}

export default Home
