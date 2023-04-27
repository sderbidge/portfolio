import Hero from "../components/Hero"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Missionary.css'

function Missionary({ addExp, addExpNotif }) {
    return (
        <>
            <Hero title="Missionary Service" subtitle={"Molokai, Big Island, O'ahu"} imageName={"Hawaii-Hero.jpg"} />
            <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/Missionary-Deer.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/Missionary-Green-Landscape.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/Missionary-Teaching.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/Kalaupapa-Trip.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/Kalaupapa-Church.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/Donkeys.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture" src={`/assets/Tongan-Family.jpg`} alt="" />
                </SwiperSlide>
                <SwiperSlide className="sealed-swiper">
                    <img className="swiper-picture prophet" src={`/assets/PresidentNelson.jpg`} alt="" />
                </SwiperSlide>
            </Swiper>
            <div id="missionary-markdown-section">
                <h1 className="missionary-header">Molokai</h1>
                <p>On May 2nd, 2018 I went on a mission to the Hawaiian islands. When I recieved my assignment I went to an island where the family of an Elder I met in the MTC lived. It was inspiration that I went there. I knew that God had sent me there to serve his children. The island has a population of 7,000 people and is one of the places with the highest sea cliffs in the world.</p>
                <p>I was able to teach several different people on the island, and had some serious moments where I comforted the grandparents of children who were taken by CPS. My area covereed the entire island and my companion and I were the only missionaries on the island. I taught a man that was going to go to prison for 30 years who decided he wanted to learn more about Jesus Christ before he left. Finally I taught three sisters who wanted to be baptized on the first meeting. All of these people have a special place in my heart. I am grateful for them and for their love for God and their neighbors.</p>
                <h1 className="missionary-header">Big Island</h1>
                <p>When I went to Big Island I didn't realize that I was going to be there for 9 months. I covered three different areas while training a brand new missionary. The highlight of my service there was playing the violin for the Prophet Russel M. Nelson, the President of the Church of Jesus Christ of Latter-day Saints. Among the Tongan Choir that I played with was one of the converts that I baptized in Tongan.</p>
                <h1 className="missionary-header">O'ahu</h1>
                <p>O'ahu was the island I ended my mission on. It was amazing to play the violin as part of my ministry for the saints there. I played at Church meetings and Funerals. I played for people looking into the church and tried to help as best as I could. I did a lot of service on the island and tried to help others come closer to Jesus Christ.</p>
            </div>
        </>
    )
}

export default Missionary;
