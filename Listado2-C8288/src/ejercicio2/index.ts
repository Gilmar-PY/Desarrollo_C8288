// Definimos el tipo "Usuario"
type Usuario = {
    nombre: string;
    edad: number;
    email: string;
  };
  
  // Función para registrar un usuario
  function registrarUsuario(usuario: Usuario): string {
    return `Usuario ${usuario.nombre} ha sido registrado con éxito.`;
  }
  
  // Creamos algunos usuarios para pruebas
  const usuarios: Usuario[] = [
    { nombre: "Carlos", edad: 23, email: "carlos@example.com" },
    { nombre: "Leonardo", edad: 30, email: "leonardo@example.com" },
    { nombre: "Ana", edad: 19, email: "ana@example.com" }
  ];
  
  // Función para filtrar usuarios por edad mínima
  function filtrarUsuariosPorEdad(edadMinima: number): Usuario[] {
    return usuarios.filter(usuario => usuario.edad >= edadMinima);
  }
  
  // Usamos la función para registrar un usuario
  const nuevoUsuario: Usuario = {
    nombre: "Juan",
    edad: 25,
    email: "juan@example.com"
  };
  
  console.log(registrarUsuario(nuevoUsuario));  // Registramos al usuario "Carlos"
  
  // Usamos la función para filtrar usuarios mayores de 21 años
  const usuariosFiltrados = filtrarUsuariosPorEdad(21);
  console.log(usuariosFiltrados);  // Mostramos los usuarios filtrados
  