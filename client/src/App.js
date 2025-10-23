import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PlantCard from './components/PlantCard';
import PlantDetail from './components/PlantDetail';
import Header from './components/Header';
import './App.css';

function App() {
  // 1. Creamos un lugar para guardar las plantas que vienen del servidor
  const [plantas, setPlantas] = useState([]);

  // 2. Este código se ejecuta solo una vez, cuando el componente se carga por primera vez
  useEffect(() => {
    // Hacemos la petición a nuestro servidor (la cocina)
    fetch('http://localhost:5000/api/plantas')
      .then(response => response.json()) // Convertimos la respuesta a formato JSON
      .then(data => setPlantas(data)) // Guardamos los datos recibidos en nuestro "lugar" (estado)
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez

  return (
    <div className="App">
       <Header/>
      {/* 2. Define tus rutas aquí */}
      <Routes>
        {/* Ruta para la página principal (el catálogo) */}
        <Route path="/" element={
          <main className="catalog-container">
            {plantas.map(planta => (
              <PlantCard key={planta.id_planta} planta={planta} />
            ))}
          </main>
        } />
        { <Route path="/planta/:id" element={<PlantDetail />} /> }
      </Routes>
    </div>
  );
}

export default App;