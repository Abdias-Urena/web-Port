"use client"
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div className="d-flex align-items-center justify-content-center" id="contracts">
    <form onSubmit={handleSubmit}>
        <p>Tienes alguna consulta
            llena el formulario</p>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          style={{ width: "300px" }}
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="email"
          className="form-control"
          style={{ width: "300px" }}
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: "300px" }}>
        Enviar
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
