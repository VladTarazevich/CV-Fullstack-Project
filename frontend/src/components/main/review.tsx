import React, { useState } from 'react';
import './review.css'; // Импортируем файл стилей

const AddReview = () => {
    const [userName, setUserName] = useState('');
    const [review, setReviewText] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
    
        try {
            const response = await fetch(`http://127.0.0.1:8000/review?userName=${encodeURIComponent(userName)}&review=${encodeURIComponent(review)}`, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                },
                body: null, // Установите тело в null, если не нужно
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Ошибка при добавлении отзыва');
            }
    
            setSuccess(true);
            setUserName('');
            setReviewText('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container">
            <h2 className="header">Добавить отзыв</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Имя:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Текст отзыва:</label>
                    <textarea
                        value={review}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Добавить отзыв</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Отзыв успешно добавлен!</p>}
        </div>
    );
};

export default AddReview;