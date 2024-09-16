// Importación de las funciones nombradas (suma y resta)
import { suma, resta } from './mathOperations.js';

// Importación de las funciones por defecto (multiplicación y división)
import operaciones from './mathOperations.js';

// Ejemplo de uso de las funciones
const a = 10;
const b = 5;

console.log(`Suma de ${a} y ${b}: ${suma(a, b)}`);  // Suma de 10 y 5: 15
console.log(`Resta de ${a} y ${b}: ${resta(a, b)}`); // Resta de 10 y 5: 5
console.log(`Multiplicación de ${a} y ${b}: ${operaciones.multiplicar(a, b)}`); // Multiplicación de 10 y 5: 50
console.log(`División de ${a} y ${b}: ${operaciones.dividir(a, b)}`); // División de 10 y 5: 2
