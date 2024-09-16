import fetch from 'node-fetch';

// Función para obtener el clima de una ciudad
export const getWeather = async (city) => {
  const apiKey = 'YOUR_OPENWEATHER_API_KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      city: city,
      temperature: data.main.temp,
      weather: data.weather[0].description,
    };
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    return null;
  }
};

// Función para obtener el clima de varias ciudades y calcular el promedio de temperatura
export const getWeatherReport = async (cities) => {
  const weatherData = await Promise.all(cities.map(city => getWeather(city)));
  const validData = weatherData.filter(data => data !== null);

  const avgTemperature = validData.reduce((sum, city) => sum + city.temperature, 0) / validData.length;

  return {
    averageTemperature: avgTemperature,
    cities: validData,
  };
};
