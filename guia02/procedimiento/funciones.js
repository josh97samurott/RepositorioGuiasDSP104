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
