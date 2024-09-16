// Definir el tipo Usermod 
type Usermod = {
    id_u: number;
    name: string;  // La propiedad es 'name'
    email: string;
  };
  
  // Definir el tipo Order
  type Order = {
    orderId: number;
    product: string;
    quantity: number;
  };
  
  // Usar intersección de tipos para combinar Usermod y Order
  type UserOrder = Usermod & Order;
  
  // Función que procesa el pedido de un usuario
  function procesarPedido(userOrder: UserOrder): string {
    return `El usuario ${userOrder.name} ha realizado un pedido del producto ${userOrder.product} con cantidad de ${userOrder.quantity}.`;
  }
  
  // Ejemplo de uso
  const userOrder: UserOrder = {
    id_u: 1,
    name: "Sharon",
    email: "sharon@example.com",
    orderId: 101,
    product: "Laptop",
    quantity: 1,
  };
  
  console.log(procesarPedido(userOrder));  // Muestra la combinación de datos de usuario y pedido
  