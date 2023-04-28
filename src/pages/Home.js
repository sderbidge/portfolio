import HeroSectionWithButtons from '../components/HeroSectionWithButtons'
import './Home.css'
function Home() {
    return (
        <>
            <HeroSectionWithButtons />
            <div className="explanation-container">
                <div id="tutorial-exp"><div>Exp</div></div>
                <h1>Character Stats</h1>
                <p>On the bottom left the screen, you will see a level number next to the exp bar with the stats underneath it. Across the website is experience points that will be awarded when you hover over something interesting. Certain parts of the site are Level-Locked and can only be unlocked by leveling up. So what are you waiting for? Go explore!</p>
            </div>
        </>
    );
}

export default Home;
