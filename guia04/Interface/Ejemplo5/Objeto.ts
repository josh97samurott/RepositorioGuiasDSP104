interface Punto {
  x: number;
  y: number;
  z?: number;
}
 
 let puntoPlano: Punto = {x:10, y:20};
 console.log(puntoPlano);
 let puntoEspacio: Punto = {x:10, y:20, z:70};
 console.log(puntoEspacio);