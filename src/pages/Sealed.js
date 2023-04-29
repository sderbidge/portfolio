import Hero from "../components/Hero"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Sealed.css'

function Sealed({ addExp, addExpNotif }) {
    return (
        <>
            <Hero title="Sealed Forever" subtitle={"May 7th, 2021"} imageName={"LexiAndStephen.jpg"} />
            <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/LexiAndStephen2.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/LexiAndStephen3.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/LexiAndStephen4.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/LexiAndStephen5.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/LexiAndStephen6.jpg`} alt="" />
                </SwiperSlide>
            </Swiper>
            <div id="sealed-markdown-section">
                <h1 className="sealed-header">Families Can Be Together Forever</h1>
                <p>My wife and I were sealed for time and eternity in the Payson Temple on May 7th, 2021. We had our lunchin at Maglebys in Springville. Little did we know that Springville was where we would be for over a year and where it we would be when we had our first son. I am so grateful for my wife and for all that she has been through with me over the past 2 years.</p>
                <p>At the end of March 2023, my son Luke was born. My wife and I came in at 5am on a Monday morning and she had Luke at 12:39pm.</p>
            </div>
            <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide className="sealed-swiper2">
                    <img className="swiper-picture vertical-picture" src={`/assets/Awesome-Luke.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper2">
                    <img className="swiper-picture vertical-picture" src={`/assets/Super-Luke.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper2">
                    <img className="swiper-picture" src={`/assets/Luke.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper2">
                    <img className="swiper-picture vertical-picture" src={`/assets/Luke2.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper2">
                    <img className="swiper-picture vertical-picture" src={`/assets/Luke3.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper2">
                    <img className="swiper-picture vertical-picture" src={`/assets/Luke4.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper2">
                    <img className="swiper-picture vertical-picture" src={`/assets/Luke5.jpg`} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Sealed;
