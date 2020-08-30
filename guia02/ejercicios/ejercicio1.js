var Rombo = /** @class */ (function () {
    function Rombo(Dvertical, Dhorizontal) {
        this.DiagonaVertical = Dvertical;
        this.DiagonalHorizontal = Dhorizontal;
    }
    Rombo.prototype.area = function () {
        var resultado = this.DiagonaVertical * this.DiagonalHorizontal;
        return resultado;
    };
    return Rombo;
}());
var rombo = new Rombo(5, 4);
var respuesta = rombo.area();
console.log("El area del rombo es: " + respuesta);
