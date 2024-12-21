import React from 'react';
import './interests.css';

const Interests: React.FC = () => {
    return (
        <div className="interests-container">
            <h2 className="interests-title">Interests</h2>
            <ul className="interests-list">
                <li>Video Games</li>
                <li>Science</li>
                <li>Sports</li>
                <li>Books</li>
            </ul>
        </div>
    );
};

export default Interests;