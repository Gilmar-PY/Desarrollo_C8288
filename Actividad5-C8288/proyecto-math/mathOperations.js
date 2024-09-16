// Exportación nombrada para la función de suma
export const suma = (a, b) => {
    return a + b;
  };
  
  // Exportación nombrada para la función de resta
  export const resta = (a, b) => {
    return a - b;
  };
  
  // Definir multiplicar y dividir como exportación por defecto
  const multiplicar = (a, b) => {
    return a * b;
  };
  
  const dividir = (a, b) => {
    if (b !== 0) {
      return a / b;
    } else {
      return "No se puede dividir entre 0";
    }
  };
  
  // Exportar como un objeto por defecto
  export default { multiplicar, dividir };
  