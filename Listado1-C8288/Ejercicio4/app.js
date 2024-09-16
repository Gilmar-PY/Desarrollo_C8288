const axios = require('axios');

// Función para validar los datos del producto utilizando async/await
async function validateProduct(product) {
    const url = `https://api.example.com/validate?productId=${product.id}`;
    
    try {
        const response = await axios.get(url);
        if (response.data.isValid) {
            console.log(`Producto ${product.name} validado correctamente.`);
            return product;
        } else {
            throw new Error(`Validación fallida para el producto ${product.name}`);
        }
    } catch (err) {
        console.error('Error en la validación del producto:', err);
        throw err;  // Re-lanza el error para manejarlo en el flujo principal
    }
}

// Función para actualizar la base de datos utilizando async/await
async function updateDatabase(product) {
    try {
        // Simulamos que la operación tarda un poco
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (product.id % 2 === 0) {
                    console.log(`Producto ${product.name} actualizado en la base de datos.`);
                    resolve();
                } else {
                    reject(new Error(`Error actualizando el producto ${product.name} en la base de datos.`));
                }
            }, 1000);
        });
        return product;
    } catch (err) {
        console.error('Error en la actualización de la base de datos:', err);
        throw err;
    }
}

// Función para notificar a los usuarios utilizando async/await
async function notifyUsers(product) {
    const url = `https://api.example.com/notify?productId=${product.id}`;
    
    try {
        const response = await axios.post(url);
        console.log(`Usuarios notificados sobre la actualización del producto ${product.name}.`);
        return response.data;
    } catch (err) {
        console.error('Error notificando a los usuarios:', err);
        throw err;
    }
}

// Función principal que usa async/await para encadenar las operaciones
async function updateProduct(product) {
    try {
        const validProduct = await validateProduct(product);
        const updatedProduct = await updateDatabase(validProduct);
        await notifyUsers(updatedProduct);
        console.log(`Proceso completo para el producto ${product.name}.`);
    } catch (err) {
        console.error('Error en el proceso:', err.message);
    }
}

// Simulación de un producto a actualizar
const product = { id: 2, name: 'Laptop Dell XPS' };

// Ejecutar la función principal
updateProduct(product);
