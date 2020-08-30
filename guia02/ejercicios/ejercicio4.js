var Calculadora = /** @class */ (function () {
    function Calculadora(_numero1, _numero2) {
        this.numero1 = _numero1;
        this.numero2 = _numero2;
    }
    Calculadora.prototype.operacionesBasicas = function () {
        var suma;
        var resta;
        var multiplicacion;
        var division;
        suma = this.numero1 + this.numero2;
        console.log("La suma de los números es: " + suma);
        resta = this.numero1 - this.numero2;
        console.log("La resta de los números es: " + resta);
        multiplicacion = this.numero1 * this.numero2;
        console.log("La multiplicación de los números es: " + multiplicacion);
        if (this.numero2 != 0) {
            division = this.numero1 / this.numero2;
            console.log("La división de los números es: " + division);
        }
        else {
            console.log("La división de los números no se puede realizar, el número 2 tiene como valor 0");
        }
    };
    return Calculadora;
}());
var calcu = new Calculadora(6, 8);
calcu.operacionesBasicas();
