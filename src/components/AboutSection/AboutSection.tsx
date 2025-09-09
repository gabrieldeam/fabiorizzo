import React from 'react';
import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <section id="quem-sou-eu" className={styles.aboutSection}>
      <div className={styles.contentContainer}>
        <img src="/fabio.png" alt="Fábio José Rizzo Soares" className={styles.image} />
        <div className={styles.textContainer}>
          <h2>Quem sou eu?</h2>
          <h3>Fábio José Rizzo Soares</h3>
          <p>OAB-RJ 202.327</p>
          <p>Formado em Direito pela Faculdade de Direito de Cachoeiro de Itapemirim (FDCI)</p>
          <p>Cursou a Escola da Magistratura do Espírito Santo (EMES)</p>
          <p>Pós-graduação em Direito Público pela Faculdade de Direito de Cachoeiro de Itapemirim (FDCI)</p>
          <p>Pós-graduação em Direito Imobiliário pela Universidade Cândido Mendes (UCAM)</p>
          <p>Pós-graduação em Direito Previdenciário (LEGALE)</p>
          <p>Cursos de especialização em Proteção de Dados, Startups e Propriedade Intelectual</p>
          <p>Consultor de marcas</p>
          <p>Advogado com mais de 22 anos de experiência</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
