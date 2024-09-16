const axios = require('axios');

// Funciones simuladas que llaman a APIs meteorológicas
async function getWeatherFromAPI1() {
    const url = 'https://api1.example.com/weather';
    return axios.get(url).then(response => response.data.temperature);
}

async function getWeatherFromAPI2() {
    const url = 'https://api2.example.com/weather';
    return axios.get(url).then(response => response.data.temperature);
}

async function getWeatherFromAPI3() {
    const url = 'https://api3.example.com/weather';
    return axios.get(url).then(response => response.data.temperature);
}

// Función principal para obtener la temperatura media
async function getAverageTemperature() {
    try {
        const results = await Promise.allSettled([
            getWeatherFromAPI1(),
            getWeatherFromAPI2(),
            getWeatherFromAPI3()
        ]);

        // Filtrar los resultados exitosos
        const successfulResults = results.filter(result => result.status === 'fulfilled').map(result => result.value);

        if (successfulResults.length === 0) {
            throw new Error('No se pudo obtener información de ninguna API.');
        }

        // Calcular la media de las temperaturas obtenidas
        const averageTemperature = successfulResults.reduce((acc, temp) => acc + temp, 0) / successfulResults.length;

        console.log(`La temperatura media es: ${averageTemperature.toFixed(2)}°C`);
    } catch (err) {
        console.error('Error al obtener la temperatura media:', err.message);
    }
}

// Ejecutar la función principal
getAverageTemperature();
