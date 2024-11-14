// Función que recibe un arreglo de butacas y devuelve la cantidad de desocupadas
function contarButacasDesocupadas(butacas: boolean[]): number {
    let contador = 0;
    
    // Recorrer el arreglo de butacas
    for (let i = 0; i < butacas.length; i++) {
      if (!butacas[i]) {
        // Si la butaca está desocupada (false), aumentar el contador
        contador++;
      }
    }
    
    return contador; // Devolver la cantidad de butacas desocupadas
  }
  
  // Ejemplo de uso
  const salaCine: boolean[] = [true, false, true, false, false, true, true, false];
  
  // Contar cuántas butacas están desocupadas
  const desocupadas = contarButacasDesocupadas(salaCine);
  console.log(`Hay ${desocupadas} butacas desocupadas en la sala de cine.`);
  