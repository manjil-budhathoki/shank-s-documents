import React, { useState, useEffect } from 'react';
import './Details.css';

function Details() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`details-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <button className="details-header" onClick={toggleDetails}>
        <h3 className="details-title">Project Insights</h3>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      <div className={`details-content ${isOpen ? 'open' : ''}`}>
        <div className="content-section">
          <h4 className="section-title">Project Description</h4>
          <p>
            This interactive project showcase is meticulously crafted with a focus on modern design principles and user experience. 
            It seamlessly blends aesthetic appeal with functionality, providing an engaging way to present project information.
          </p>
        </div>

        <div className="content-section">
          <h4 className="section-title">Key Features & Benefits</h4>
          <ul>
            <li>Fluid Expand/Collapse Animations: Enhancing user engagement with smooth transitions.</li>
            <li>Intuitive Header Interaction: Clear visual cues guide users through content exploration.</li>
            <li>Tailored Styling Options: Easily adapt the component's appearance to your brand or preference.</li>
            <li>Seamless Responsiveness:  Maintains optimal viewing experience across various devices.</li>
            <li>Personalized Dark/Light Modes:  Prioritizing user comfort and accessibility.</li>
          </ul>
        </div>

        <div className="content-section">
          <h4 className="section-title">Technical Implementation</h4>
          <p>
            Leveraging React.js and CSS, this component combines a modular structure with elegant animations for seamless integration into your projects. 
          </p>
        </div>

        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Details;