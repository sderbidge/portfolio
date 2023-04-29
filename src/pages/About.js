import ExperienceHeroSection from '../components/ExperienceHeroSection';

function About({ level, addExp, addExpNotif }) {
    return (
        <>
            <ExperienceHeroSection
                title={"Sealed Forever"}
                subtitle={"May 7th, 2021"}
                imageName={"temple-splash.jpg"}
                backgroundPosition={"center top 27%"}
                path={"/sealed"}
            />
            <ExperienceHeroSection
                title={"Missionary Service"}
                subtitle={"Molokai, Hawaii"}
                imageName={"kalaupapa.jpg"}
                backgroundPosition={"center"}
                path={"/missionary"}
            />
            <ExperienceHeroSection
                title={"Violin Experience"}
                subtitle={"Lyceum Philharmonic"}
                imageName={"lyceum.jpg"}
                backgroundPosition={"center 25%"}
                path={"/violin"}
            />
            {/* <ExperienceHeroSection
                title={"Roblox Game Development"}
                subtitle={"2011 - Present"}
                imageName={"robloxlogo.jpg"}
                levelLock={1}
                userLevel={level}
                backgroundPosition={"center"}
                path={"/roblox"}
            /> */}
        </>
    );
}

export default About;
