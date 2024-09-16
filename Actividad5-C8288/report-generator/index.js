import express from 'express';
import { generateWeatherReport } from './reportGenerator.js';

const app = express();
const port = 3000;

// Ruta para solicitar el reporte de clima
app.get('/report', async (req, res) => {
  const cities = ['Lima', 'New York', 'Tokyo', 'Paris']; // Puedes agregar más ciudades aquí
  try {
    const report = await generateWeatherReport(cities);
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error generating report', error: error.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
