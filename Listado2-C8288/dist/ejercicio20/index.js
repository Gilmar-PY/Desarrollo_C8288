"use strict";
// Funciones para manejar transacciones
function procesarTransaccion(monto, tipo) {
    return `Transacción de tipo ${tipo} por un monto de ${monto}`;
}
function calcularBalance(transacciones) {
    return transacciones.reduce((acc, transaccion) => acc + transaccion, 0);
}
// Ejemplo de uso con tipos inferidos
const resultadoTransaccion = procesarTransaccion(100, 'credito');
console.log(resultadoTransaccion); // Transacción de tipo credito por un monto de 100
const transacciones = [100, -50, 200];
const balance = calcularBalance(transacciones);
console.log(`El balance es: ${balance}`); // El balance es: 250
