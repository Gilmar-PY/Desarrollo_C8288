import { getWeatherReport } from './dataFetcher.js';

// Función para generar un reporte de clima en formato JSON
export const generateWeatherReport = async (cities) => {
  const report = await getWeatherReport(cities);
  return {
    reportGeneratedAt: new Date().toISOString(),
    ...report,
  };
};
