import React from 'react';
import './skills.css';

const skillsData = [
    { name: 'Python', level: 70 },
    { name: 'FastAPI', level: 40 },
    { name: 'PostgreSQL', level: 60 },
    { name: 'SQLAlchemy', level: 50 },
    { name: 'JavaScript', level: 20 },
    { name: 'Docker', level: 10 },
    { name: 'Linux', level: 30 },
    { name: 'GIT', level: 40 },
    { name: 'Redis + Celery', level: 5 },
    { name: 'English B2', level: 100},
];

const Skills: React.FC = () => {
    return (
        <div className="skills-container">
            <h2 className="skills-title">Skills</h2>
            {skillsData.map(skill => (
                <div className="skill-item" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                        <div
                            className="skill-fill"
                            style={{ width: `${skill.level}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;