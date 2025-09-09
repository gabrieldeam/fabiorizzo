'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactSection.module.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_8h2apr8', // Service ID
        'template_on40gfj', // Template ID
        formData,
        'WYj0jq-vmQUaxJp_a' // Public Key
      )
      .then(
        () => {
          alert('Mensagem enviada com sucesso!');
          setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
        },
        () => {
          alert('Erro ao enviar a mensagem. Tente novamente.');
        }
      );
  };

  return (
    <section id="contato" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Fale com o Fábio Rizzo</h2>
      <p className={styles.description}>
      Contar com um advogado experiente em planejamento previdenciário é essencial para assegurar seus direitos e prevenir problemas futuros. Obtenha uma análise personalizada para o seu caso.
      </p>
      <div className={styles.contactContainer}>
        <a href="https://wa.me/5527981590562?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20planejamento%20previdenci%C3%A1rio." className={styles.whatsAppButton}>
          <img src="/WhatsApp.svg" alt="WhatsApp" className={styles.whatsAppIcon} />
          Falar no WhatsApp
        </a>
        <span className={styles.phoneNumber}>(27) 98159-0562</span>
      </div>
      <p className={styles.sendMessage}>Envie sua mensagem</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className={styles.inputField}
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className={styles.inputField}
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          className={styles.inputField}
          value={formData.telefone}
          onChange={handleChange}
        />
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          className={styles.textareaField}
          value={formData.mensagem}
          onChange={handleChange}
        />
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </section>
  );
}

export default ContactSection;
