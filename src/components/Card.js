import React from 'react';
import '../styles/Card.css';

const Card = ({ article, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(article)}>
      <div className="card-content">
        <img src={article.urlToImage} alt="news" className="card-image" />
        <div className="card-text">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
