// Definir la interfaz Drivable
interface Drivable {
    drive(): void;
  }
  
  // Clase base Vehicle
  class Vehicle implements Drivable {
    speed: number;
    fuel: number;
  
    constructor(speed: number, fuel: number) {
      this.speed = speed;
      this.fuel = fuel;
    }
  
    drive(): void {
      if (this.fuel > 0) {
        console.log(`El vehículo está conduciendo a una velocidad de ${this.speed} km/h`);
        this.fuel--;
      } else {
        console.log("El vehículo no tiene suficiente combustible.");
      }
    }
  }
  
  // Clase Car que extiende Vehicle
  class Car extends Vehicle {
    doors: number;
  
    constructor(speed: number, fuel: number, doors: number) {
      super(speed, fuel);
      this.doors = doors;
    }
  
    drive(): void {
      console.log(`El coche con ${this.doors} puertas está conduciendo a una velocidad de ${this.speed} km/h`);
      super.drive();
    }
  }
  
  // Clase Motorcycle que extiende Vehicle
  class Motorcycle extends Vehicle {
    constructor(speed: number, fuel: number) {
      super(speed, fuel);
    }
  
    drive(): void {
      console.log(`La motocicleta está conduciendo a una velocidad de ${this.speed} km/h`);
      super.drive();
    }
  }
  
  // Función para manejar diferentes vehículos
  function manejarVehiculo(vehiculo: Drivable): void {
    vehiculo.drive();
  }
  
  // Ejemplo de uso con polimorfismo
  const miCoche = new Car(120, 50, 4);
  const miMoto = new Motorcycle(80, 10);
  
  manejarVehiculo(miCoche);
  manejarVehiculo(miMoto);
  