function convertirEnClave(palabra) {
    var clave = "";
    for (var i = 0; i < palabra.length; i++) {
        var caracter = palabra[i];
        // Reemplazar vocales con símbolos correspondientes
        if ("aeiou".includes(caracter)) {
            switch (caracter) {
                case 'a':
                    clave += '.';
                    break;
                case 'e':
                    clave += ',';
                    break;
                case 'i':
                    clave += ';';
                    break;
                case 'o':
                    clave += ':';
                    break;
                case 'u':
                    clave += '!';
                    break;
            }
        }
        else if ("AEIOU".includes(caracter)) {
            switch (caracter) {
                case 'A':
                    clave += '.';
                    break;
                case 'E':
                    clave += ',';
                    break;
                case 'I':
                    clave += ';';
                    break;
                case 'O':
                    clave += ':';
                    break;
                case 'U':
                    clave += '!';
                    break;
            }
        }
        // Si es un número o un operador matemático, lo deja igual
        else if ("0123456789+-*/".includes(caracter)) {
            clave += caracter;
        }
        // Si es una consonante minúscula, pasar a mayúscula
        else if (caracter >= 'a' && caracter <= 'z') {
            clave += caracter.toUpperCase();
        }
        // Si es una consonante mayúscula, pasar a minúscula
        else if (caracter >= 'A' && caracter <= 'Z') {
            clave += caracter.toLowerCase();
        }
        // Si no es ninguno de los anteriores, agregar el carácter como está
        else {
            clave += caracter;
        }
    }
    return clave;
}
// Ejemplo de uso
var palabraUsuario = "AuGuSto2910";
console.log(convertirEnClave(palabraUsuario));
