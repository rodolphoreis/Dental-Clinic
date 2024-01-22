import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xgegoowj");
  /* if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  } */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
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
