import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>2024 – Todos os direitos reservados | fabiorizzo.com.br | Feito por SEU DEV AQUI</p>
      <div className={styles.socialLinks}>
        <a href="https://instagram.com/fabiorizzoadv" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" className={styles.socialIcon} />
        </a>
        <a href="https://www.facebook.com/fabio.rizzo.562" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="WhatsApp" className={styles.socialIcon} />
        </a>
        <a href="https://www.linkedin.com/in/fabiojrizzo/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.webp" alt="LinkedIn" className={styles.socialIcon} />
        </a>
        <a href="https://wa.me/5527981590562?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20planejamento%20previdenci%C3%A1rio." target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.svg" alt="WhatsApp" className={styles.socialIcon} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
