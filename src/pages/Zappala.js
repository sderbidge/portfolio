import Hero from "../components/Hero"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Zappala.css'

function Zappala({ addExp, addExpNotif }) {
    const [vuejsExp, setVuejsExp] = useState(parseInt(localStorage.getItem("z-vuejs-exp")));
    const [electronExp, setElectronExp] = useState(parseInt(localStorage.getItem("z-electron-exp")));
    const [javascriptExp, setJavascriptExp] = useState(parseInt(localStorage.getItem("z-javascript-exp")));

    return (
        <>
            <Hero title="Dr. Zappala Research" subtitle={"April 2020 - January 2021"} imageName={"talmage.jpg"} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide id="zappala-swiper">
                    <iframe width="70%" height="80%" src="https://www.youtube.com/embed/072lMQyTXbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide id="zappala-swiper">
                    <img id="danielZappala" src={`/assets/DanielZappala.jpg`} alt="Daniel Zappala" />
                </SwiperSlide>
            </Swiper>
            <div id="zappala-markdown-section">
                <h1 className="zappala-header">Authentication - The Problem</h1>
                <p>People need to authenticate to systems and to each other. Currently, usernames and passwords dominate the secure authentication market. Passwords tend to be a bad implementation because users are forced to “strengthen” their security, by using long, random passwords, password managers, two factor auth, etc. </p>
                <h1 className="zappala-header">My Experience</h1>
                <p>To help solve the problem, I individually created a Desktop App by researching and using Vuejs and Electron to package the project. When the user goes to login they will recieve a push notification to open up the desktop app and login. The CA stores the certificates when the user registers. This way the user doesn't even need to enter a password.</p>
            </div>
            <div id="zappala-skills-header">
                <h1>Skills</h1>
            </div>
            <div className="skills">
                <div className="skill" id="vuejs" style={{ backgroundColor: '#fff' }}
                    onMouseOver={() => {
                        if (vuejsExp !== 0) {
                            addExpNotif(vuejsExp)
                            addExp(vuejsExp)
                            setVuejsExp(0)
                            localStorage.setItem("z-vuejs-exp", 0)
                        }
                    }} onClick={() => {
                        if (vuejsExp !== 0) {
                            addExpNotif(vuejsExp)
                            addExp(vuejsExp)
                            setVuejsExp(0)
                            localStorage.setItem("z-vuejs-exp", 0)
                        }
                        window.open("https://vuejs.org/", "_blank");
                    }}></div>
                <div className="skill" id="electron" style={{ backgroundColor: '#e50606' }}
                    onMouseOver={() => {
                        if (electronExp !== 0) {
                            addExpNotif(electronExp)
                            addExp(electronExp)
                            setElectronExp(0)
                            localStorage.setItem("z-electron-exp", 0)
                        }
                    }} onClick={() => {
                        if (electronExp !== 0) {
                            addExpNotif(electronExp)
                            addExp(electronExp)
                            setElectronExp(0)
                            localStorage.setItem("z-electron-exp", 0)
                        }
                        window.open("https://dotnet.microsoft.com/en-us/download", "_blank");
                    }}
                ></div>
                <div className="skill" id="javascript"
                    onMouseOver={() => {
                        if (javascriptExp !== 0) {
                            addExpNotif(javascriptExp)
                            addExp(javascriptExp)
                            setJavascriptExp(0)
                            localStorage.setItem("z-javascript-exp", 0)
                        }
                    }} onClick={() => {
                        if (javascriptExp !== 0) {
                            addExpNotif(javascriptExp)
                            addExp(javascriptExp)
                            setJavascriptExp(0)
                            localStorage.setItem("z-javascript-exp", 0)
                        }
                        window.open("https://www.mysql.com/", "_blank");
                    }}></div>
            </div>
        </>
    )
}

export default Zappala;
