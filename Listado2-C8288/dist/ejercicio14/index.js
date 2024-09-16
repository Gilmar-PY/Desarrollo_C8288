"use strict";
// Función que procesa el pedido de un usuario
function procesarPedido(userOrder) {
    return `El usuario ${userOrder.name} ha realizado un pedido del producto ${userOrder.product} con cantidad de ${userOrder.quantity}.`;
}
// Ejemplo de uso
const userOrder = {
    id_u: 1,
    name: "Sharon",
    email: "sharon@example.com",
    orderId: 101,
    product: "Laptop",
    quantity: 1,
};
console.log(procesarPedido(userOrder)); // Muestra la combinación de datos de usuario y pedido
