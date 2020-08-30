"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("Mi mensaje");
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numberArray = [123, 123, 1213, 1231];
console.log(skills);
console.log(numberArray);
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hey " + this.greeting;
    };
    __decorate([
        enumerable(false)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("Soy el mensaje");
console.log(gree.greet());
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 5] = "Employee";
    ROLE[ROLE["Manager"] = 4] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 1] = "Developer";
})(ROLE || (ROLE = {}));
var role = ROLE.Employee;
console.log(role);
function hello() {
    console.log("Void: No retorno nada");
}
function setName(name) {
    console.log("Void con parametro: No retorno nada y recibo un nombre -> " + name);
}
function setName2(name, surName) {
    return "Función string con parametros: Retorna cadenas de texto -> " + name + " " + surName;
}
function usoDeVariablesInternas(name) {
    var variableinterna = "uriel";
    return "Uso de variables internas -> " + name;
}
hello();
setName("Joshua");
console.log(setName2("Samuel", "Rodríguez"));
console.log(usoDeVariablesInternas("Joshua"));
var persona = {
    first_name: 'Jorge',
    last_name: 'Cano',
    twitter_account: '@jorgeucano'
};
console.log(persona);
var a = "Uriel";
var b = "Saludos a ti " + a;
console.log(b);
function getSaludo() {
    var emojis = '(¬▀_▀)';
    var first_name = "Joshua";
    var last_name = "Reyes";
    return "Saludos\n        " + last_name + ", " + first_name + "\n        Le enviamos un saludo desde la consola!\n        " + emojis + "\n        ";
}
console.log(getSaludo());
var Persona = (function () {
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
var Person = (function () {
    function Person() {
        this.first_name = "Jor";
        this.last_name = "Ca";
        this.twitter_user = "@jorgeucano";
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.first_name = "Jorge";
myPerson.setLastName("Cano");
console.log(myPerson);
var full_nombre = "jorge cano";
var age = 27;
var developer = true;
console.log(full_nombre);
console.log(age);
console.log(developer);
//# sourceMappingURL=tsc.js.map