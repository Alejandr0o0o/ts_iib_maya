import React from 'react';
// Importaremos los estilos que crearemos en el siguiente paso
import './Acerca.css'; 

function Acerca() {
  return (
    <div className="acerca-container">
      <h1>Sobre el Proyecto "Ts'íib Maya"</h1>
      
      <section>
        <h2>Introducción</h2>
        <p>
          La medicina herbolaria constituye una de las expresiones más ricas del patrimonio
          cultural y natural de la península de Yucatán. A lo largo de los siglos, comunidades
          mayas y rurales han transmitido de forma oral un vasto conocimiento sobre el uso
          de plantas para la prevención y tratamiento de enfermedades.
        </p>
        <p>
          No obstante, este conocimiento ancestral se encuentra actualmente en riesgo de
          desaparecer debido a diversos factores. Entre ellos destacan la migración de los
          jóvenes hacia contextos urbanos, la preferencia cada vez mayor por la medicina
          convencional, y la falta de documentación formal y accesible que garantice su
          transmisión a las nuevas generaciones. 
        </p>
        <p>
          Ante este panorama, resulta imprescindible aprovechar las herramientas
          tecnológicas actuales para asegurar la preservación de estos saberes. La creación
          de un sitio web especializado permitirá recopilar, organizar y difundir de manera
          confiable la información sobre plantas medicinales de Yucatán.
        </p>
      </section>

      <section>
        <h2>Justificación</h2>
        <p>
          La creación de un sitio web que esté dedicado a la medicina herbolaria
          yucateca es importante ya que esto contribuye a la preservación de un
          conocimiento adquirido desde nuestros ancestros que está en riesgo de
          desaparecer por diversas causas. Al integrar la información en una plataforma
          digital, se asegura el acceso a investigadores, estudiantes, profesionales de
          la salud y a la población en general.
        </p>
      </section>

      <section>
        <h2>El Equipo</h2>
        <p>
          Este proyecto es desarrollado por estudiantes de Ingeniería en Sistemas Computacionales del Instituto Tecnológico Superior de Valladolid, como parte del Taller de Investigación II.
        </p>
        <ul>
          <li>Alejandro Aguirre Hau</li>
          <li>Regina Guadalupe Cauich Cahun</li>
          <li>Johani Lizeth Kauil Chable</li>
          <li>Alondra Sofia Peralta Canche</li>
        </ul>
      </section>
    </div>
  );
}

export default Acerca;