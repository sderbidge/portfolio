import Hero from "../components/Hero"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './BYULS.css'

function BYULS({ addExp, addExpNotif }) {
    const [vuejsExp, setVuejsExp] = useState(parseInt(localStorage.getItem("ls-vuejs-exp")));
    const [dotNetExp, setDotNetExp] = useState(parseInt(localStorage.getItem("ls-dotnet-exp")));
    const [mysqlExp, setMysqlExp] = useState(parseInt(localStorage.getItem("ls-mysql-exp")));

    return (
        <>
            <Hero title="College of Life Sciences" subtitle={"February 2021 - January 2022"} imageName={"lifesciences2.jpg"} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide id="byuls-swiper">
                    <iframe width="70%" height="80%" src="https://www.youtube.com/embed/072lMQyTXbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide id="byuls-swiper">
                    <img className="swiper-picture" src={`/assets/lifesciencesdesk.jpg`} alt="Insight ICS Con" />
                </SwiperSlide>
            </Swiper>
            <div class="markdown-section">
                <h1 className="header">About BYU Life Sciences</h1>
                <p>Of the college’s seven departments, five are located in the Life Sciences Building: Biology, Microbiology and Molecular Biology, Physiology and Developmental Biology, Plant and Wildlife Sciences, and Health Science. This building includes 16 teaching labs, three auditoriums, four conference rooms and more than 70 academic offices. All of the teaching laboratories, including anatomy labs, are on the second floor—also known as the “student” floor.</p>
                <p>The built-in common areas surrounding the lab classrooms include tables, couches and vending machines. Students can reserve conference rooms for study groups or other meetings. This “student” floor also houses Student Services (the college’s student advisement center), a Biology 100 help center, other areas where students can meet with teaching assistants, and large computer labs</p>
                <h1 className="header">My Experience</h1>
                <p>Working for the Life Sciences OIT Web Team was eye opening for me. Within the first few weeks I learned C#, applied Vuetify to Vuejs, and learned .NET Core on Visual Studio 2019. It was my first experience with Full Stack and I was given the opportunity to learn how to make Websites Front and Back end from scratch. The sites I created reached the College's entire study body and faculty.</p>
            </div>
            <div id="byuls-skills-header">
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
                <div className="skill" id="dotnet" style={{ backgroundColor: '#e50606' }}
                    onMouseOver={() => {
                        if (dotNetExp !== 0) {
                            addExpNotif(dotNetExp)
                            addExp(dotNetExp)
                            setDotNetExp(0)
                        }
                    }} onClick={() => {
                        if (dotNetExp !== 0) {
                            addExpNotif(dotNetExp)
                            addExp(dotNetExp)
                            setDotNetExp(0)
                        }
                        window.open("https://dotnet.microsoft.com/en-us/download", "_blank");
                    }}
                ></div>
                <div className="skill" id="sql"
                    onMouseOver={() => {
                        if (mysqlExp !== 0) {
                            addExpNotif(mysqlExp)
                            addExp(mysqlExp)
                            setMysqlExp(0)
                        }
                    }} onClick={() => {
                        if (mysqlExp !== 0) {
                            addExpNotif(mysqlExp)
                            addExp(mysqlExp)
                            setMysqlExp(0)
                        }
                        window.open("https://www.mysql.com/", "_blank");
                    }}></div>
            </div>
        </>
    )
}

export default BYULS;
