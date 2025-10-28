import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importamos todos nuestros componentes/páginas
import Header from './components/Header';
import Inicio from './components/Inicio'; // <-- Página nueva
import Catalogo from './components/Catalogo'; // <-- Página nueva
import PlantDetail from './components/PlantDetail';
import Acerca from './components/Acerca';
import Contacto from './components/Contacto';

import './App.css'; // Sigue conteniendo estilos globales

function App() {
  // --- ¡MIRA! TODA LA LÓGICA DE ESTADO (useState) Y EFECTOS (useEffect) SE FUE ---
  // App.js ahora solo controla la navegación.

  return (
    <div className="App">
      <Header /> 
      
      <Routes>
        {/* Ruta de Inicio */}
        <Route path="/" element={<Inicio />} /> 
        
        {/* Ruta del Catálogo */}
        <Route path="/catalogo" element={<Catalogo />} /> 

        {/* Rutas que ya tenías */}
        <Route path="/planta/:id" element={<PlantDetail />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;