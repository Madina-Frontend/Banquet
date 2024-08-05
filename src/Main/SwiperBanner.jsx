
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperBanner = () => {
    return (
        <>
            <div id="galery" className=" mt-[70px]">
                <Swiper
                    height={300}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img className=" w-[100%] h-[60vh] rounded-lg" src="https://images.squarespace-cdn.com/content/v1/5609487be4b035506396fb9c/cd582309-b685-4fc1-ad59-8a0823fd755f/Office+Plants+photo+1.13.jpeg" alt="" />
                            <div className=" text-white relative bottom-[200px] w-[500px] left-5">
                                <h1 className=" text-[40px]">Coffe Breack xizmati</h1>
                                <p className=" text-[20px]">Bizning ketrin xizmatimiz sizlarga sifatli va xamyonbob tadbirlarni o'tkazishda yordam beradi</p>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div>
                        <img className=" w-[100%] h-[60vh] rounded-lg" src="https://media.istockphoto.com/id/1073787820/photo/open-plan-office-with-work-stations-and-computers.jpg?b=1&s=612x612&w=0&k=20&c=nH2Ekn41424XmExvY6AgUTLOcN6ldmXeg4fhCc5yEbA=" alt="" />
                        <div className=" text-white relative bottom-[200px] w-[500px] left-5">
                            <h1 className=" text-[40px]">Coffe Breack xizmati</h1>
                            <p className=" text-[20px]">Bizning ketrin xizmatimiz sizlarga sifatli va xamyonbob tadbirlarni o'tkazishda yordam beradi</p>
                            <img src="" alt="" />
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div>
                        <img className=" w-[100%] h-[60vh] rounded-lg" src="https://plus.unsplash.com/premium_photo-1682608388687-f26e5de54316?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div className=" text-white relative bottom-[200px] w-[500px] left-5">
                            <h1 className=" text-[40px]">Coffe Breack xizmati</h1>
                            <p className=" text-[20px]">Bizning ketrin xizmatimiz sizlarga sifatli va xamyonbob tadbirlarni o'tkazishda yordam beradi</p>
                            <img src="" alt="" />
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default SwiperBanner;
