var Persona = /** @class */ (function () {
    function Persona(_first_name, _last_name) {
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    return Persona;
}());
var personaUno = new Persona();
var personaDos = new Persona("Joshua");
var personaTres = new Persona("Joshua", "Reyes");
console.log("Persona Uno: " + personaUno.first_name + " " + personaUno.last_name);
console.log("Persona Dos: " + personaDos.first_name + " " + personaDos.last_name);
console.log("Persona Tres: " + personaTres.first_name + " " + personaTres.last_name);
