function hello():void{
    console.log("Void: No retorno nada");
}

function setName(name:string):void{
    console.log("Void con parametro: No retorno nada y recibo un nombre -> "+name);
}

function setName2(name:string, surName:string):string{
    return "Función string con parametros: Retorna cadenas de texto -> "+ name + " " + surName;
}

function usoDeVariablesInternas(name:string):string{
    var variableinterna:string = "uriel";
    return "Uso de variables internas -> " + name;
}

hello();

setName("Joshua");

console.log(setName2("Samuel", "Rodríguez"));

console.log(usoDeVariablesInternas("Joshua"));



