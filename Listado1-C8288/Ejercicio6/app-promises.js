const fs = require('fs');

// Simulación de validación del formulario
function validateForm(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.name && user.email) {
                console.log('Formulario validado correctamente.');
                resolve(user);
            } else {
                reject(new Error('Validación fallida. Todos los campos son obligatorios.'));
            }
        }, 1000);
    });
}

// Simulación de almacenamiento en la base de datos
function storeInDatabase(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Usuario ${user.name} almacenado en la base de datos.`);
            resolve(user);
        }, 1000);
    });
}

// Simulación de envío de email de bienvenida
function sendWelcomeEmail(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Email de bienvenida enviado a ${user.email}.`);
            resolve('Registro completado.');
        }, 1000);
    });
}

// Registro de usuario utilizando promesas encadenadas
function registerUser(user) {
    validateForm(user)
        .then(validatedUser => storeInDatabase(validatedUser))
        .then(storedUser => sendWelcomeEmail(storedUser))
        .then(message => {
            console.log(message);
        })
        .catch(err => {
            console.error('Error:', err.message);
        });
}

// Ejemplo de registro de usuario
const user = { name: 'Sharon', email: 'sharon@example.com' };
registerUser(user);
