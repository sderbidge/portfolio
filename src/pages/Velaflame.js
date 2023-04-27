import Hero from "../components/Hero"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Velaflame.css'

function Velaflame({ addExp, addExpNotif }) {
    const [flutterExp, setFlutterExp] = useState(parseInt(localStorage.getItem("velaflame-flutter-exp")));
    const [rainmakerExp, setRainmakerExp] = useState(parseInt(localStorage.getItem("velaflame-rainmaker-exp")));
    const [dartExp, setDartExp] = useState(parseInt(localStorage.getItem("velaflame-dart-exp")));

    return (
        <>
            <Hero title="Velaflame Capstone" subtitle={"September 2022 - April 2023"} imageName={"evermore.jpg"} height={"50vh"} />
            <Swiper id="velaflameSwiper" navigation={true} modules={[Navigation]}>
                <SwiperSlide>
                    <iframe width="70%" height="80%" src="https://www.youtube.com/embed/hF1vHPyRBpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-picture" src={`/assets/VelaflameMidtermPicture.jpg`} alt="Velaflame Midterm" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-picture" src={`/assets/VelaflameFinalPicture.jpg`} alt="Velaflame Final" />
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
                            localStorage.setItem("velaflame-flutter-exp", 0)
                        }
                    }} onClick={() => {
                        if (rainmakerExp !== 0) {
                            addExpNotif(rainmakerExp)
                            addExp(rainmakerExp)
                            setRainmakerExp(0)
                            localStorage.setItem("velaflame-flutter-exp", 0)
                        }
                        window.open("https://rainmaker.espressif.com/", "_blank");
                    }}></div>
                <div className="skill" id="flutter" style={{ backgroundColor: '#e50606' }}
                    onMouseOver={() => {
                        if (flutterExp !== 0) {
                            addExpNotif(flutterExp)
                            addExp(flutterExp)
                            setFlutterExp(0)
                            localStorage.setItem("velaflame-rainmaker-exp", 0)
                        }
                    }} onClick={() => {
                        if (flutterExp !== 0) {
                            addExpNotif(flutterExp)
                            addExp(flutterExp)
                            setFlutterExp(0)
                            localStorage.setItem("velaflame-rainmaker-exp", 0)
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
                            localStorage.setItem("velaflame-dart-exp", 0)
                        }
                    }} onClick={() => {
                        if (dartExp !== 0) {
                            addExpNotif(dartExp)
                            addExp(dartExp)
                            setDartExp(0)
                            localStorage.setItem("velaflame-dart-exp", 0)
                        }
                        window.open("https://dart.dev/", "_blank");
                    }}></div>
            </div>
        </>
    )
}

export default Velaflame;
