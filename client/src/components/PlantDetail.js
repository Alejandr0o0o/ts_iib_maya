import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PlantDetail.css';

function PlantDetail() {
  const { id } = useParams();
  const [planta, setPlanta] = useState(null);
  
  // 1. CREA UN NUEVO ESTADO PARA LAS RECETAS
  const [recetas, setRecetas] = useState([]); // Iniciamos con un array vacío

  // Este useEffect ya lo tenías (busca los detalles de la planta)
  useEffect(() => {
    fetch(`http://localhost:5000/api/plantas/${id}`)
      .then(response => response.json())
      .then(data => setPlanta(data))
      .catch(error => console.error('Error al obtener los detalles de la planta:', error));
  }, [id]);

  // 2. AÑADE ESTE NUEVO useEffect PARA BUSCAR LAS RECETAS
  useEffect(() => {
    fetch(`http://localhost:5000/api/recetas/planta/${id}`)
      .then(response => response.json())
      .then(data => setRecetas(data))
      .catch(error => console.error('Error al obtener las recetas:', error));
  }, [id]); // También depende del 'id'

  // Muestra "Cargando..." mientras se buscan los datos de la planta
  if (!planta) {
    return <div>Cargando...</div>;
  }

  // Una vez que los datos llegan, muestra todo
  return (
    <div className="plant-detail-container">
      <h2>{planta.nombre_comun}</h2> {/* Añadimos algo de padding */}
      <p><strong>Nombre Científico:</strong> {planta.nombre_cientifico}</p>
      <img 
        src={`/images/${planta.imagen_URL}`} 
        alt={`Imagen de ${planta.nombre_comun}`} 
        style={{ maxWidth: '400px', borderRadius: '8px' }}
      />
      <h4>Descripción</h4>
      <p>{planta.descripcion}</p>
      <h4>Precauciones</h4>
      <p>{planta.precauciones}</p>

      {/* 3. AÑADE ESTA SECCIÓN PARA MOSTRAR LAS RECETAS */}
      <hr /> {/* Una línea para separar */}
      <h3>Recetas y Preparaciones</h3>
      
      {/* Si hay recetas (el array no está vacío), muéstralas */}
      {recetas.length > 0 ? (
        recetas.map(receta => (
          <div key={receta.id_receta} className="recipe-card">
            <h4>{receta.desc_usos}</h4>
            
            <h5>Ingredientes:</h5>
            <ul>
              {receta.ingredientes.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h5>Pasos:</h5>
            <p>{receta.pasos}</p>
          </div>
        ))
      ) : (
        // Si no hay recetas, muestra este mensaje
        <p>No hay recetas registradas para esta planta.</p>
      )}
    </div>
  );
}

export default PlantDetail;