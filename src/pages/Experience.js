import Hero from "./../components/Hero"
import ExperienceHeroSection from '../components/ExperienceHeroSection';
import "./Experience.css"
function Experience({ level }) {
    return (
        <>
            <Hero title="Professional Experience" subtitle={"April 2020 - Present"} imageName={"byu.jpg"} height={"50vh"} />
            <h1 className="resume-header">Current Resume</h1>
            <object data="/assets/STEPHEN_DERBIDGE_RESUME.pdf" type="application/pdf" width="100%" height="1200px">
            </object>
            <ExperienceHeroSection
                title={"Church of Jesus Christ"}
                subtitle={"April 2022 - Present"}
                imageName={"saratogatemple.jpg"}
                levelLock={1}
                userLevel={level}
                backgroundPosition={"center 25%"}
                path={"/"}
            />
            <ExperienceHeroSection
                title={"Velaflame for Evermore"}
                subtitle={"September 2022 - April 2023"}
                imageName={"evermore.jpg"}
                levelLock={2}
                userLevel={level}
                backgroundPosition={""}
                path={"/"}
            />
            <ExperienceHeroSection
                title={"BYU Broadcasting"}
                subtitle={"February 2022 - December 2022"}
                imageName={"byubroadcasting.jpg"}
                levelLock={3}
                userLevel={level}
                backgroundPosition={"center"}
                path={"/"}
            />
            <ExperienceHeroSection
                title={"College of Life Sciences"}
                subtitle={"January 2021 - January 2022"}
                imageName={"lifesciences.jpg"}
                levelLock={4}
                userLevel={level}
                backgroundPosition={"center"}
                path={"/"}
            />
            <ExperienceHeroSection
                title={"Dr. Zappalas Research Lab"}
                subtitle={"April 2020 - January 2021"}
                imageName={"talmage.jpg"}
                levelLock={5}
                userLevel={level}
                backgroundPosition={"center top 35%"}
                path={"/"}
            />
        </>
    );
}

export default Experience;
