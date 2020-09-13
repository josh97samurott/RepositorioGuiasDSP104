function operar(valor1: number, valor2: number, func: (x: number, y:number)=>number): number {
  return func(valor1, valor2);
}
 
 console.log(operar(3, 7, (x: number,y: number): number => {
  return x+y;
 }))

 console.log(operar(3, 7, (x: number,y: number): number => {
  return x-y;
 }))
 
 console.log(operar(3, 7, (x: number,y: number): number => {
  return x*y;
 }))
 