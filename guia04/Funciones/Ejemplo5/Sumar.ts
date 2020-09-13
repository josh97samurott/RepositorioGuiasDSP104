function sumar(...valores: number[]) {
  
  let suma = 0;
  
  for(let x=0;x<valores.length;x++)
    suma += valores[x];
  
  return suma;
}
 
 console.log(sumar(10, 2, 44, 3));
 console.log(sumar(1, 2));
 console.log(sumar());
 