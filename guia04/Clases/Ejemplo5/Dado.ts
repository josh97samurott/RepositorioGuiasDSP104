class Dado {

  private valor: number;
  static tiradas: number = 0;
  
  tirar() {
  this.generar();
  }

  private generar() {
    this.valor = Math.floor(Math.random() * 6) + 1 ;
    Dado.tiradas++;
  }
  
    imprimir() {
    console.log(`Salió el valor ${this.valor}`);
  }
   
}

   let dado1=new Dado();
   dado1.tirar();
   dado1.imprimir();
   let dado2=new Dado();
   dado2.tirar();
   dado2.imprimir();
   console.log(`Cantidad de tiradas de dados:${Dado.tiradas}`); // 2