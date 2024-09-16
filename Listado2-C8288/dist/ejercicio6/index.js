"use strict";
// Función para gestionar usuarios según su tipo
function gestionarUsuario(user) {
    console.log(`Usuario: ${user.username}`);
    if (user.role === 'admin') {
        console.log(`Rol: Administrador`);
        console.log(`Permisos: ${user.permissions.join(', ')}`);
    }
    else if (user.role === 'regular') {
        console.log(`Rol: Usuario regular`);
        console.log(`Correo: ${user.email}`);
    }
}
// Ejemplo de uso
const admin = {
    username: "admin123",
    role: "admin",
    permissions: ["manage-users", "edit-content"]
};
const regular = {
    username: "user456",
    role: "regular",
    email: "user@example.com"
};
gestionarUsuario(admin); // Maneja un administrador
gestionarUsuario(regular); // Maneja un usuario regular
