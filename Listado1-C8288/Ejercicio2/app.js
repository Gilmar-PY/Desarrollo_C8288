const fs = require('fs').promises;
const axios = require('axios');

// Función para leer el archivo JSON usando Promesas
function readUsersFile() {
    return fs.readFile('users.json', 'utf8')
        .then(data => JSON.parse(data))
        .catch(err => {
            console.error('Error leyendo el archivo:', err);
            throw err;
        });
}

// Función para obtener datos de la API usando axios (promesas)
function getUserData(user) {
    const url = `https://jsonplaceholder.typicode.com/users?username=${user.name}`;
    
    return axios.get(url)
        .then(response => {
            const userData = response.data[0];
            return { ...user, additionalData: userData };
        })
        .catch(err => {
            console.error('Error obteniendo datos del usuario:', err);
            throw err;
        });
}

// Función para guardar los datos combinados en un archivo
function saveCombinedData(users) {
    const combinedData = JSON.stringify(users, null, 2);
    return fs.writeFile('combinedUsers.json', combinedData)
        .then(() => {
            console.log('Datos guardados exitosamente en combinedUsers.json');
        })
        .catch(err => {
            console.error('Error guardando los datos:', err);
            throw err;
        });
}

// Encadenar las operaciones con promesas
readUsersFile()
    .then(users => {
        return Promise.all(users.map(user => getUserData(user)));
    })
    .then(processedUsers => {
        return saveCombinedData(processedUsers);
    })
    .catch(err => {
        console.error('Ocurrió un error en el proceso:', err);
    });
