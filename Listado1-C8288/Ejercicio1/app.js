const fs = require('fs');
const https = require('https');

// Callback para leer el archivo JSON
function readUsersFile(callback) {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        const users = JSON.parse(data);
        callback(null, users);
    });
}

// Callback para obtener información adicional de la API
function getUserData(user, callback) {
    const url = `https://jsonplaceholder.typicode.com/users?username=${user.name}`;
    
    https.get(url, (res) => {
        let data = '';

        // Acumulamos los datos que llegan en fragmentos
        res.on('data', (chunk) => {
            data += chunk;
        });

        // Cuando termina la solicitud, procesamos la respuesta
        res.on('end', () => {
            const userData = JSON.parse(data)[0];
            callback(null, { ...user, additionalData: userData });
        });
    }).on('error', (err) => {
        callback(err);
    });
}

// Callback para guardar los datos en un archivo nuevo
function saveCombinedData(users, callback) {
    const combinedData = JSON.stringify(users, null, 2);
    fs.writeFile('combinedUsers.json', combinedData, (err) => {
        if (err) {
            return callback(err);
        }
        callback(null, 'Datos guardados exitosamente en combinedUsers.json');
    });
}

// Encadenar las operaciones
readUsersFile((err, users) => {
    if (err) {
        return console.error('Error leyendo el archivo:', err);
    }

    let processedUsers = [];

    users.forEach((user, index) => {
        getUserData(user, (err, updatedUser) => {
            if (err) {
                return console.error('Error obteniendo datos del usuario:', err);
            }

            processedUsers.push(updatedUser);

            // Si hemos procesado todos los usuarios, guardamos los datos combinados
            if (processedUsers.length === users.length) {
                saveCombinedData(processedUsers, (err, successMessage) => {
                    if (err) {
                        return console.error('Error guardando los datos:', err);
                    }
                    console.log(successMessage);
                });
            }
        });
    });
});
