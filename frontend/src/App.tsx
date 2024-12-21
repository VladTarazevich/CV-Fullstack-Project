import React from 'react';
import MainContent from './components/main/mainContent';
import SideBar from './components/main/sideBar';
import './components/main/main.css';

const App = () => {
    return (
        <div className="main-container">
            <div>
                <MainContent />
            </div>
            <div>
                <SideBar />
            </div>
        </div>
    );
};

export default App;