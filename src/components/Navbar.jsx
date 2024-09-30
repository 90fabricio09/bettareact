import React, { useState } from 'react';
import Logo from '../assets/png.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo"><a href="/"><img src={Logo} alt="Betta Logo" /></a></div>
          <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="#mais">Saiba mais</a></li>
            <li><a href="#infos">Informações</a></li>
          </ul>
          <a href="https://wa.me/5511937350748" className="action_btn">Contato</a>
          <div className="toggle_btn" onClick={toggleMenu}>
            <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
          </div>
        </div>
        <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#mais">Saiba mais</a></li>
          <li><a href="#infos">Informações</a></li>
          <li><a href="https://wa.me/5511937350748" className="action_btn">Contato</a></li>
        </div>
      </header>
    </>
  );
}

export default Navbar;
