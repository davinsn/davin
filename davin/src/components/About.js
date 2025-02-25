import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        I am a full-time student from Malaysia studying Computer Science at RMIT University.
      </p>
      <p className="about-text">
        I am passionate about technology and I am always eager to learn new things.
        I have taken part in various group projects and exams that have helped me to develop my skills.
        </p>
        <h2 className="about-title">Here's some technology I have worked with:</h2>
        <ul className="about-list">
          <li className="about-list-item">JavaScript</li>
          <li className="about-list-item">React</li>
          <li className="about-list-item">Node.js</li>
          <li className="about-list-item">Python</li>
          <li className="about-list-item">HTML & CSS</li>
          <li className="about-list-item">Java</li>
          <li className="about-list-item">C++</li>
          <li className="about-list-item">GraphQL</li>
        </ul>
    </div>
  );
};

export default About;
