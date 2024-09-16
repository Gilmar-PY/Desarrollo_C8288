// Tipo Cache que convierte cada propiedad de T en una Promesa de ese tipo
type Cache1<T> = {
    [K in keyof T]: Promise<T[K]>;
  };
  
  // Clase DataCache que gestiona la caché de datos asincrónicos
  class DataCache<T> {
    private cache: Cache1<T> = {} as Cache1<T>;
  
    add<K extends keyof T>(key: K, value: Promise<T[K]>): void {
      this.cache[key] = value;
    }
  
    get<K extends keyof T>(key: K): Promise<T[K]> {
      return this.cache[key];
    }
  }
  
  // Ejemplo con datos de usuario
  interface UserData {
    id: number;
    name: string;
    age: number;
  }
  
  const userCache = new DataCache<UserData>();
  
  // Simulamos una operación asincrónica
  function fetchUserData(): Promise<UserData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: "Sharon",
          age: 23,
        });
      }, 1000);
    });
  }
  
  // Agregamos datos al caché
  userCache.add("name", fetchUserData().then(data => data.name));
  userCache.add("age", fetchUserData().then(data => data.age));
  
  // Obtenemos los datos del caché
  userCache.get("name").then(name => {
    console.log("Nombre desde la caché:", name);
  });
  
  userCache.get("age").then(age => {
    console.log("Edad desde la caché:", age);
  });
  