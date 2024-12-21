import React from 'react';
import About from './about';
import Experience from './experience';
import Courses from './courses';
import './main.css';

const MainContent: React.FC = () => {
    return (
        <div className="experience-courses-container">
            <About />
            <Experience />
            <Courses />
        </div>
    );
};

export default MainContent;