const axios = require('axios');

// Función para registrar la compra en la base de datos
async function registerPurchase(userId, items) {
    // Simular registro en la base de datos
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Compra registrada en la base de datos para el usuario:', userId);
            resolve({ purchaseId: 12345, userId, items });
        }, 500);
    });
}

// Función para restar el stock de los productos adquiridos
async function updateStock(items) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Stock actualizado para los productos:', items);
            resolve(true);
        }, 300);
    });
}

// Función para enviar el correo de confirmación
async function sendConfirmationEmail(userId) {
    return axios.post('https://api.example.com/sendEmail', { userId })
        .then(response => {
            console.log('Correo de confirmación enviado al usuario:', userId);
            return response.data;
        })
        .catch(err => {
            throw new Error('Error al enviar el correo de confirmación.');
        });
}

// Función de rollback para revertir las operaciones en caso de fallo
async function rollback(purchaseId) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Rollback realizado. Compra ${purchaseId} revertida.`);
            resolve(true);
        }, 300);
    });
}

// Función principal que coordina las operaciones
async function processPurchase(userId, items) {
    try {
        // Ejecutar todas las operaciones en paralelo
        const [purchase, stockUpdated, emailSent] = await Promise.all([
            registerPurchase(userId, items),
            updateStock(items),
            sendConfirmationEmail(userId)
        ]);

        console.log('Transacción completada exitosamente.');

    } catch (error) {
        console.error('Error en la transacción:', error.message);

        // Si alguna de las promesas falla, realizar rollback
        const purchase = await registerPurchase(userId, items); // Re-obtener detalles de compra
        await rollback(purchase.purchaseId);
        console.log('La transacción ha sido revertida.');
    }
}

// Simulación de compra
const userId = 101;
const items = ['producto1', 'producto2', 'producto3'];

// Ejecutar la compra
processPurchase(userId, items);
