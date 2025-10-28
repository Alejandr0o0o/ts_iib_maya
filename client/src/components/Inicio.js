import React from 'react';
import './Inicio.css'; // Crearemos este archivo ahora

function Inicio() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Bienvenido a Ts'íib Maya</h1>
        <p>Explora el conocimiento ancestral de la herbolaria Yucateca.</p>
        <div className="hero-search-bar">
          <input type="text" placeholder="Buscar planta por nombre..." />
          <button type="submit">Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default Inicio;