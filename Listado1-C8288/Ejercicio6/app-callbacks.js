const fs = require('fs');

// Simulación de validación del formulario
function validateForm(user, callback) {
    setTimeout(() => {
        if (user.name && user.email) {
            console.log('Formulario validado correctamente.');
            callback(null, user);
        } else {
            callback(new Error('Validación fallida. Todos los campos son obligatorios.'));
        }
    }, 1000);
}

// Simulación de almacenamiento en la base de datos
function storeInDatabase(user, callback) {
    setTimeout(() => {
        console.log(`Usuario ${user.name} almacenado en la base de datos.`);
        callback(null, user);
    }, 1000);
}

// Simulación de envío de email de bienvenida
function sendWelcomeEmail(user, callback) {
    setTimeout(() => {
        console.log(`Email de bienvenida enviado a ${user.email}.`);
        callback(null, 'Registro completado.');
    }, 1000);
}

// Registro de usuario utilizando callbacks
function registerUser(user) {
    validateForm(user, (err, validatedUser) => {
        if (err) {
            return console.error('Error:', err.message);
        }

        storeInDatabase(validatedUser, (err, storedUser) => {
            if (err) {
                return console.error('Error:', err.message);
            }

            sendWelcomeEmail(storedUser, (err, message) => {
                if (err) {
                    return console.error('Error:', err.message);
                }

                console.log(message);
            });
        });
    });
}

// Ejemplo de registro de usuario
const user = { name: 'Sharon', email: 'sharon@example.com' };
registerUser(user);
