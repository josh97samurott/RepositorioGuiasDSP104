class Articulo {

  readonly codigo: number;
  descripcion: string;
  precio: number;

  constructor(codigo:number, descripcion:string, precio:number) {
  this.codigo=codigo;
  this.descripcion=descripcion;
  this.precio=precio;
  }

  imprimir() {
    console.log(`Código:${this.codigo} Descripción:${this.descripcion} Precio:${this.precio}`);
    
  }

}
 
 let articulo1: Articulo;
 articulo1 = new Articulo(1,'papas',12.5);
articulo1.imprimir();
