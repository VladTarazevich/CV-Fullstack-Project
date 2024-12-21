import React from 'react';
import './experience.css';

const Experience: React.FC = () => {
    return (
        <div className="experience-container">
            <h2 className="experience-title">Work Experience</h2>
            <div className="experience-item">
                <h3 className="experience-role">Backend Developer</h3>
                <h4 className="experience-company">On Myself.</h4>
                <p className="experience-dates">03/2023 - Present</p>
                <p className="experience-description">
                Development of the backend for hotel room bookings like Aviasales: server connection, functionality for working with the PostgreSQL database using SQLAlchemy with migrations from Alembic, Frontend part.
                </p>
                <p className="experience-description">
                I don't give you a link now, after reinstalling Linux I didn't have time to download the project and deploy it on the server.
                </p>
            </div>
            <div className="experience-item">
                <h3 className="experience-role">Backend Developer</h3>
                <h4 className="experience-company">University homework.</h4>
                <p className="experience-dates">12/2024 - present</p>
                <p className="experience-description">
                Fullstack resume project with Frontend on JavaScript React+Vite and Backend on Python FastAPI-SQLAlchemy, with PostgreSQL database, alembic migrations, pydantic and others small technology.
                </p>
                <p className="experience-description">
                github.com/VladTarazevich/CV-Fullstack-Project
                </p>
            </div>
        </div>
    );
};

export default Experience;