import React from 'react';
// Importamos los estilos que crearemos
import './Contacto.css'; 

function Contacto() {
  return (
    <div className="contacto-container">
      <h1>Contáctanos</h1>
      <p>
        ¿Tienes dudas, comentarios o te gustaría aportar información al proyecto?
        <br />
        Por favor, llena el siguiente formulario.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">Tu Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Tu Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="asunto">Asunto:</label>
          <input type="text" id="asunto" name="asunto" />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="6" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Contacto;