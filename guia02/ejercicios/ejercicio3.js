var Empleado = /** @class */ (function () {
    function Empleado(_nombre, _salario) {
        this.nombre = _nombre;
        this.salario = _salario;
    }
    Empleado.prototype.deduccionesSalariales = function () {
        /*4.5% de descuento de renta*/
        /*7.25% de descuento de AFP*/
        /*3% de descuento de ISSS*/
        /*Según los descuentos que aplican en la Universidad Don Bosco*/
        var renta = this.salario * 0.045;
        var isss = this.salario * 0.03;
        var afp = this.salario * 0.0725;
        var total_ingreso = ((this.salario - renta) - isss) - afp;
        return total_ingreso;
    };
    return Empleado;
}());
var empleado = new Empleado("Joshua Caleb Reyes", 600);
console.log("El nombre del empleado es: " + empleado.nombre);
console.log("El salario del empleado es: " + empleado.salario);
console.log("El total de ingreso despues de descuentos es: " + empleado.deduccionesSalariales());
