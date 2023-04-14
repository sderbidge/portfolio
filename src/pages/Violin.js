import ReactPlayer from "react-player"
import Hero from "./../components/Hero"
import './Violin.css'

function Violin({ addExp }) {

    return (
        <>
            <Hero title="Violin Experience" subtitle={"2014 - 2017"} imageName={"lyceum-night.jpg"} height={"50vh"} />
            <div className="violin-content">
                <div className="violin-about">
                    <p>
                        I started playing the violin when I was 8 years old in 2007 in Pasadena California.
                        My first teacher Mrs. Rushforth taught my violin on scholarship because my parents didn't have
                        the money to pay for lessons at the time. Later after switching teachers to Mrs. Salisbury,
                        I got to see my first concert with the LA Symphony and Gil Shaham. He was what I aspired to be.
                        After moving to Utah in July, 2010 I joined an orchestra in Olympus, UT. That experience springboarded
                        me into wanting to join the <span onClick={() => addExp(10)} style={{ fontWeight: "bold" }}>Lyceum Philharmonic</span>
                    </p>
                </div>
                <div className="violin-youtube">
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/El-oa7C8gwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="violin-youtube">
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/PmNpeSvHih8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="violin-facebook-1">
                    <ReactPlayer
                        url="https://www.facebook.com/watch/?v=246998639337022"
                        controls
                    />
                </div>
            </div>
        </>
    );
}

export default Violin;
