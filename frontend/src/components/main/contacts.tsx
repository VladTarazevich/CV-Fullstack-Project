import React from 'react';
import './contacts.css';

const Contacts: React.FC = () => {
    return (
        <div className="contacts-container">
            <div className="contact-item">
                <img src="../../../public/assets/images/mail.svg" className="contact-icon" />
                <span>tarazevich.vlad@mail.ru</span>
            </div>
            <div className="contact-item">
                <img src="../../../public/assets/images/phone.svg" className="contact-icon" />
                <span>123 444 555</span>
            </div>
            <div className="contact-item">
                <img src="../../../public/assets/images/location.svg" className="contact-icon" />
                <span>Minsk, BSU</span>
            </div>
            <div className="contact-item">
                <img src="../../../public/assets/images/github.svg" className="contact-icon" />
                <span>github.com/VladTarazevich</span>
            </div>
            <div className="contact-item">
                <img src="../../../public/assets/images/telegram.svg" className="contact-icon" />
                <span>VladNemoCr</span>
            </div>
        </div>
    );
};

export default Contacts;