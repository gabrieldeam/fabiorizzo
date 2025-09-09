"use client";

import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const typingSpeed = 100; // Tempo em ms por caractere
const deletingSpeed = 50; // Tempo em ms por caractere
const delayBetweenStrings = 2000; // Tempo em ms antes de começar a deletar

const strings = [
  "ADVOCACIA CONSULTIVA E PREVENTIVA",
  "ANTECIPE SOLUÇÕES E EVITE PROBLEMAS",
  "PLANEJE SUA APOSENTADORIA COM SEGURANÇA",
  "APOSENTADORIA TRANQUILA EXIGE PLANEJAMENTO",
  "PLANEJAMENTO PREVIDENCIÁRIO TORNA SONHOS REAIS"
];

function HeroSection() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingInterval, setTypingInterval] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % strings.length;
      const fullText = strings[current];

      setText(prev => isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1));

      setTypingInterval(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delayBetweenStrings);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingInterval);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Advogado Fábio Rizzo</p>
        <h1 className={styles.mainHeading}>
          {text}
          <span className={styles.cursor}>|</span>
        </h1>
        <p className={styles.description}>
          Previna-se hoje com soluções estratégicas e personalizadas, para evitar problemas amanhã
        </p>
        <a
          href="https://wa.me/5527981590562?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20planejamento%20previdenci%C3%A1rio."
          className={styles.whatsAppButton}
        >
          <img src="/WhatsApp.svg" alt="WhatsApp" className={styles.whatsAppIcon} />
          Falar no WhatsApp
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img src="/foto.png" alt="Fábio Rizzo" className={styles.image} />
      </div>
    </section>
  );
}

export default HeroSection;
