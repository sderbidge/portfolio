import Hero from "./../components/Hero"
import ExperienceHeroSection from '../components/ExperienceHeroSection';
function Experience() {
    return (
        <>
            <Hero title="Professional Experience" subtitle={"April 2020 - Present"} imageName={"byu.jpg"} />
            <object data="/assets/STEPHEN_DERBIDGE_RESUME.pdf" type="application/pdf" width="100%" height="1200px">
            </object>
            <ExperienceHeroSection
                title={"Church of Jesus Christ"}
                subtitle={"April 2022 - Present"}
                imageName={"saratogatemple.jpg"}
                backgroundPosition={"center 25%"}
                path={"/church"}
            />
            <ExperienceHeroSection
                title={"Velaflame for Evermore"}
                subtitle={"September 2022 - April 2023"}
                imageName={"evermore.jpg"}
                backgroundPosition={"center"}
                path={"/velaflame"}
            />
            <ExperienceHeroSection
                title={"BYU Broadcasting"}
                subtitle={"February 2022 - December 2022"}
                imageName={"byubroadcasting.jpg"}
                backgroundPosition={"center"}
                path={"/broadcasting"}
            />
            <ExperienceHeroSection
                title={"College of Life Sciences"}
                subtitle={"January 2021 - January 2022"}
                imageName={"lifesciences.jpg"}
                backgroundPosition={"center"}
                path={"/byuls"}
            />
            <ExperienceHeroSection
                title={"Dr. Zappalas Research Lab"}
                subtitle={"April 2020 - January 2021"}
                imageName={"talmage.jpg"}
                backgroundPosition={"center top 35%"}
                path={"/zappala"}
            />
        </>
    );
}

export default Experience;
