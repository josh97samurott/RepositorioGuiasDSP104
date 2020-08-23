class Persona{
    first_name:string;
    last_name:string;
    constructor(_first_name?:string, _last_name?:string){
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
}

let personaUno = new Persona();
let personaDos = new Persona("Joshua");
let personaTres = new Persona("Joshua", "Reyes");

console.log("Persona Uno: "+personaUno.first_name + " " + personaUno.last_name);
console.log("Persona Dos: "+personaDos.first_name + " " + personaDos.last_name);
console.log("Persona Tres: "+personaTres.first_name + " " + personaTres.last_name);

