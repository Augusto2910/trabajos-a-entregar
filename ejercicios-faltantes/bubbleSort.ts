// Arreglo de ejemplo
let arregloBur = [1, 7, 4, 8, 5, 9, 3];
console.log(burbuja(arregloBur, 7));

// Función de Bubble Sort
function burbuja(arreglo: number[], cantidad: number): number[] {
  let i: number, j: number;
  
  for (i = 2; i < cantidad; i++) { // Recorre el arreglo desde la posición 2 hasta cantidad
    for (j = 0; j < cantidad - 1; j++) { // Compara todos los elementos
      // Compara elementos y los intercambia si es necesario
      if (comparar(arreglo, j, j + 1) == -1) {
        intercambiar(arreglo, j, j + 1);
      }
    }
  }

  return arreglo;
}

// Función de comparación para orden descendente
function comparar(arreglo: number[], i: number, j: number): number {
  let comparacion: number;

  if (arreglo[i] == arreglo[j]) {
    comparacion = 0;
  } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1; // Intercambiar si el primer elemento es menor
  } else {
    comparacion = 1;
  }

  return comparacion;
}

// Función para intercambiar elementos
function intercambiar(arreglo: number[], i: number, j: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}
