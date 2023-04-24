import ReactPlayer from "react-player"
import Hero from "./../components/Hero"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Church.css'

function Church({ addExp, addExpNotif }) {
    const [conferenceExp, setConferenceExp] = useState(8);
    const [targetExp, setTargetExp] = useState(3);
    const [reactExp, setReactExp] = useState(3);
    const [javascriptExp, setJavascriptExp] = useState(3);

    return (
        <>
            <Hero title="Working for the Church" subtitle={"April 2022 - Present"} imageName={"romestainedglass.jpg"} height={"50vh"} />
            <div className="church-content">
                <div className="conference-header">
                    <h1>ICS CON</h1>
                    <h2>March 6th, 2023</h2>
                </div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <img id="ics-con-image-1" src={`/assets/insight-conference.jpg`} alt="Insight ICS Con" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img id="ics-con-image-2" className="content-image" src={`/assets/insight-conference-selfie.jpg`} alt="Insight ICS Con" />
                    </SwiperSlide>
                </Swiper>
                <div className="content-container">
                    <div className="content-paragraph">"Working for the church has been exciting for me.
                        I've had an overwhelmingly positive experience with the culture at my workplace. One of the things that has made it great is the opportunity to connect with colleagues from different teams and portfolios. During breakfast on the first day of ICS Con, I joined a group of people who warmly welcomed me and started asking about my work. This inclusive and welcoming atmosphere was not a one-off occurrence; I noticed that people frequently initiated conversations with colleagues they hadn't met before during meal times.
                        <br /><br />
                        What's also meaningful to me is the impact of the work I'm doing. Through the tests I've been involved in, we've been able to affect over 30 million monthly users who access
                        <span style={{ fontWeight: "bold", cursor: "pointer" }}
                            onMouseOver={() => {
                                if (conferenceExp !== 0) {
                                    addExpNotif(conferenceExp)
                                    addExp(conferenceExp)
                                    setConferenceExp(0)
                                }
                            }} onClick={() => {
                                if (conferenceExp !== 0) {
                                    addExpNotif(conferenceExp)
                                    addExp(conferenceExp)
                                    setConferenceExp(0)
                                }
                                window.open("https://churchofjesuschrist.org/", "_blank");
                            }}
                        > churchofjesuschrist.org</span>, extending beyond the Church's membership in Utah to reach people all over the world. It's been deeply satisfying to be part of something that contributes to a meaningful purpose and has such a wide-ranging impact."
                    </div>
                    <div className="content-paragraph">The team that I am on is the Experience Opitmization team. We run AB tests on churchofjesuschrist.org and I have personally created or continued various tests for the website. I have done several tests which include Banners for Easter, Chat bots for the main page, Gospel Library icons, Tools vs Resources, New Homepage, Content Square, and much more.</div>
                    <div className="content-paragraph">I have also worked on Front-end tickets for the Church's calendar as well</div>
                    <img id="circle-profile" src={`/assets/profile-cropped.png`} alt="Insight ICS Con" />
                </div>
                <div className="skills-header">
                    <h1>Skills</h1>
                </div>
                <div className="skills">
                    <div className="skill" id="target" style={{ backgroundColor: '#e50606' }}
                        onMouseOver={() => {
                            if (targetExp !== 0) {
                                addExpNotif(targetExp)
                                addExp(targetExp)
                                setTargetExp(0)
                            }
                        }} onClick={() => {
                            if (targetExp !== 0) {
                                addExpNotif(targetExp)
                                addExp(targetExp)
                                setTargetExp(0)
                            }
                            window.open("https://business.adobe.com/products/target/adobe-target.html", "_blank");
                        }}
                    ></div>
                    <div className="skill" id="react-logo" style={{ backgroundColor: '#5ED3F4' }}
                        onMouseOver={() => {
                            if (reactExp !== 0) {
                                addExpNotif(reactExp)
                                addExp(reactExp)
                                setReactExp(0)
                            }
                        }} onClick={() => {
                            if (reactExp !== 0) {
                                addExpNotif(reactExp)
                                addExp(reactExp)
                                setReactExp(0)
                            }
                            window.open("https://react.dev/", "_blank");
                        }}></div>
                    <div className="skill" id="javascript-logo"
                        onMouseOver={() => {
                            if (javascriptExp !== 0) {
                                addExpNotif(javascriptExp)
                                addExp(javascriptExp)
                                setJavascriptExp(0)
                            }
                        }} onClick={() => {
                            if (javascriptExp !== 0) {
                                addExpNotif(javascriptExp)
                                addExp(javascriptExp)
                                setJavascriptExp(0)
                            }
                            window.open("https://www.javascript.com/", "_blank");
                        }}></div>
                </div>
            </div>

        </>
    );
}

export default Church;
