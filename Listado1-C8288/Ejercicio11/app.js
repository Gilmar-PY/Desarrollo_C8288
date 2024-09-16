// Funciones asincrónicas que simulan tareas
async function taskA() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Tarea A completada');
}

async function taskB() {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Tarea B completada');
}

async function taskC() {
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log('Tarea C completada');
}

async function taskD() {
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log('Tarea D completada');
}

async function taskE() {
    await new Promise(resolve => setTimeout(resolve, 400));
    console.log('Tarea E completada');
}

// Nodo padre que depende de los nodos hijos A, B, C
async function parentTask() {
    try {
        // Ejecutar las tareas dependientes (A, B, C) en paralelo
        await Promise.all([taskA(), taskB(), taskC()]);
        console.log('Todas las tareas dependientes de A, B y C completadas');
        
        // Ahora ejecutamos las tareas hijas de B (D y E)
        await Promise.all([taskD(), taskE()]);
        console.log('Todas las tareas dependientes de D y E completadas');

        console.log('Tarea principal completada');
    } catch (error) {
        console.error('Error en la ejecución de una tarea:', error.message);
    }
}

// Ejecutar la tarea principal
parentTask();
