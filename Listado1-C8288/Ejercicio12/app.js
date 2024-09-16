const axios = require('axios');

// Almacenamiento en caché en memoria local
let cache = {};
const CACHE_EXPIRATION = 60000; // 1 minuto en milisegundos

// Función para obtener datos de la API con caché
async function fetchDataWithCache(url) {
    const now = Date.now();

    // Verificar si los datos están en caché y no han expirado
    if (cache[url] && (now - cache[url].timestamp < CACHE_EXPIRATION)) {
        console.log('Datos obtenidos del caché.');
        return cache[url].data;
    }

    // Si no están en caché o han expirado, hacemos la solicitud a la API
    try {
        console.log('Solicitando datos a la API...');
        const response = await axios.get(url);
        const data = response.data;

        // Almacenar en caché los datos con una marca de tiempo
        cache[url] = {
            data: data,
            timestamp: now
        };

        console.log('Datos obtenidos de la API y almacenados en caché.');
        return data;
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error.message);
        throw new Error('Error al obtener los datos de la API.');
    }
}

// Función para limpiar caché (opcional, si quieres limpiar el caché periódicamente)
function clearCache() {
    cache = {};
    console.log('Caché limpiado.');
}

// Simulación de llamada a la API
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// Llamar a la función de caché
fetchDataWithCache(apiUrl)
    .then(data => console.log('Datos:', data))
    .catch(err => console.error('Error:', err.message));

// Puedes simular la limpieza del caché después de cierto tiempo si lo deseas
setTimeout(clearCache, 120000); // Limpiar caché después de 2 minutos
