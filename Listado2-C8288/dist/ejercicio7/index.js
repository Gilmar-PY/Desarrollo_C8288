"use strict";
// Función genérica que devuelve una promesa con un array filtrado
function filtrarArray(array) {
    return new Promise((resolve, reject) => {
        try {
            const filtrado = array.filter(element => element !== null && element !== undefined);
            resolve(filtrado);
        }
        catch (error) {
            reject(error);
        }
    });
}
// Ejemplo con un array de números
const numeros = [1, 2, null, 4, undefined, 5];
filtrarArray(numeros).then(resultado => {
    console.log("Array filtrado de números:", resultado); // [1, 2, 4, 5]
});
// Ejemplo con un array de palabras
const palabras = ["hola", null, "mundo", undefined, "typescript"];
filtrarArray(palabras).then(resultado => {
    console.log("Array filtrado de palabras:", resultado); // ["hola", "mundo", "typescript"]
});
