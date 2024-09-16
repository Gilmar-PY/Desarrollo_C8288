const fs = require('fs').promises;

// Mecanismo de cancelación simulado
class CancelablePromise {
    constructor() {
        this.cancelled = false;
    }

    cancel() {
        this.cancelled = true;
        console.log('Operación cancelada.');
    }
}

// Función para leer un archivo grande de manera asincrónica con soporte para cancelación
async function readLargeFile(filePath, cancelToken) {
    try {
        const fileHandle = await fs.open(filePath, 'r');
        const stats = await fileHandle.stat();
        const fileSize = stats.size;
        let bytesRead = 0;
        const chunkSize = 1024; // Leemos el archivo en fragmentos

        const buffer = Buffer.alloc(chunkSize);

        while (bytesRead < fileSize) {
            if (cancelToken.cancelled) {
                console.log('Lectura del archivo cancelada.');
                await fileHandle.close();
                return;
            }

            const { bytesRead: currentRead } = await fileHandle.read(buffer, 0, chunkSize, bytesRead);
            bytesRead += currentRead;
            console.log(`Leídos ${bytesRead} bytes de ${fileSize}...`);

            // Simulamos un pequeño retraso para ilustrar la lectura en partes
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        console.log('Lectura del archivo completada.');
        await fileHandle.close();
    } catch (error) {
        console.error('Error durante la lectura del archivo:', error.message);
    }
}

// Simulación de ejecución
const cancelToken = new CancelablePromise();

// Leer el archivo
readLargeFile('archivo_grande.txt', cancelToken);

// Simular la cancelación del proceso después de 1 segundo
setTimeout(() => {
    cancelToken.cancel();
}, 1000);
