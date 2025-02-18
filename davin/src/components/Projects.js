import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="project-card">
                <h2 className="project-title">Website</h2>
                <p className="project-description">I have developed multiple websites as projects in university.</p>
            </div>
            <div className="project-card">
                <h2 className="project-title">Minecraft Maze Generation</h2>
                <p className="project-description">I created a Minecraft mod that generates mazes within the game. The mod uses a depth-first search algorithm to create complex and challenging mazes.</p>
            </div>
        </div>
    );
};

export default Projects;