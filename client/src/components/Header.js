import React from 'react';
// Importamos Link para que los botones sean enlaces de navegación
import { Link } from 'react-router-dom';
// Importaremos los estilos que crearemos en el siguiente paso
import './Header.css'; 

function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        {/* Este es el logo/título principal. Apunta a la página de inicio */}
        <Link to="/">Ts'íib Maya</Link>
      </div>
      <nav className="main-nav">
        <ul>
          {/* Estos son los enlaces de navegación de tu diseño */}
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/">Catálogo</Link></li>
          {/* Dejamos listos los enlaces para futuras páginas */}
          {<li><Link to="/acerca">Acerca del Proyecto</Link></li>}
          {<li><Link to="/contacto">Contactos</Link></li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;