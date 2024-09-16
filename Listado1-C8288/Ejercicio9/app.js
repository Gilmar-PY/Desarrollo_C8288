const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');

// Simulación de una base de datos de usuarios
const usersDB = [
    { id: 1, username: 'carlos', password: '$2a$10$7Qdss1Gnwnuzy9oNfK.Fu.GCBPysQJ5htn4rfUwF1xHYJNRMz1./W' } // password: 'mypassword'
];

// Función para validar las credenciales del usuario
function validateCredentials(username, password) {
    return new Promise((resolve, reject) => {
        const user = usersDB.find(u => u.username === username);
        if (!user) {
            return reject(new Error('Usuario no encontrado.'));
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return reject(new Error('Error al verificar la contraseña.'));
            }
            if (!isMatch) {
                return reject(new Error('Contraseña incorrecta.'));
            }
            resolve(user);
        });
    });
}

// Función para generar un token JWT
function generateJWT(user) {
    return new Promise((resolve, reject) => {
        const payload = { id: user.id, username: user.username };
        jwt.sign(payload, 'secretkey', { expiresIn: '1h' }, (err, token) => {
            if (err) {
                return reject(new Error('Error al generar el token JWT.'));
            }
            resolve(token);
        });
    });
}

// Función para registrar la actividad de inicio de sesión en un sistema externo
function logLoginActivity(user, token) {
    return axios.post('https://api.example.com/logActivity', {
        userId: user.id,
        token
    }).then(response => response.data)
      .catch(err => {
          throw new Error('Error al registrar la actividad de inicio de sesión.');
      });
}

// Función principal para manejar el flujo de autenticación
function authenticateUser(username, password) {
    validateCredentials(username, password)
        .then(user => generateJWT(user))  // Generar token JWT
        .then(token => {
            console.log('Autenticación exitosa, token generado:', token);
            return logLoginActivity({ id: 1, username: 'carlos' }, token); // Registrar actividad
        })
        .then(() => {
            console.log('Actividad registrada correctamente.');
        })
        .catch(err => {
            console.error('Error en el proceso de autenticación:', err.message);
        });
}

// Simulación de inicio de sesión
authenticateUser('carlos', 'mypassword');
