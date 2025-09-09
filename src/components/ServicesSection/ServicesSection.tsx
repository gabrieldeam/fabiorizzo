import React from 'react';
import styles from './ServicesSection.module.css';

function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>
        <img src='/relogio.svg' alt="Ícone de relógio" className={styles.icon} />
        Planejamento Previdenciário
      </h2>
      <div className={styles.gridContainer}>
        <div className={styles.serviceBox}>
          <h3 className={styles.serviceTitle}>Tenho idade para me aposentar?</h3>
          <p className={styles.serviceDescription}>Entenda se chegou a hora de alcançar sua tranquilidade financeira.</p>
        </div>
        <div className={styles.serviceBox}>
          <h3 className={styles.serviceTitle}>Sou professor, posso me aposentar mais cedo?</h3>
          <p className={styles.serviceDescription}>Conheça os direitos exclusivos que podem antecipar sua aposentadoria.</p>
        </div>
        <div className={styles.serviceBox}>
          <h3 className={styles.serviceTitle}>Já cumpro os requisitos para me aposentar?</h3>
          <p className={styles.serviceDescription}>Descubra se você já está apto a se aposentar e como iniciar o processo.</p>
        </div>
        <div className={styles.serviceBox}>
          <h3 className={styles.serviceTitle}>Como maximizar o valor da minha aposentadoria?</h3>
          <p className={styles.serviceDescription}>Aprenda as melhores estratégias para um benefício mais vantajoso.</p>
        </div>
        <div className={styles.serviceBox}>
          <h3 className={styles.serviceTitle}>Meu CNIS está atualizado e correto?</h3>
          <p className={styles.serviceDescription}>Evite surpresas e garanta que seu histórico de contribuições está completo.</p>
        </div>
        <div className={styles.serviceBox}>
          <h3 className={styles.serviceTitle}>Quais benefícios posso solicitar além da aposentadoria?</h3>
          <p className={styles.serviceDescription}>Explore outros direitos previdenciários que podem somar à sua segurança.</p>
        </div>
      </div>
      <div className={styles.buttonsDesktop}>
        <a href="/calculadora" className={styles.contactButton}>Calculadora de Tempo de Contribuição</a>
        <a href="https://wa.me/5527981590562?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20planejamento%20previdenci%C3%A1rio." className={styles.whatsAppButton}>
          <img src="/WhatsApp.svg" alt="WhatsApp" className={styles.whatsAppIcon} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ServicesSection;
