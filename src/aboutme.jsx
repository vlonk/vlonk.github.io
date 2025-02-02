import React from "react";
import "./aboutme.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="about-me-section">
            <div className="about-image-section">
                <img
                    className="about-image"
                    src="weblogo.png"
                    alt="Ny Dang"
                />
                <div className="icon-links">
                    <a href="mailto::trucnyd@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/ny-dang/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/vlonk" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                </div>
            </div>
            <div className="separator"></div>
            <div className="about-content">
                <h1>About Me</h1>
                <p>
                    yayahahahhaha placeholder for now! 
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
