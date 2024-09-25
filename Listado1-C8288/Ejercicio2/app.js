import { promises as fs } from 'fs'; // Usar import para fs.promises
import fetch from 'node-fetch'; // Asegúrate de tener instalado node-fetch

// Función para leer el archivo JSON usando fs.promises
function readUsersFile() {
    return fs.readFile('users.json', 'utf8')
        .then(data => JSON.parse(data))
        .catch(err => {
            throw new Error('Error leyendo el archivo: ' + err.message);
        });
}

// Función para obtener información adicional de la API usando fetch
function getUserData(user) {
    const url = `https://jsonplaceholder.typicode.com/users?username=${user.name}`;

    return fetch(url)
        .then(response => response.json())
        .then(userData => ({ ...user, additionalData: userData[0] }))
        .catch(err => {
            throw new Error('Error obteniendo datos del usuario: ' + err.message);
        });
}

// Función para guardar los datos en un archivo nuevo usando fs.promises
function saveCombinedData(users) {
    const combinedData = JSON.stringify(users, null, 2);
    return fs.writeFile('combinedUsers.json', combinedData)
        .then(() => 'Datos guardados exitosamente en combinedUsers.json')
        .catch(err => {
            throw new Error('Error guardando los datos: ' + err.message);
        });
}

// Encadenar las promesas para realizar todas las operaciones
function processUsers() {
    readUsersFile()
        .then(users => Promise.all(users.map(user => getUserData(user)))) // Procesa todos los usuarios en paralelo
        .then(processedUsers => saveCombinedData(processedUsers)) // Guarda los datos combinados
        .then(successMessage => console.log(successMessage))
        .catch(err => console.error(err.message)); // Manejo centralizado de errores
}

// Ejecutar el flujo de trabajo
processUsers();

