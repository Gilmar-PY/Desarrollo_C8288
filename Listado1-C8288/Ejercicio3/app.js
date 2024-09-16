const axios = require('axios');

// Función simulada para validar los datos del producto (en lugar de una API real)
function validateProduct(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product.id % 2 === 0) {  // Simulación: validación exitosa para productos con ID par
                console.log(`Producto ${product.name} validado correctamente.`);
                resolve(product);
            } else {
                reject(new Error(`Validación fallida para el producto ${product.name}`));
            }
        }, 1000);
    });
}

// Función para actualizar la base de datos (simulación)
function updateDatabase(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product.id % 2 === 0) {  // Simulación: actualización exitosa para productos con ID par
                console.log(`Producto ${product.name} actualizado en la base de datos.`);
                resolve(product);
            } else {
                reject(new Error(`Error actualizando el producto ${product.name} en la base de datos.`));
            }
        }, 1000);
    });
}

// Función simulada para notificar a los usuarios
function notifyUsers(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product.id % 2 === 0) {  // Simulación: notificación exitosa
                console.log(`Usuarios notificados sobre la actualización del producto ${product.name}.`);
                resolve();
            } else {
                reject(new Error(`Error notificando a los usuarios sobre el producto ${product.name}.`));
            }
        }, 1000);
    });
}

// Función principal que encadena las operaciones
function updateProduct(product) {
    validateProduct(product)
        .then(validProduct => updateDatabase(validProduct))  // Encadenamos la validación y la actualización
        .then(updatedProduct => notifyUsers(updatedProduct))  // Luego notificamos a los usuarios
        .then(() => {
            console.log(`Proceso completo para el producto ${product.name}.`);
        })
        .catch(err => {
            console.error('Error en el proceso:', err.message);
        });
}

// Simulación de un producto a actualizar
const product = { id: 2, name: 'Laptop Dell XPS' };

// Ejecutamos la cadena de promesas
updateProduct(product);
