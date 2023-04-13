import { useState } from 'react';

import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className={styles.headerBg}>
      <div className={styles.headerContainer}>
        <img src="/images/logo.svg" alt="Logo" />

        <nav
          className={`${styles.headerNav} ${
            isMenuOpen ? styles.headerNavOpen : ''
          }`}
        >
          <ul className={styles.headerMenu}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button
          className={`${styles.buttonBurger} ${
            isMenuOpen ? styles.buttonBurgerActive : ''
          }`}
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <h1>We are creatives</h1>
    </header>
  );
};

export default Header;
