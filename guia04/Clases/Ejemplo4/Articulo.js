var Articulo = /** @class */ (function () {
    function Articulo(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    Articulo.prototype.imprimir = function () {
        console.log("C\u00F3digo:" + this.codigo + " Descripci\u00F3n:" + this.descripcion + " Precio:" + this.precio);
    };
    return Articulo;
}());
var articulo1;
articulo1 = new Articulo(1, 'papas', 12.5);
articulo1.imprimir();
