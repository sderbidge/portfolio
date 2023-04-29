import HeroSectionWithButtons from '../components/HeroSectionWithButtons'
import './Home.css'
function Home() {
    return (
        <>
            <HeroSectionWithButtons />
            <div className="explanation-container">
                <div id="tutorial-exp"><div>Exp</div></div>
                <h1>Character Stats</h1>
                <p>On the bottom left the screen, you will see a level number next to the exp bar with the stats underneath it. Across the website is experience points that will be awarded when you hover over something interesting. So what are you waiting for? Go explore!</p>
            </div>
        </>
    );
}

export default Home;
