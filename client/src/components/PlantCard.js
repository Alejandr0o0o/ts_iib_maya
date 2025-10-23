import React from 'react';
import { Link } from 'react-router-dom';
import './PlantCard.css'; // Crearemos este archivo de estilos a continuación

// Este componente recibe la información de una planta como "props"
function PlantCard({ planta }) {
  return (
    // 2. Envuelve todo en un Link que navegue a la URL correcta
    <Link to={`/planta/${planta.id_planta}`} className="plant-card-link">
      <div className="plant-card">
        <img 
          src={`/images/${planta.imagen_URL}`} 
          alt={`Imagen de ${planta.nombre_comun}`} 
        />
        <h3>{planta.nombre_comun}</h3>
        <p>{planta.nombre_maya}</p>
      </div>
    </Link>
  );
}

export default PlantCard;