import React from 'react';
import '../styles/ArticlePopup.css';

const ArticlePopup = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt="article" />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default ArticlePopup;
