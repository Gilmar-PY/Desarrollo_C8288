// Clase abstracta DataService<T>
abstract class DataService<T> {
    abstract get(id: number): T;
    abstract update(id: number, item: T): void;
    abstract delete(id: number): void;
  }
  
  // Tipo Product1
  type Product1 = {
    id_d: number;
    name: string;
    price: number;
  };
  
  // Servicio de productos que extiende DataService<Product1>
  class ProductService1 extends DataService<Product1> {
    private products: Product1[] = [
      { id_d: 1, name: 'Laptop', price: 1000 },
      { id_d: 2, name: 'Mouse', price: 25 }
    ];
  
    get(id: number): Product1 {
      const product = this.products.find(p => p.id_d === id);
      if (!product) throw new Error("Producto no encontrado");
      return product;
    }
  
    update(id: number, updatedProduct: Product1): void {
      const index = this.products.findIndex(p => p.id_d === id);
      if (index === -1) throw new Error("Producto no encontrado");
      this.products[index] = updatedProduct;
    }
  
    delete(id: number): void {
      this.products = this.products.filter(p => p.id_d !== id);
    }
  }
  
  // Tipo User_m
  type User_m = {
    id_d: number;
    name: string;
    email_m: string;
  };
  
  // Servicio de usuarios que extiende DataService<User_m>
  class UserService_m extends DataService<User_m> {
    private users: User_m[] = [
      { id_d: 1, name: 'Josue', email_m: 'josue@example.com' },
      { id_d: 2, name: 'Leonardo', email_m: 'leo@example.com' }
    ];
  
    get(id: number): User_m {
      const user = this.users.find(u => u.id_d === id);
      if (!user) throw new Error("Usuario no encontrado");
      return user;
    }
  
    update(id: number, updatedUser: User_m): void {
      const index = this.users.findIndex(u => u.id_d === id);
      if (index === -1) throw new Error("Usuario no encontrado");
      this.users[index] = updatedUser;
    }
  
    delete(id: number): void {
      this.users = this.users.filter(u => u.id_d !== id);
    }
  }
  
  // Ejemplo 
  const productService1 = new ProductService1();
  const userService_m = new UserService_m();
  
  // Obtener un producto
  console.log(productService1.get(1));  // { id_d: 1, name: 'Laptop', price: 1000 }
  
  // Actualizar un usuario
  userService_m.update(1, { id_d: 1, name: 'Josue Mendez', email_m: 'josue.mendez@example.com' });
  
  // Eliminar un producto
  productService1.delete(2);
  console.log(productService1.get(2));  
  