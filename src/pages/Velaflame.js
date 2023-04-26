import ReactPlayer from "react-player"
import Hero from "../components/Hero"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Velaflame.css'

function Velaflame({ addExp, addExpNotif }) {
    const [flutterExp, setFlutterExp] = useState(3);
    const [rainmakerExp, setRainmakerExp] = useState(3);
    const [dartExp, setDartExp] = useState(3);

    return (
        <>
            <Hero title="Velaflame Capstone" subtitle={"September 2022 - April 2023"} imageName={"evermore.jpg"} height={"50vh"} />
            <Swiper id="velaflameSwiper" navigation={true} modules={[Navigation]}>
                <SwiperSlide>
                    <ReactPlayer
                        url={`/assets/VelaflameFinalVideo.mp4`}
                        controls
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-picture" src={`/assets/VelaflameMidtermPicture.jpg`} alt="Insight ICS Con" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-picture" src={`/assets/VelaflameFinalPicture.jpg`} alt="Insight ICS Con" />
                </SwiperSlide>
            </Swiper>
            <div id="velaflame-skills-header">
                <h1>Skills</h1>
            </div >
            <div className="skills">
                <div className="skill" id="rainmaker" style={{ backgroundColor: '#fff' }}
                    onMouseOver={() => {
                        if (rainmakerExp !== 0) {
                            addExpNotif(rainmakerExp)
                            addExp(rainmakerExp)
                            setRainmakerExp(0)
                        }
                    }} onClick={() => {
                        if (rainmakerExp !== 0) {
                            addExpNotif(rainmakerExp)
                            addExp(rainmakerExp)
                            setRainmakerExp(0)
                        }
                        window.open("https://rainmaker.espressif.com/", "_blank");
                    }}></div>
                <div className="skill" id="flutter" style={{ backgroundColor: '#e50606' }}
                    onMouseOver={() => {
                        if (flutterExp !== 0) {
                            addExpNotif(flutterExp)
                            addExp(flutterExp)
                            setFlutterExp(0)
                        }
                    }} onClick={() => {
                        if (flutterExp !== 0) {
                            addExpNotif(flutterExp)
                            addExp(flutterExp)
                            setFlutterExp(0)
                        }
                        window.open("https://flutter.dev/", "_blank");
                    }}
                ></div>
                <div className="skill" id="dart"
                    onMouseOver={() => {
                        if (dartExp !== 0) {
                            addExpNotif(dartExp)
                            addExp(dartExp)
                            setDartExp(0)
                        }
                    }} onClick={() => {
                        if (dartExp !== 0) {
                            addExpNotif(dartExp)
                            addExp(dartExp)
                            setDartExp(0)
                        }
                        window.open("https://dart.dev/", "_blank");
                    }}></div>
            </div>
        </>
    )
}

export default Velaflame;
