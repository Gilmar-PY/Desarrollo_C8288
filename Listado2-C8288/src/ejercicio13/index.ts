// Tipo que representa a una persona
type Persona = {
    identificador: number;
    nombre: string;
  };
  
  // Tipo indexado que asocia roles a arrays de personas
  type RolesPersona = {
    [rol: string]: Persona[];
  };
  
  // Estructura de datos con personas agrupadas por roles
  const rolesPersona: RolesPersona = {
    admin: [
      { identificador: 1, nombre: "Sharon" },
      { identificador: 2, nombre: "Leonardo" },
    ],
    editor: [
      { identificador: 3, nombre: "Carlos" }
    ],
    viewer: [
      { identificador: 4, nombre: "Ana" }
    ]
  };
  
  // Función para agregar una persona a un rol
  function agregarPersona(rol: keyof RolesPersona, persona: Persona): void {
    if (rolesPersona[rol]) {
      rolesPersona[rol].push(persona);
    } else {
      rolesPersona[rol] = [persona];
    }
  }
  
  // Función para obtener las personas por rol
  function obtenerPersonasPorRol(rol: keyof RolesPersona): Persona[] {
    return rolesPersona[rol] || [];
  }
  
  // Ejemplo de uso
  agregarPersona('admin', { identificador: 5, nombre: 'Jhonder' });
  console.log(obtenerPersonasPorRol('admin'));  // Muestra las personas con rol 'admin'
  
  