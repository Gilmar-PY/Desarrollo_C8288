const axios = require('axios');

// Función que intenta hacer una solicitud a la API con un máximo de 3 intentos
async function fetchDataWithRetries(url, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Intento ${attempt} de ${retries}...`);
            const response = await axios.get(url);
            console.log('Datos obtenidos:', response.data);
            return response.data; // Retorna los datos si la solicitud es exitosa
        } catch (error) {
            console.error(`Error en el intento ${attempt}:`, error.message);

            if (attempt === retries) {
                console.error('Se agotaron todos los intentos.');
                throw new Error('No se pudo obtener la respuesta de la API después de varios intentos.');
            }

            // Esperar un poco antes de volver a intentar (simulación de backoff)
            await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo antes de reintentar
        }
    }
}

// Simulación de llamada a una API poco confiable
const apiUrl = 'https://api.example.com/unreliable';

// Ejecutar la función con reintentos
fetchDataWithRetries(apiUrl, 3)
    .then(data => console.log('Proceso completado con éxito:', data))
    .catch(err => console.error('Error final:', err.message));
