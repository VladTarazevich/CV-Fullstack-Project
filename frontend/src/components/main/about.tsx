import React from 'react';
import './about.css';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <img 
                src="../../../public/assets/images/mySelfPhoto.jpg" 
                alt="My Photo" 
                className="about-photo" 
            />
            <div className='text-about'>
                <h1 className="about-name">Vladislav Tarazevich</h1>
                <h2 className="about-profession">Junior Backend Developer</h2>
                <p className="about-description">
                Young and driven intern with one year of experience in backend development of his own projects, who has tried all popular programming areas and found his favorite Backend development. Interested in everything.
                </p>
            </div>
        </div>
    );
};

export default About;