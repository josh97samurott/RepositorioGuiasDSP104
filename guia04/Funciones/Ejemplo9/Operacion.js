var Operacion = /** @class */ (function () {
    function Operacion() {
    }
    Operacion.prototype.sumar = function () {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        var suma = 0;
        for (var x = 0; x < valores.length; x++)
            suma += valores[x];
        return suma;
    };
    return Operacion;
}());
var op;
op = new Operacion();
console.log(op.sumar(1, 2, 3));
