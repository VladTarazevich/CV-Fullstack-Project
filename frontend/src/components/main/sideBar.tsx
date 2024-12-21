import React from 'react';
import Contacts from './contacts';
import Skills from './skills';
import Education from './education';
import Interests from './interests';
import './main.css';

const SideBar: React.FC = () => {
    return (
        <div className="experience-courses-container">
            <Contacts />
            <Skills />
            <Education />
            <Interests />
        </div>
    );
};

export default SideBar;