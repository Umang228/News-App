import React from "react";
import "../styles/Banner.css";  

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-text">
          <p>For the best experience use Inshorts app on your smartphone</p>
        </div>
        <div className="banner-images">
          <img src="/appstore.png" alt="image1" className="banner-image" />
          <img src="/playstore.png" alt="image2" className="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
