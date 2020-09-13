class Persona {

  constructor(public nombre: string, public edad: number) { 
    
  }

  imprimir() {
  console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
  }
  
}
 
 let persona1: Persona;
 persona1 = new Persona('Juan', 45);
 persona1.imprimir();
 