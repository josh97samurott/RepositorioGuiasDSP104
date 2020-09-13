function sumar() {
    var valores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valores[_i] = arguments[_i];
    }
    var suma = 0;
    for (var x = 0; x < valores.length; x++)
        suma += valores[x];
    return suma;
}
console.log(sumar(10, 2, 44, 3));
console.log(sumar(1, 2));
console.log(sumar());
