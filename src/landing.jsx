import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./landing.css";
import AboutMe from "./aboutme";

const roles = ["Software Engineer", "Designer", "Problem Solver", "Matcha Lover", "V1 Climber"];

const Landing = () => {
    const [typedText, setTypedText] = useState("");
    const [subText, setSubText] = useState("");
    const [currentRole, setCurrentRole] = useState(0);
    const [showButton, setShowButton] = useState(true); // for toggling pages
    const [showNav, setShowNav] = useState(false); // fade animation
    const [showAboutMe, setShowAboutMe] = useState(false);
    const fullText = "hello, i'm Ny Dang.";
    const additionalText =
        "thanks for clicking on my page! this is still under construction at the moment. hopefully you can read my handwriting :)";
    
    const handleAboutMe = () => {
        setShowAboutMe(true);
        setShowNav(true);
    };
    
    // typewriter effect for hello text
    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [typedText, fullText]);

    // typewriter effect for intro text
    useEffect(() => {
        if (showNav && subText.length < additionalText.length) {
            const timeout = setTimeout(() => {
                setSubText(additionalText.slice(0, subText.length + 1));
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [subText, additionalText, showNav]);

    // role rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // button click
    const handleContinue = () => {
        setShowButton(false);
        setShowNav(true);
    };

    const handleHome = () => {
        setShowButton(true);
        setShowNav(false);
        setTypedText("");
        setSubText("");
        setShowAboutMe(false);
    };

    return (
        <div className="container">
            {showNav && (
                <nav className="nav">
                    <ul>
                        <li onClick = {handleHome} style = {{cursor: "pointer"}}>HOME</li>
                        <li onClick={handleAboutMe} style={{ cursor: "pointer" }}>ABOUT ME</li>
                        <li>PROJECTS</li>
                        {/* <li>CONTACT</li> */}
                    </ul>
                </nav>
            )}
            {showAboutMe && <AboutMe />}
            {!showAboutMe && (
                <div className="landing">
                    <img src="/weblogo.png" alt="standing on business" />
                    <h1>{typedText}</h1>
                    <h2>{roles[currentRole]}</h2>
                    {showButton && (
                        <button onClick={handleContinue} className={showNav ? "fade-out" : ""}>
                            continue.
                        </button>
                    )}
                    <p className={`additional-text ${showNav ? "visible" : ""}`}>{subText}</p>
                </div>
            )}
        </div>
    );
};

// Render the Landing component into the root div in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Landing />
    </React.StrictMode>
);