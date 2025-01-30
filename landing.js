import React, {useState, useEffect } from "react";
import "./landing.css";

const roles = ["Software Engineer", "Problem Solver", "Designer", "Matcha Lover"];

const Landing = () => 
{
    const [typedText, setTypedText] = useState("");
    const [currentRole, setCurrentRole] = useState(0);
    const fullText = "hello, i'm Ny Dang";

    // typewriter effect
    useEffect(() => 
    {
        if (typedText.length < fullText.length)
        {
            const timeout = setTimeout(() => 
            {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [typedText, fullText]);

    // role rotation
    useEffect(() =>
    {
        const interval = setInterval(() => 
        {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return
    (
        <div className = "container">
            <div className = "landing">
            <img src={`${process.env.PUBLIC_URL}/weblogo.png`} alt="standing on business" />
                <h1>{typedText}</h1>
                <h2>{roles[currentRole]}</h2>
                <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                    continue
                </button>
            </div>
        </div>
    );
};

export default Landing;