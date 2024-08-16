import React from 'react';
import Details from './Details'; 
import './ProjectCard.css';

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-image-container"> 
        <img 
          src="https://images.unsplash.com/photo-1518791841215-b4f178ed2d54" 
          alt="Project" 
          className="project-image"
        />
      </div>
      <div className="project-info">
        <h3>Modern Project Showcase</h3>
        <p>
          This project features a sleek and responsive design with an interactive details component, dark/light mode, and smooth animations for a truly professional look and feel.
        </p>
        <Details /> 
      </div>
    </div>
  );
}

export default ProjectCard;