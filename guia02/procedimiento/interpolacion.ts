var a:string = "Uriel";

var b = `Saludos a ti ${a}`;

console.log(b);

function getSaludo():string{
    let emojis = '(¬▀_▀)';
    var first_name:string = "Joshua";
    var last_name:string = "Reyes";
    return `Saludos
        ${last_name}, ${first_name}
        Le enviamos un saludo desde la consola!
        ${emojis}
        `;
}

console.log(getSaludo());

