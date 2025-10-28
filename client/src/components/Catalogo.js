import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
// Nota: El App.css todavía tiene los estilos del catálogo.
// Podríamos moverlos a su propio Catalogo.css, pero por ahora
// podemos dejarlos en App.css para simplificar.

function Catalogo() {
  // --- Toda la lógica se mudó aquí ---
  const [plantas, setPlantas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtroActual, setFiltroActual] = useState('0');

  useEffect(() => {
    fetch('http://localhost:5000/api/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(err => console.error("Error al obtener categorías:", err));
  }, []);

  useEffect(() => {
    let url;
    if (filtroActual === '0') {
      url = 'http://localhost:5000/api/plantas';
    } else {
      url = `http://localhost:5000/api/plantas/categoria/${filtroActual}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => setPlantas(data))
      .catch(error => console.error('Error al obtener las plantas:', error));
  }, [filtroActual]);

  function handleFiltroChange(event) {
    setFiltroActual(event.target.value);
  }
  // --- Fin de la lógica ---

  return (
    <main className="catalog-container">
      <h1 className="catalog-title">Catálogo</h1>

      <div className="filtro-container">
        <label htmlFor="filtro-categoria">Filtrar por Categoría: </label>
        <select id="filtro-categoria" value={filtroActual} onChange={handleFiltroChange}>
          <option value="0">-- Todas las categorías --</option>
          {categorias.map((cat, index) => (
            <option key={index} value={cat.categoria}>
              {cat.categoria}
            </option>
          ))}
        </select>
      </div>

      {plantas.map(planta => (
        <PlantCard key={planta.id_planta} planta={planta} />
      ))}
    </main>
  );
}

export default Catalogo;