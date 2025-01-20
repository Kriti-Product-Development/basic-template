import React, { useState } from 'react';
import '../App.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="portfolio-title"> </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <nav className="nav">
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#about" onClick={toggleMenu}> </a></li>
          <li><a href="#projects" onClick={toggleMenu}> </a></li>
          <li><a href="#achievements" onClick={toggleMenu}> </a></li>
          <li><a href="#extracurriculars" onClick={toggleMenu}> </a></li>
          <li><a href="#contact" onClick={toggleMenu}> </a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
