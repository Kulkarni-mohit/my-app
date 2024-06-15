import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Mohit Kulkarni</h2>
                <p>Computer Engineer</p>
            </div>
            <div className="footer-bottom">
                <p>&copy; Mohit Kulkarni. All rights reserved.</p>
            </div>
            <a href="#" className="scroll-up">
                <i className="fas fa-arrow-up"></i>
            </a>
        </footer>
    );
};

export default Footer;
