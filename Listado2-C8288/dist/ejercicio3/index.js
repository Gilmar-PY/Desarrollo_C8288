"use strict";
// Función que maneja tanto tareas regulares como tareas completadas
function manejarTarea(tarea) {
    console.log(`Título: ${tarea.title}`);
    console.log(`Descripción: ${tarea.description}`);
    console.log(`Estado: ${tarea.status}`);
    if (tarea.status === 'completed' && 'completionDate' in tarea) {
        console.log(`Fecha de finalización: ${tarea.completionDate}`);
    }
}
// Crear una tarea pendiente
const tarea1 = {
    title: "Comprar alimentos",
    description: "Comprar leche, pan y huevos",
    status: 'pending'
};
// Crear una tarea completada
const tarea2 = {
    title: "Terminar proyecto",
    description: "Terminar el proyecto de TypeScript",
    status: 'completed',
    completionDate: new Date('2024-09-15')
};
// Llamamos a la función para manejar ambas tareas
manejarTarea(tarea1); // Maneja la tarea regular
manejarTarea(tarea2); // Maneja la tarea completada
