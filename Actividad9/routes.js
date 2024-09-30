// Simulación de la función routeHello
function routeHello() {
    return "Hello World!";
  }
  
  // Simulación de la función routeAPINames
  async function routeAPINames() {
    const names = ["Alice", "Bob", "Charlie", "David"];
    return names;
  }
  
  // Simulación de la función routeWeather
  function routeWeather({ zipcode }) {
    return {
      zipcode: zipcode,
      forecast: "sunny",
      temperature: 25
    };
  }
  
  // Exportar las funciones
  module.exports = {
    routeHello,
    routeAPINames,
    routeWeather
  };
  