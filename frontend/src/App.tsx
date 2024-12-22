import React from 'react';
import MainContent from './components/main/mainContent';
import SideBar from './components/main/sideBar';
import AddReview from './components/main/review';
import './components/main/main.css';

const App = () => {
    return (
        <div className="page-container">
            <div className="main-container">
                <div>
                    <MainContent />
                </div>
                <div>
                    <SideBar />
                </div>
            </div>
            <div className="footer-container">
                <AddReview />
            </div>
        </div>
    );
};

export default App;