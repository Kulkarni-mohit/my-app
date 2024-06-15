import React from 'react';
import './Header.css';

const Header = () => {
  return (
      <header className="header">
          <div className="header__logo">Mohit Kulkarni</div>
          <nav className="header__nav">
              <a href="#home" className="header__nav-link">Home</a>
              <a href="#about" className="header__nav-link">About</a>
              <a href="#skills" className="header__nav-link">Skills</a>
              <a href="#portfolio" className="header__nav-link">Projects</a>
              <a href="#contact" className="header__nav-link">Contact Me</a>
          </nav>
      </header>
  );
}

export default Header;