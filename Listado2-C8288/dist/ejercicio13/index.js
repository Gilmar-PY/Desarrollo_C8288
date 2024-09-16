"use strict";
// Estructura de datos con personas agrupadas por roles
const rolesPersona = {
    admin: [
        { identificador: 1, nombre: "Sharon" },
        { identificador: 2, nombre: "Leonardo" },
    ],
    editor: [
        { identificador: 3, nombre: "Carlos" }
    ],
    viewer: [
        { identificador: 4, nombre: "Ana" }
    ]
};
// Función para agregar una persona a un rol
function agregarPersona(rol, persona) {
    if (rolesPersona[rol]) {
        rolesPersona[rol].push(persona);
    }
    else {
        rolesPersona[rol] = [persona];
    }
}
// Función para obtener las personas por rol
function obtenerPersonasPorRol(rol) {
    return rolesPersona[rol] || [];
}
// Ejemplo de uso
agregarPersona('admin', { identificador: 5, nombre: 'Jhonder' });
console.log(obtenerPersonasPorRol('admin')); // Muestra las personas con rol 'admin'
