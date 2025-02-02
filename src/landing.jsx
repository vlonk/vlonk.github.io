import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./landing.css";

const roles = ["Software Engineer", "Designer", "Problem Solver", "Matcha Lover", "V1 Climber"];

const Landing = () => {
    const [typedText, setTypedText] = useState("");
    const [currentRole, setCurrentRole] = useState(0);
    const [showButton, setShowButton] = useState(true); // for toggling pages
    const [showNav, setShowNav] = useState(false); // fade animation
    const fullText = "hello, i'm Ny Dang.";

    // typewriter effect for the text
    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [typedText, fullText]);

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

    return (
        <div className="container">
            {showNav && (
                <nav className="nav">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT ME</li>
                        <li>PROJECTS</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            )}
            <div className="landing">
                <img src="/weblogo.png" alt="standing on business" />
                <h1>{typedText}</h1>
                <h2>{roles[currentRole]}</h2>
                {showButton && (
                    <button onClick={handleContinue} className={showNav ? "fade-out" : ""}>
                        continue.
                    </button>
                )}
            </div>
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