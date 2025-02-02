import React from "react";
import "./aboutme.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="about-me-page">
            <div className="left-section">
                <div className="about-image-section">
                    <img
                        className="about-image"
                        src="weblogo.png"
                        alt="Ny Dang"
                    />
                    <div className="icon-links">
                        <a href="mailto:trucnyd@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/ny-dang/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                        <a href="https://github.com/vlonk" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                    </div>
                    <a href="https://www.linkedin.com/in/ny-dang/" target="_blank" rel="noopener noreferrer">
                        <button className="resume-button">resume</button>
                    </a>
                </div>
            </div>

            <div className="right-section">
                <div className="about-me-section">
                    <div className="about-content">
                        <h1>NY DANG</h1>
                        <p>
                            I am currently a senior studying Computer Science at the University of Houston. Driven with a passion in art and design, I enjoy integrating unique, creative touches into every project.
                            I'm always open to connect—please feel free to reach out if you'd like to chat or explore opportunities. 
                        </p>
                    </div>
                </div>

                <div className="experience-section">
                    <h2 className="experience-title">EXPERIENCE</h2>
                    <div className="experience-item">
                        <div className="experience-header">
                            <h4 className="company-name">Computer Vision Research Assistant</h4>
                            <span className="experience-dates">Oct 2024 - Present</span>
                        </div>
                        <p className="role-title">University of North Texas</p>
                        <ul className="experience-details">
                            <li>...</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <div className="experience-header">
                            <h4 className="company-name">AR Development Extern</h4>
                            <span className="experience-dates">Oct 2024 - Nov 2024</span>
                        </div>
                        <p className="role-title">Snap Inc.</p>
                        <ul className="experience-details">
                            <li>...</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <div className="experience-header">
                            <h4 className="company-name">AI Intern</h4>
                            <span className="experience-dates">May 2024 - Aug 2024</span>
                        </div>
                        <p className="role-title">Rockwell Automation</p>
                        <ul className="experience-details">
                            <li>...</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <div className="experience-header">
                            <h4 className="company-name">Cloud Intern</h4>
                            <span className="experience-dates">May 2024 - Aug 2024</span>
                        </div>
                        <p className="role-title">Rockwell Automation</p>
                        <ul className="experience-details">
                            <li>...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
