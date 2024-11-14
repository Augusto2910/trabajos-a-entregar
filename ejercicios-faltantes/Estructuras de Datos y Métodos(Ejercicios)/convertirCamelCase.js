"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function convertirACamelCase(texto) {
    var palabras = texto.trim().toLowerCase().split(" ");
    var camelCase = palabras[0];
    for (var i = 1; i < palabras.length; i++) {
        camelCase += palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return camelCase;
}
// Crear una interfaz de lectura para obtener la entrada desde la terminal
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Solicitar al usuario que ingrese un texto
rl.question('Ingrese un texto para convertir a camelCase: ', function (textoUsuario) {
    console.log(convertirACamelCase(textoUsuario));
    rl.close(); // Cerrar la interfaz después de recibir la entrada
});
