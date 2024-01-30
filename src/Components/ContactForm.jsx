import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgegoowj");
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e && e.preventDefault();
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xgegoowj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          email: "",
          message: "",
        });
      } else {
        console.error("Erro ao enviar formulário:", response.statusText);
      }
    } catch (error) {
      console.error("Erro durante a submissão do formulário:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Agende uma Consulta</h2>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      {state.submitting ? (
        <button disabled>Carregando...</button>
      ) : (
        <button type="submit">Enviar</button>
      )}
    </form>
  );
}

export default ContactForm;
