var Dado = /** @class */ (function () {
    function Dado() {
    }
    Dado.prototype.tirar = function () {
        this.generar();
    };
    Dado.prototype.generar = function () {
        this.valor = Math.floor(Math.random() * 6) + 1;
    };
    Dado.prototype.imprimir = function () {
        console.log("Sali\u00F3 el valor " + this.valor);
    };
    return Dado;
}());
var dado1 = new Dado();
dado1.tirar();
dado1.imprimir();
