function convertirEnClave(palabra: string): string {
    let clave = "";
  
    for (let i = 0; i < palabra.length; i++) {
      let caracter = palabra[i];
  
      // Reemplazar vocales con simbolos correspondientes
      if ("aeiou".includes(caracter)) {
        switch (caracter) {
          case 'a': clave += '.'; break;
          case 'e': clave += ','; break;
          case 'i': clave += ';'; break;
          case 'o': clave += ':'; break;
          case 'u': clave += '!'; break;
        }
      } else if ("AEIOU".includes(caracter)) {
        switch (caracter) {
          case 'A': clave += '.'; break;
          case 'E': clave += ','; break;
          case 'I': clave += ';'; break;
          case 'O': clave += ':'; break;
          case 'U': clave += '!'; break;
        }
      }
      // Si es un numero o un operador matematico, lo deja igual
      else if ("0123456789+-*/".includes(caracter)) {
        clave += caracter;
      }
      // Si es una consonante minuscula, pasa a mayuscula
      else if (caracter >= 'a' && caracter <= 'z') {
        clave += caracter.toUpperCase();
      }
      // Si es una consonante mayuscula, pasar a minuscula
      else if (caracter >= 'A' && caracter <= 'Z') {
        clave += caracter.toLowerCase();
      }
      // Si no es ninguno de los anteriores, agregar el caracter como esta
      else {
        clave += caracter;
      }
    }
  
    return clave;
  }
  
  // Ejemplo de uso
  let palabraUsuario = "AuGuSto2910";
  console.log(convertirEnClave(palabraUsuario)); 
  