class Persona {
  nombre: string;
  edad: number;
  constructor(nombre:string, edad:number) {
  this.nombre = nombre;
  this.edad = edad;
  }
  imprimir() {
  console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
  }
 }
 let persona1: Persona;
 persona1 = new Persona('Juan', 45);
 persona1.imprimir();
 