import React from 'react';
import '../public/Cards.css'; // Correct the path and filename

const Cards = ({ cardData, title, handleCardClick }) => {
  return (
    <div>
      <div className="top-actions">
        <h2>{title}</h2>
      </div>
      
      <div className="content">
        {cardData.map((card, index) => (
          <div key={index} className="card" onClick={() => handleCardClick(card.title)}>
            <img className="card-image" src={card.image} alt={card.title} />
            <div className="card-body">
              <div className="card-text">
                <div className="card-title">{card.title}</div>
                <div className="card-description">{card.body}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;