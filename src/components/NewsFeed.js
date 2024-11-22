import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import ArticlePopup from './ArticlePopup';
import '../styles/NewsFeed.css';

const NewsFeed = ({ category, language }) => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(8);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
          params: {
            apiKey: '2ebed34ef52f4995a061c27ad18dd1f7',
            category: category,
            country: language === 'english' ? 'us' : 'in',
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setArticles([]);
      }
    };

    fetchArticles();
  }, [category, language]);

  const handleLoadMore = () => {
    setVisibleArticles(visibleArticles + 8);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleClosePopup = () => {
    setSelectedArticle(null);
  };

  return (
    <div className={`news-feed ${isMobile ? '' : selectedArticle ? 'shift-left' : 'centered'}`}>
      <div className="cards-container">
        {articles.length === 0 ? (
          <p className="no-data-message">
            No articles available for the selected category and language.
          </p>
        ) : (
          articles.slice(0, visibleArticles).map((article, index) => (
            <Card key={index} article={article} onClick={() => handleArticleClick(article)} />
          ))
        )}
        {visibleArticles < articles.length && (
          <div className="load-more">
            <button onClick={handleLoadMore}>Load More</button>
          </div>
        )}
      </div>

      {!isMobile && selectedArticle && (
        <div className={`article-details ${selectedArticle ? '' : 'hidden'}`}>
          <ArticlePopup article={selectedArticle} onClose={handleClosePopup} />
        </div>
      )}

      {isMobile && selectedArticle && (
        <div className={`mobile-popup ${selectedArticle ? 'show' : ''}`}>
          <ArticlePopup article={selectedArticle} onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
