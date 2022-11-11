//declaramos el array
let array=[9,8,6,3,2,3,5,44];
let Max=0;

//con esto tamaño es igual al numero de espacios del array osea 8 en otras palabras tamaño es igual a 8.
let tamaño=array.length

//algoritmo

//EN EL FOR VAMOS A HACER UN BARRIDO DEL ARRAY
for (let i=0;i < tamaño; i++) {
  //SI ARRAY [NUMERO QUE ESTA] ES MENOR QUE MAX.
  //si(array[i=0])>MAX = 0);
  if(array[i] > Max) {
  //MAX=0
  //MAX = EL NUMERO QUE SE CONTO ARRIBA.
    Max = array[i];
  /*EJEMPLO 
  SI(ARRAY[44]>MAX = 0)
  MAX= ARRAY[44];<---MAX = 44
  SI(ARRAY[8]>MAX=9)
  NO CUMPLE LA CONDICIÓN ASÍ QUE 
  MAX = 44
  SI(ARRAY[6]>MAX=44)
  NO CUMPLE LA CONDICIÓN ASÍ QUE 
  MAX = 44
  ASÍ HACE EL BARRIDO Y POR ENDE EL 9 ES EL MAYOR
  */
  }
}
console.log(Max);