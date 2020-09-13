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
function imprimir(fig) {
    console.log("Perimetro: " + fig.calcularPerimetro());
    console.log("Superficie: " + fig.calcularSuperficie());
}
var cuadrado1;
cuadrado1 = new Cuadrado(10);
console.log('Datos del cuadrado');
imprimir(cuadrado1);
var rectangulo1;
rectangulo1 = new Rectangulo(10, 5);
console.log('Datos del rectángulo');
imprimir(rectangulo1);
