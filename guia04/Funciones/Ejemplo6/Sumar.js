function sumar(valor1, valor2, valor3) {
    return valor1 + valor2 + valor3;
}
var vec = [10, 20, 30];
var s = sumar.apply(void 0, vec);
console.log(s);
