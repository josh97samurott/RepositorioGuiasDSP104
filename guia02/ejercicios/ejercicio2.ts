interface heroe{
  nombre: string,
  poderes:string[]
}

let spiderman:heroe = {
  nombre: "Peter Pan",
  poderes:["trepar","fuerza","agilidad","telas de araña"]
}

console.log(spiderman);
console.log(`Nombre del superhereo: ${spiderman.nombre}`);
console.log("Poderes:");
for (let key of spiderman.poderes) {
  
  console.log(key);
}
console.log(`Tipo de dato del nombre: ${typeof spiderman.nombre}`);
console.log(`Tipo de dato de los poderes: ${typeof spiderman.poderes}`);