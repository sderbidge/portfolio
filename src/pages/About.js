import ExperienceHeroSection from '../components/ExperienceHeroSection';

function About({ level, addExp, addExpNotif }) {
    return (
        <>
            <ExperienceHeroSection
                title={"Sealed Forever"}
                subtitle={"May 7th, 2021"}
                imageName={"temple-splash.jpg"}
                levelLock={2}
                userLevel={level}
                backgroundPosition={"center"}
                path={"/"}
            />
            <ExperienceHeroSection
                title={"Missionary Service"}
                subtitle={"Molokai, Hawaii"}
                imageName={"kalaupapa.jpg"}
                levelLock={4}
                userLevel={level}
                backgroundPosition={"center"}
                path={"/"}
            />
            <ExperienceHeroSection
                title={"Violin Experience"}
                subtitle={"Lyceum Philharmonic"}
                imageName={"lyceum.jpg"}
                levelLock={6}
                userLevel={level}
                backgroundPosition={"center 25%"}
                path={"/violin"}
            />
            <ExperienceHeroSection
                title={"Roblox Game Development"}
                subtitle={"2011 - Present"}
                imageName={"robloxlogo.jpg"}
                levelLock={7}
                userLevel={level}
                backgroundPosition={"center"}
                path={"/"}
            />
        </>
    );
}

export default About;
