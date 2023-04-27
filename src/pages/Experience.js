import Hero from "./../components/Hero"
import ExperienceHeroSection from '../components/ExperienceHeroSection';
import "./Experience.css"
import { useState } from "react";
function Experience({ level, addExp, addExpNotif }) {
    const [showResume, setShowResume] = useState(false)
    const [resumeExp, setResumeExp] = useState(parseInt(localStorage.getItem("resume-exp")))

    return (
        <>
            <Hero title="Professional Experience" subtitle={"April 2020 - Present"} imageName={"byu.jpg"} />
            <h1 className="resume-header" onClick={() => {
                setShowResume((prev) => !prev)
                if (resumeExp !== 0) {
                    addExpNotif(resumeExp)
                    addExp(resumeExp)
                    setResumeExp(0)
                    localStorage.setItem("resume-exp", 0)
                }
            }}>Current Resume - {showResume ? "Press to Close" : "Press to Open"}</h1>
            {showResume && <object data="/assets/STEPHEN_DERBIDGE_RESUME.pdf" type="application/pdf" width="100%" height="1200px">
            </object>}
            <ExperienceHeroSection
                title={"Church of Jesus Christ"}
                subtitle={"April 2022 - Present"}
                imageName={"saratogatemple.jpg"}
                levelLock={1}
                userLevel={level}
                backgroundPosition={"center 25%"}
                path={"/church"}
            />
            <ExperienceHeroSection
                title={"Velaflame for Evermore"}
                subtitle={"September 2022 - April 2023"}
                imageName={"evermore.jpg"}
                levelLock={2}
                userLevel={level}
                backgroundPosition={"center"}
                path={"/velaflame"}
            />
            <ExperienceHeroSection
                title={"BYU Broadcasting"}
                subtitle={"February 2022 - December 2022"}
                imageName={"byubroadcasting.jpg"}
                levelLock={3}
                userLevel={level}
                backgroundPosition={"center"}
                path={"/broadcasting"}
            />
            <ExperienceHeroSection
                title={"College of Life Sciences"}
                subtitle={"January 2021 - January 2022"}
                imageName={"lifesciences.jpg"}
                levelLock={4}
                userLevel={level}
                backgroundPosition={"center"}
                path={"/byuls"}
            />
            <ExperienceHeroSection
                title={"Dr. Zappalas Research Lab"}
                subtitle={"April 2020 - January 2021"}
                imageName={"talmage.jpg"}
                levelLock={5}
                userLevel={level}
                backgroundPosition={"center top 35%"}
                path={"/zappala"}
            />
        </>
    );
}

export default Experience;
