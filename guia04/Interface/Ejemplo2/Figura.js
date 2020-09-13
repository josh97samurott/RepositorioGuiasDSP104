var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
        this.superficie = this.calcularSuperficie();
        this.perimetro = this.calcularPerimetro();
    }
    Cuadrado.prototype.calcularSuperficie = function () {
        return this.lado * this.lado;
    };
    Cuadrado.prototype.calcularPerimetro = function () {
        return this.lado * 4;
    };
    return Cuadrado;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ladoMayor, ladoMenor) {
        this.ladoMayor = ladoMayor;
        this.ladoMenor = ladoMenor;
        this.superficie = this.calcularSuperficie();
        this.perimetro = this.calcularPerimetro();
    }
    Rectangulo.prototype.calcularSuperficie = function () {
        return this.ladoMayor * this.ladoMenor;
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        return (this.ladoMayor * 2) + (this.ladoMenor * 2);
    };
    return Rectangulo;
}());
var cuadrado1;
cuadrado1 = new Cuadrado(10);
console.log("Perimetro del cuadrado : " + cuadrado1.calcularPerimetro());
console.log("Superficie del cuadrado : " + cuadrado1.calcularSuperficie());
var rectangulo1;
rectangulo1 = new Rectangulo(10, 5);
console.log("Perimetro del rectangulo : " + rectangulo1.calcularPerimetro());
console.log("Superficie del cuadrado : " + rectangulo1.calcularSuperficie());
