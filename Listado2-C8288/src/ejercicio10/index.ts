// Definir la interfaz FormField
interface FormField<T> {
    type: 'input' | 'textarea' | 'select';
    label: string;
    value: T;
  }
  
  // Función para generar el HTML del campo
  function crearCampo<T>(field: FormField<T>): string {
    switch (field.type) {
      case 'input':
        return `<input type="text" value="${field.value}" placeholder="${field.label}" />`;
      case 'textarea':
        return `<textarea placeholder="${field.label}">${field.value}</textarea>`;
      case 'select':
        return `<select><option>${field.value}</option></select>`;
      default:
        throw new Error('Tipo de campo no soportado');
    }
  }
  
  // Ejemplos de uso
  const campoInput: FormField<string> = {
    type: 'input',
    label: 'Nombre',
    value: 'Sharon'
  };
  
  const campoTextarea: FormField<string> = {
    type: 'textarea',
    label: 'Descripción',
    value: 'Escribe tu comentario aquí...'
  };
  
  const campoSelect: FormField<number> = {
    type: 'select',
    label: 'Edad',
    value: 25
  };
  
  console.log(crearCampo(campoInput));     // <input type="text" value="Sharon" placeholder="Nombre" />
  console.log(crearCampo(campoTextarea));  // <textarea placeholder="Descripción">Escribe tu comentario aquí...</textarea>
  console.log(crearCampo(campoSelect));    // <select><option>25</option></select>
  