import React from 'react';
import './education.css';

const Education: React.FC = () => {
    return (
        <div className="education-container">
            <h2 className="education-title">Education</h2>
            <h3 className="education-degree">Web programming</h3>
            <h4 className="education-university">Belarussian State University</h4>
            <p className="education-dates">2023 - 2026</p>
        </div>
    );
};

export default Education;