import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./landing.css";

const roles = ["Software Engineer", "Designer", "Problem Solver", "Matcha Lover", "V1 Climber"];

const Landing = () => {
    const [typedText, setTypedText] = useState("");
    const [currentRole, setCurrentRole] = useState(0);
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

    return (
        <div className="container">
            <div className="landing">
                <img src="/weblogo.png" alt="standing on business" />
                <h1>{typedText}</h1>
                <h2>{roles[currentRole]}</h2>
                <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                    continue
                </button>
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
