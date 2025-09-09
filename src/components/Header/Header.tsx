"use client";
import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navlogolink}>
        {/* Logo como link para a Home */}
        <a href="/">
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
        </a>
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="/#quem-sou-eu">Quem sou eu?</a></li>
            <li className={styles.navItem}><a href="/blog">Blog</a></li>
            <li className={styles.navItem}><a href="/#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
      
      <div className={styles.buttonsDesktop}>
        <a href="/calculadora" className={styles.contactButton}>Calculadora</a>
        <a href="https://wa.me/5527981590562?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20planejamento%20previdenci%C3%A1rio." className={styles.whatsAppButton}>
          <img src="/WhatsApp.svg" alt="WhatsApp" className={styles.whatsAppIcon} />
          Falar no WhatsApp
        </a>
      </div>

      {/* Ícone do Menu Hamburguer */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <img src="/menu.svg" alt="Menu" className={styles.menuIcon} />
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav>
            <ul className={styles.mobileNavList}>
              <li className={styles.mobileNavItem}><a href="/#quem-sou-eu" onClick={closeMenu}>Quem sou eu?</a></li>
              <li className={styles.mobileNavItem}><a href="/blog" onClick={closeMenu}>Blog</a></li>
              <li className={styles.mobileNavItem}><a href="/#contato" onClick={closeMenu}>Contato</a></li>
            </ul>
          </nav>
          <div className={styles.mobileButtons}>
            <a href="/calculadora" className={styles.contactButton} onClick={closeMenu}>Calculadora</a>
            <a href="https://wa.me/5527981590562?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20planejamento%20previdenci%C3%A1rio." className={styles.whatsAppButton} onClick={closeMenu}>
              <img src="/WhatsApp.svg" alt="WhatsApp" className={styles.whatsAppIcon} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
