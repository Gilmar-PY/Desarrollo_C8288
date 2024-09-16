const axios = require('axios');

// Almacenamiento en caché en memoria local
let cache = {};
const CACHE_EXPIRATION = 60000; // 1 minuto en milisegundos

// Función para obtener datos de una API con caché y verificar expiración
async function fetchDataWithConditionalCache(apiName, url) {
    const now = Date.now();

    // Verificar si los datos están en caché y no han expirado
    if (cache[apiName] && (now - cache[apiName].timestamp < CACHE_EXPIRATION)) {
        console.log(`Datos de ${apiName} obtenidos del caché.`);
        return cache[apiName].data;
    }

    // Si no están en caché o han expirado, realizar solicitud a la API
    try {
        console.log(`Solicitando datos de ${apiName} a la API...`);
        const response = await axios.get(url);
        const data = response.data;

        // Almacenar los nuevos datos en caché con una marca de tiempo
        cache[apiName] = {
            data: data,
            timestamp: now
        };

        console.log(`Datos de ${apiName} obtenidos de la API y almacenados en caché.`);
        return data;
    } catch (error) {
        console.error(`Error al obtener los datos de ${apiName}:`, error.message);
        throw new Error(`Error al obtener los datos de ${apiName}.`);
    }
}

// Función para obtener datos financieros y meteorológicos
async function getFinancialAndWeatherData() {
    try {
        // Obtener datos financieros y meteorológicos, utilizando caché condicional
        const financialData = fetchDataWithConditionalCache('financieros', 'https://api.example.com/financial');
        const weatherData = fetchDataWithConditionalCache('meteorológicos', 'https://api.example.com/weather');

        // Esperar a que ambas solicitudes terminen
        const [financialResult, weatherResult] = await Promise.all([financialData, weatherData]);

        console.log('Datos financieros:', financialResult);
        console.log('Datos meteorológicos:', weatherResult);
    } catch (error) {
        console.error('Error en la obtención de datos:', error.message);
    }
}

// Ejecutar la función para obtener datos
getFinancialAndWeatherData();
