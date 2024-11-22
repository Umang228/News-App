import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import ArticlePopup from './components/ArticlePopup';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [category, setCategory] = useState('general');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [language, setLanguage] = useState('english');

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setSelectedArticle(null); // Close popup on category change
  };

  const toggleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="app">
      <Navbar onCategorySelect={handleCategorySelect} toggleLanguage={toggleLanguage} />
      <Banner />
      <div className="main-content">
        <NewsFeed category={category} language={language} onArticleClick={setSelectedArticle} />
      </div>
      <ArticlePopup article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      <Footer />
    </div>
    
  );
};

export default App;
