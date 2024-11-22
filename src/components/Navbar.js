import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Navbar.css";

const Navbar = ({ onCategorySelect, toggleLanguage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div
          className="menu-button"
          onClick={handleMenuClick}
          style={{
            transform: isSidebarOpen ? "translateX(285px)" : "translateX(0)", 
          }}
        >
          <span className="menu-icon">
            {isSidebarOpen ? "✖" : "☰"}
          </span>
          <span>{isSidebarOpen ? "Close" : "Menu"}</span>
        </div>
        <img
          src="/logo_inshorts.png"
          alt="Inshorts Logo"
          className="navbar-logo"
        />
      </nav>
      <div>
        <Sidebar
          onCategorySelect={onCategorySelect}
          toggleLanguage={toggleLanguage}
          onClose={() => setIsSidebarOpen(false)}
          className={isSidebarOpen ? "open" : ""}
        />
      </div>
    </>
  );
};

export default Navbar;
