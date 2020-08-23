var spiderman = {
    nombre: "Peter Pan",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
console.log(spiderman);
console.log("Nombre del superhereo: " + spiderman.nombre);
console.log("Poderes:");
for (var _i = 0, _a = spiderman.poderes; _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
console.log("Tipo de dato del nombre: " + typeof spiderman.nombre);
console.log("Tipo de dato de los poderes: " + typeof spiderman.poderes);
