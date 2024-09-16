"use strict";
function procesarValor(valor) {
    if (valor === null) {
        return "Valor es null";
    }
    else if (valor === undefined) {
        return "Valor es undefined";
    }
    else if (typeof valor === "string") {
        return `El valor es una cadena de texto: ${valor.toUpperCase()}`;
    }
    else if (typeof valor === "number") {
        return `El valor es un número: ${valor * 2}`;
    }
    else {
        return "Valor desconocido";
    }
}
// Ejemplo de uso:
console.log(procesarValor("Hola")); // El valor es una cadena de texto: HOLA
console.log(procesarValor(42)); // El valor es un número: 84
console.log(procesarValor(null)); // Valor es null
console.log(procesarValor(undefined)); // Valor es undefined
