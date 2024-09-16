// Definir el tipo condicional UnwrapPromise
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

// Función que utiliza el tipo condicional
function getResponseType<T>(valor: T): UnwrapPromise<T> {
  return valor as UnwrapPromise<T>;
}

// Ejemplos de uso

// Ejemplo con una promesa
const promesa = Promise.resolve("Hola mundo");
promesa.then(result => {
  const resultadoPromesa = getResponseType(result);  // Tipo inferido es string
  console.log("Resultado de la promesa:", resultadoPromesa);  // Imprime el resultado de la promesa
});

// Ejemplo con un número
const numero = 42;
const resultadoNumero = getResponseType(numero);  // Tipo inferido es number
console.log("Resultado del número:", resultadoNumero);  // Imprime el resultado del número
