class Calculadora{
    numero1:number;
    numero2:number;

    constructor(_numero1?:number, _numero2?:number){
        this.numero1 = _numero1;
        this.numero2 = _numero2;
    }

    operacionesBasicas(){
        var suma:number;
        var resta:number;
        var multiplicacion:number;
        var division:number;

        suma = this.numero1 + this.numero2;
        console.log("La suma de los números es: " + suma);

        resta = this.numero1 - this.numero2;
        console.log("La resta de los números es: " + resta);

        multiplicacion = this.numero1 * this.numero2;
        console.log("La multiplicación de los números es: " + multiplicacion);

        if(this.numero2 != 0){
            division = this.numero1 / this.numero2;
            console.log("La división de los números es: " + division);
        }
        else{
            console.log("La división de los números no se puede realizar, el número 2 tiene como valor 0");
        }
    }
}


let calcu = new Calculadora(6, 8);
calcu.operacionesBasicas();