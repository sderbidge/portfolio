import ReactPlayer from "react-player"
import Hero from "./../components/Hero"
import './Violin.css'
import { useState } from "react";

function Violin({ addExp, addExpNotif }) {
    const [lyceumExp, setLyceumExp] = useState(11);
    const [lyceumFacebookExp, setLyceumFacebookExp] = useState(12)

    return (
        <>
            <Hero title="Violin Experience" subtitle={"June, 2007 - Present"} imageName={"lyceum-night.jpg"} />
            <div className="violin-content">
                <h1 className="header">My Violin Journey</h1>
                <div className="violin-card">
                    <p className="paragraph-section">
                        I started playing the violin when I was 8 years old in 2007 in Glendale California.
                        My first teacher Mrs. Rushforth taught my violin on scholarship because my parents didn't have
                        the money to pay for lessons at the time. Later after switching teachers to Mrs. Salisbury,
                        I got to see my first concert with the LA Symphony and Gil Shaham. He was what I aspired to be.
                        After moving to Utah in July, 2010 I joined an orchestra in Olympus, UT. That experience springboarded
                        me into wanting to join the <span onMouseDown={() => {
                            if (lyceumExp !== 0) {
                                addExpNotif(lyceumExp)
                                addExp(lyceumExp)
                                setLyceumExp(0)
                            }
                        }} onClick={() => {
                            if (lyceumExp !== 0) {
                                addExpNotif(lyceumExp)
                                addExp(lyceumExp)
                                setLyceumExp(0)
                            }
                            window.open("https://lyceumphilharmonic.com/", "_blank");
                        }} style={{ fontWeight: "bold" }}>Lyceum Philharmonic. </span>
                        My first experience seeing the Lyceum Philharmonic was night I saw the Piano Guys playing with them in the Red Butte gardens in
                        2012.
                    </p>
                    <div className="violin-youtube">
                        <iframe width="640" height="358" src="https://www.youtube.com/embed/G5VWf84r33U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="violin-card">
                    <div className="violin-facebook-1">
                        <ReactPlayer
                            url="https://www.facebook.com/watch/?v=246998639337022"
                            controls
                        />
                    </div>
                    <p className="paragraph-section">
                        I spent 3 years in the Lycem Philharmonic which included several concerts with well known
                        artists. But because of the vastness of my experience I have included to the left a short clip
                        of me playing wih the Phil in December of 2016 with <span onMouseOver={() => {
                            if (lyceumFacebookExp !== 0) {
                                addExpNotif(lyceumFacebookExp)
                                addExp(lyceumFacebookExp)
                                setLyceumFacebookExp(0)
                            }
                        }} onClick={() => {
                            if (lyceumFacebookExp !== 0) {
                                addExpNotif(lyceumFacebookExp)
                                addExp(lyceumFacebookExp)
                                setLyceumFacebookExp(0)
                            }
                        }} style={{ fontWeight: "bold" }}>Gentri at Abravenel hall.</span>
                    </p>
                </div>
                <object data="/assets/lyceumExperience.pdf" type="application/pdf" width="100%" height="1000px">
                </object>
            </div>
        </>
    );
}

export default Violin;
