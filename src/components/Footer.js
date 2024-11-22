import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/logo_inshorts.png" alt="Company Logo" />
          <p>Your Daily News Simplified</p>
        </div>

        {/* Contact & Address */}
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Email: support@inshorts.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 News Street, Media City, NY</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 Inshorts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
