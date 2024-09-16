// Función genérica para combinar dos objetos
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  // Ejemplo de uso
  const user = {
    name: "Sharon",
    email: "sharon@example.com",
  };
  
  const order = {
    orderId: 101,
    product: "Laptop",
  };
  
  const mergedObject = mergeObjects(user, order);
  
  console.log(mergedObject);
  // Resultado: { name: "Sharon", email: "sharon@example.com", orderId: 101, product: "Laptop" }
  
  // error si se intentan pasar tipos no permitidos
  // const invalidMerge = mergeObjects(user, "Hola");  // Error
  // const invalidArrayMerge = mergeObjects(user, [1, 2, 3]);  // Error
  