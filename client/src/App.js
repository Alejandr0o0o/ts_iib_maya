import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PlantCard from './components/PlantCard';
import PlantDetail from './components/PlantDetail';
import Header from './components/Header';
import Acerca from './components/Acerca';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  const [plantas, setPlantas] = useState([]);
  
  // 1. Cambiamos el estado. Ahora guardará solo las categorías
  const [categorias, setCategorias] = useState([]);
  const [filtroActual, setFiltroActual] = useState('0'); // '0' será "Todos"

  // 2. Este useEffect AHORA BUSCA de la nueva ruta /api/categorias
  useEffect(() => {
    fetch('http://localhost:5000/api/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(err => console.error("Error al obtener categorías:", err));
  }, []);

  // 3. Este useEffect AHORA FILTRA por el nombre de la categoría
  useEffect(() => {
    let url;
    if (filtroActual === '0') {
      url = 'http://localhost:5000/api/plantas';
    } else {
      // Usamos la nueva ruta y le pasamos el nombre (ej. "Cutáneos")
      url = `http://localhost:5000/api/plantas/categoria/${filtroActual}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setPlantas(data))
      .catch(error => console.error('Error al obtener las plantas:', error));
  }, [filtroActual]); // Se re-ejecuta cuando el filtro cambia

  function handleFiltroChange(event) {
    setFiltroActual(event.target.value);
  }

  return (
    <div className="App">
      <Header /> 
      
      <Routes>
        <Route path="/" element={
          <main className="catalog-container">
            <h1 className="catalog-title">Catálogo</h1>
            
            <div className="filtro-container">
              <label htmlFor="filtro-categoria">Filtrar por Categoría: </label>
              <select id="filtro-categoria" value={filtroActual} onChange={handleFiltroChange}>
                <option value="0">-- Todas las categorías --</option>
                
                {/* 4. Llenamos el dropdown con las categorías únicas */}
                {categorias.map((cat, index) => (
                  // El valor y el texto ahora son cat.categoria
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
        } />

        <Route path="/planta/:id" element={<PlantDetail />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;