function sumar(valor1:number, valor2:number, valor3?:number):number {
  if (valor3)
    return valor1+valor2+valor3;
  else
    return valor1+valor2;
}
console.log(sumar(5,4));
console.log(sumar(5,4,3));