import React, { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ onCategorySelect, toggleLanguage, onClose, className }) => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [language, setLanguage] = useState("english");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === "english" ? "hindi" : "english";
    setLanguage(newLanguage);
    toggleLanguage(newLanguage);
  };

  return (
    <div className={`sidebar ${className}`}>
      <div className="language-toggle-wrapper">
        <div className="language-toggle">
          <button
            onClick={handleLanguageToggle}
            className={language === "english" ? "active" : ""}
          >
            English
          </button>
          <button
            onClick={handleLanguageToggle}
            className={language === "hindi" ? "active" : ""}
          >
            हिन्दी
          </button>
        </div>
      </div>

      <hr />
      <div className="categories-title">Categories</div>
      {[
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
      ].map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
