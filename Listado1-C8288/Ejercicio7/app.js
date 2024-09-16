const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Simulación de servicios externos (clima, noticias y criptomonedas)
const getWeatherData = async () => {
    const url = 'https://api1.example.com/weather';
    return axios.get(url).then(response => response.data);
};

const getNewsData = async () => {
    const url = 'https://api2.example.com/news';
    return axios.get(url).then(response => response.data);
};

const getCryptoData = async () => {
    const url = 'https://api3.example.com/crypto';
    return axios.get(url).then(response => response.data);
};

// Endpoint que obtiene los datos de los tres servicios en paralelo
app.get('/data', async (req, res) => {
    try {
        const [weather, news, crypto] = await Promise.all([
            getWeatherData(),
            getNewsData(),
            getCryptoData()
        ]);

        // Consolidar la respuesta
        const consolidatedData = {
            weather,
            news,
            crypto
        };

        res.json(consolidatedData);
    } catch (error) {
        console.error('Error obteniendo los datos:', error.message);
        res.status(500).json({ error: 'Ocurrió un error al obtener los datos.' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
