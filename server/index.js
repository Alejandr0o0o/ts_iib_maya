// Bloque 1: Importar las herramientas
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Bloque 2: Configurar la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Por defecto WAMP/XAMPP no tiene contraseña
  database: 'ts_iib_maya_db'
});

// Intentar conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado exitosamente a la base de datos MySQL! ✨');
});

// Bloque 2: Crear el servidor y definir el puerto
const app = express();
const PORT = 5000;

// Bloque 3: Usar los middlewares
app.use(cors());
app.use(express.json());

// Bloque 4: Definir las rutas de la API
app.get('/api/plantas', (req, res) => {
  const sql = 'SELECT * FROM plantas';
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error en la consulta:", err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
    return res.json(data);
  });
});

app.get('/api/plantas/:id', (req, res) => {
  const { id } = req.params; // Captura el ID de la URL
  const sql = 'SELECT * FROM plantas WHERE id_planta = ?';
  
  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error("Error en la consulta:", err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
    if (data.length === 0) {
      return res.status(404).json({ error: "Planta no encontrada" });
    }
    // La consulta devuelve un array, enviamos solo el primer (y único) resultado
    return res.json(data[0]);
  });
});

// Bloque 5: Encender el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});