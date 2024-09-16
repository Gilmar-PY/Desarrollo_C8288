
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    inStock: boolean;
  }
  
  type ProductoEditable = Partial<Product>;
  const productoEdicion: ProductoEditable = {
    name: "Nuevo nombre",
    price: 19.99
  };
  
  type ProductoSimple = Pick<Product, "name" | "price">;
  const productoSimple: ProductoSimple = {
    name: "Zapatos",
    price: 49.99
  };
  
  console.log(productoEdicion);
  console.log(productoSimple);