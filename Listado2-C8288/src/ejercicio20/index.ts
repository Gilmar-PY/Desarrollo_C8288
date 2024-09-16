// Funciones para manejar transacciones
function procesarTransaccion(monto: number, tipo: 'credito' | 'debito'): string {
    return `Transacción de tipo ${tipo} por un monto de ${monto}`;
  }
  
  function calcularBalance(transacciones: number[]): number {
    return transacciones.reduce((acc, transaccion) => acc + transaccion, 0);
  }
  
  // Inferir tipos usando ReturnType y Parameters
  type TipoDeRetornoTransaccion = ReturnType<typeof procesarTransaccion>;
  type ParametrosDeCalculoBalance = Parameters<typeof calcularBalance>;
  
  // Ejemplo de uso con tipos inferidos
  const resultadoTransaccion: TipoDeRetornoTransaccion = procesarTransaccion(100, 'credito');
  console.log(resultadoTransaccion);  // Transacción de tipo credito por un monto de 100
  
  const transacciones: ParametrosDeCalculoBalance[0] = [100, -50, 200];
  const balance: number = calcularBalance(transacciones);
  console.log(`El balance es: ${balance}`);  // El balance es: 250
  