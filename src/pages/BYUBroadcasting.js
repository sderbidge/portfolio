import ReactPlayer from "react-player"
import Hero from "../components/Hero"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './BYUBroadcasting.css'

function BYUBroadcasting({ addExp, addExpNotif }) {
    const [vuejsExp, setVuejsExp] = useState(3);
    const [nodeExp, setNodeExp] = useState(5);
    const [dockerExp, setDockerExp] = useState(7);

    return (
        <>
            <Hero title="BYU Broadcasting" subtitle={"February 2022 - December 2022"} imageName={"byubroadcasting.jpg"} />
            <Swiper id="broadcasting-swiper-slide" navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <iframe width="70%" height="80%" src="https://www.youtube.com/embed/f9wuC3HrpqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe width="70%" height="80%" src="https://www.youtube.com/embed/CE1UZY-7bq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-picture" src={`/assets/broadcasting-behind-the-scenes.jpg`} alt="Insight ICS Con" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-picture" src={`/assets/BYUBroadcastingDesk.jpg`} alt="Insight ICS Con" />
                </SwiperSlide>
            </Swiper>
            <div id="byutv-markdown-section">
                <h1 className="byutvheader">About BYUtv</h1>
                <p>BYUtv creates purposeful, engaging viewing experiences that entertain, inspire, uplift, and improve families and communities. Through its broadcast and digital channels, BYU Broadcasting reaches millions of unique and returning visitors each year.&nbsp;</p>
                <p>Based in the United States but&nbsp;partnering with production and distribution entities around the globe, BYUtv furthers the reach of its content worldwide. Partners include the BBC, Paramount Global Content Distribution, WildBrain, CBBC, Shaftesbury, 9 Story Media Group, The Australian Broadcasting Company, INE Entertainment, marblemedia, Forte, and Sphere Animation,&nbsp;among others.&nbsp;</p>
                <p>BYUtv is available via satellite and cable providers to over 30 million US homes. Its streaming platform (available on Roku, iOS, Android, Apple TV, Amazon Fire, and byutv.org) carries over 2,000 hours of scripted and non-scripted series, sports, movies, specials, and religious programming.</p>
                <h1 className="byutvheader">My Experience</h1>
                <p>I started at BYU Broadcasting as a Front-end Developer. I developed the end of episode countdown to automatically bring the viewer to the next episode at the end of the video. I mostly worked on various tickets to improve the experience of the user.</p>
                <p>After my first internship with the Church of Jesus Christ, I came back on as a Back End developer using Express, GraphQL, Node, with MySql and JOI Schemas. I also used docker to spin up containers for each Micro-Service. In my time there I completed over 100 tickets.</p>
                <p></p>
            </div>
            <div id="byu-broadcasting-skills-header">
                <h1>Skills</h1>
            </div>
            <div className="skills">
                <div className="skill" id="vuejs" style={{ backgroundColor: '#fff' }}
                    onMouseOver={() => {
                        if (vuejsExp !== 0) {
                            addExpNotif(vuejsExp)
                            addExp(vuejsExp)
                            setVuejsExp(0)
                        }
                    }} onClick={() => {
                        if (vuejsExp !== 0) {
                            addExpNotif(vuejsExp)
                            addExp(vuejsExp)
                            setVuejsExp(0)
                        }
                        window.open("https://vuejs.org/", "_blank");
                    }}></div>
                <div className="skill" id="node" style={{ backgroundColor: '#e50606' }}
                    onMouseOver={() => {
                        if (nodeExp !== 0) {
                            addExpNotif(nodeExp)
                            addExp(nodeExp)
                            setNodeExp(0)
                        }
                    }} onClick={() => {
                        if (nodeExp !== 0) {
                            addExpNotif(nodeExp)
                            addExp(nodeExp)
                            setNodeExp(0)
                        }
                        window.open("https://nodejs.org/en", "_blank");
                    }}
                ></div>
                <div className="skill" id="docker"
                    onMouseOver={() => {
                        if (dockerExp !== 0) {
                            addExpNotif(dockerExp)
                            addExp(dockerExp)
                            setDockerExp(0)
                        }
                    }} onClick={() => {
                        if (dockerExp !== 0) {
                            addExpNotif(dockerExp)
                            addExp(dockerExp)
                            setDockerExp(0)
                        }
                        window.open("https://www.docker.com/", "_blank");
                    }}></div>
            </div>
        </>
    )
}

export default BYUBroadcasting;
