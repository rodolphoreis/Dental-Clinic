import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";
function ContactForm() {
  const [state, handleSubmit] = useForm("xgegoowj");

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agende uma Consulta</h2>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Mensagem</label>
      <textarea id="message" name="message" />
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
