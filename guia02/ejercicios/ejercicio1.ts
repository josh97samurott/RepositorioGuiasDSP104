class Rombo{
  DiagonaVertical: number;
  DiagonalHorizontal: number;

  constructor(Dvertical: number, Dhorizontal: number) {
    this.DiagonaVertical = Dvertical;
    this.DiagonalHorizontal = Dhorizontal;
  }

  area():number {
    let resultado = this.DiagonaVertical * this.DiagonalHorizontal;
    return resultado;
  }
}

const rombo: Rombo = new Rombo(5, 4);
let respuesta: number = rombo.area();
console.log(`El area del rombo es: ${respuesta}`);