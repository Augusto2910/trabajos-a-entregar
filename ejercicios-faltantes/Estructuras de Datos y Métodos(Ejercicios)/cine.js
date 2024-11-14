// Función que recibe un arreglo de butacas y devuelve la cantidad de desocupadas
function contarButacasDesocupadas(butacas) {
    var contador = 0;
    // Recorrer el arreglo de butacas
    for (var i = 0; i < butacas.length; i++) {
        if (!butacas[i]) {
            // Si la butaca está desocupada (false), aumentar el contador
            contador++;
        }
    }
    return contador; // Devolver la cantidad de butacas desocupadas
}
// Ejemplo de uso
var salaCine = [true, false, true, false, false, true, true, false];
// Contar cuántas butacas están desocupadas
var desocupadas = contarButacasDesocupadas(salaCine);
console.log("Hay ".concat(desocupadas, " butacas desocupadas en la sala de cine."));
