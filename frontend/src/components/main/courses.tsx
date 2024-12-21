import React from 'react';
import './courses.css';

const Courses: React.FC = () => {
    return (
        <div className="courses-container">
            <h2 className="courses-title">Courses</h2>
            <div className="course-item">
                <h3 className="course-name">Junior Frontend Developer 2018</h3>
                <p className="course-provider">htmlacademy.ru</p>
            </div>
            <div className="course-item">
                <h3 className="course-name">FastAPI Backend Developer 2024</h3>
                <p className="course-provider">artemshumeiko.ru</p>
            </div>
        </div>
    );
};

export default Courses;