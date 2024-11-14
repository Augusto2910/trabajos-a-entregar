import * as readline from 'readline';

function convertirACamelCase(texto: string): string {
  let palabras = texto.trim().toLowerCase().split(" ");
  let camelCase = palabras[0];

  for (let i = 1; i < palabras.length; i++) {
    camelCase += palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }

  return camelCase;
}

// Crear una interfaz de lectura para obtener la entrada desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar al usuario que ingrese un texto
rl.question('Ingrese un texto para convertir a camelCase: ', (textoUsuario) => {
  console.log(convertirACamelCase(textoUsuario));
  rl.close(); // Cerrar la interfaz después de recibir la entrada
});
