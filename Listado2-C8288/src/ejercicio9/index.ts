// Definir el tipo Task
type Task = {
    id: number;
    description: string;
    completed: boolean;
  };
  
  // Lista de tareas (inicialmente vacía)
  let tasks: Task[] = [];
  
  // Función para obtener todas las tareas
  function obtenerTareas(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      if (tasks.length > 0) {
        resolve(tasks);
      } else {
        reject(new Error("No hay tareas pendientes."));  // Usamos un error con un mensaje más claro
      }
    });
  }
  
  // Función para agregar una nueva tarea
  function agregarTarea(description: string): Promise<Task> {
    return new Promise((resolve, reject) => {
      if (description && description.trim() !== "") {
        const newTask: Task = {
          id: tasks.length + 1,
          description,
          completed: false,
        };
        tasks.push(newTask);
        resolve(newTask);
      } else {
        reject(new Error("La descripción de la tarea no puede estar vacía."));
      }
    });
  }
  
  // Función para completar una tarea
  function completarTarea(id: number): Promise<Task> {
    return new Promise((resolve, reject) => {
      const task = tasks.find(t => t.id === id);
      if (task) {
        task.completed = true;
        resolve(task);
      } else {
        reject(new Error(`No se encontró la tarea con ID: ${id}`));
      }
    });
  }
  
  // Ejemplo de uso de las funciones
  
  // Obtener todas las tareas
  obtenerTareas()
    .then(tareas => {
      console.log("Tareas pendientes:", tareas);
    })
    .catch(error => {
      console.error("Error al obtener las tareas:", error.message);  // Accedemos al mensaje del error
    });
  
  // Agregar una nueva tarea
  agregarTarea("Estudiar TypeScript")
    .then(tarea => {
      console.log("Nueva tarea agregada:", tarea);
    })
    .catch(error => {
      console.error("Error al agregar la tarea:", error.message);
    });
  
  // Marcar una tarea como completada
  completarTarea(1)
    .then(tarea => {
      console.log("Tarea completada:", tarea);
    })
    .catch(error => {
      console.error("Error al completar la tarea:", error.message);
    });
  