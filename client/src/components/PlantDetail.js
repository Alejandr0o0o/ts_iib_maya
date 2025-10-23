import React, { useState, useEffect } from 'react';
// 1. Importa useParams para leer el ID de la URL
import { useParams } from 'react-router-dom';

function PlantDetail() {
  // 2. useParams nos da el ID de la planta desde la URL (ej. /planta/1 -> id es "1")
  const { id } = useParams();
  const [planta, setPlanta] = useState(null); // Usamos null porque al inicio no hay datos

  useEffect(() => {
    // 3. Hacemos una petición a una nueva ruta del servidor que crearemos a continuación
    fetch(`http://localhost:5000/api/plantas/${id}`)
      .then(response => response.json())
      .then(data => setPlanta(data))
      .catch(error => console.error('Error al obtener los detalles de la planta:', error));
  }, [id]); // El efecto se ejecuta de nuevo si el ID de la URL cambia

  // 4. Muestra un mensaje de "Cargando..." mientras se buscan los datos
  if (!planta) {
    return <div>Cargando...</div>;
  }

  // 5. Una vez que los datos llegan, muestra la información detallada
  return (
    <div>
      <h2>{planta.nombre_comun}</h2>
      <h3>({planta.nombre_maya})</h3>
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
    </div>
  );
}

export default PlantDetail;