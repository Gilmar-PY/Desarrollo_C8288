const axios = require('axios');

// Simulación de descarga de un archivo desde una API
async function downloadFile(fileId) {
    console.log(`Iniciando descarga del archivo: ${fileId}`);
    // Simulación de tiempo de descarga
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 segundos de espera simulada
    console.log(`Descarga completada del archivo: ${fileId}`);
    return fileId;
}

// Sistema de cola para controlar la concurrencia
async function concurrentDownloads(fileIds, maxConcurrent = 5) {
    const results = [];
    const executing = [];

    for (const fileId of fileIds) {
        const downloadTask = downloadFile(fileId).then(result => {
            // Cuando una descarga termina, se elimina del array de tareas ejecutándose
            executing.splice(executing.indexOf(downloadTask), 1);
            return result;
        });

        // Añadir la tarea a la lista de tareas ejecutándose
        results.push(downloadTask);
        executing.push(downloadTask);

        // Si el número de descargas simultáneas llega al máximo, esperamos a que alguna termine
        if (executing.length >= maxConcurrent) {
            await Promise.race(executing); // Esperamos a que una de las descargas termine
        }
    }

    // Esperar a que todas las descargas pendientes se completen
    return Promise.all(results);
}

// Simulación de descarga de múltiples archivos
const fileIds = ['file1', 'file2', 'file3', 'file4', 'file5', 'file6', 'file7', 'file8', 'file9', 'file10'];

// Ejecutar descargas con un máximo de 5 simultáneamente
concurrentDownloads(fileIds, 5)
    .then(results => {
        console.log('Todas las descargas completadas:', results);
    })
    .catch(err => {
        console.error('Error en el proceso de descarga:', err.message);
    });
