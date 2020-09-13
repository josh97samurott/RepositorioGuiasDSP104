class Dado {
  private valor: number;

   tirar() {
  this.generar();
  }

  private generar() {
  this.valor = Math.floor(Math.random() * 6) + 1 ;
  }
  
   imprimir() {
  console.log(`Salió el valor ${this.valor}`);
  }
 }
 let dado1=new Dado();
dado1.tirar();
dado1.imprimir();
