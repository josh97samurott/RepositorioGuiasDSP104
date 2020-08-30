class Empleado{
    nombre:string;
    salario:number;

    constructor(_nombre?:string, _salario?:number){
        this.nombre = _nombre;
        this.salario = _salario;
    }

    deduccionesSalariales():number{
        /*4.5% de descuento de renta*/
        /*7.25% de descuento de AFP*/
        /*3% de descuento de ISSS*/
        /*Según los descuentos que aplican en la Universidad Don Bosco*/

        var renta:number = this.salario*0.045;
        var isss:number = this.salario*0.03;
        var afp:number = this.salario*0.0725;

        var total_ingreso:number = ((this.salario - renta) - isss) - afp;

        return total_ingreso;
    }
}

let empleado = new Empleado("Joshua Caleb Reyes", 600);

console.log("El nombre del empleado es: " + empleado.nombre);
console.log("El salario del empleado es: " + empleado.salario);
console.log("El total de ingreso despues de descuentos es: "+ empleado.deduccionesSalariales());
