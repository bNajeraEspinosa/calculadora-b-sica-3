"use strict"
//calculadora simple
console.log("hola esta es una calculadora simple");
console.log("para usarla nececito que pongas los sig comandos:");
console.log('');
console.log('*=*=*=*=*=*=*=*=*=*=*');
console.log("suma(numero1,numero2)");
console.log('ej: suma(1,2)');
console.log('');
console.log('*=*=*=*=*=*=*=*=*=*=*');
console.log("resta(numero1,numero2)");
console.log('ej: resta(1,2)');
console.log('');
console.log('*=*=*=*=*=*=*=*=*=*=*');
console.log("multiplicacion(numero1,numero2)");
console.log('ej: multiplicacion(1,2)');
console.log('');
console.log('*=*=*=*=*=*=*=*=*=*=*');
console.log("division(numero1,numero2)");
console.log('ej: division(1,2)');
console.log('');
console.log('*=*=*=*=*=*=*=*=*=*=*');
console.log('al final oprime enter y saldra tu numero');

//suma
suma()
function suma(num1, num2) {
  let sum = num1 + num2;
  return sum;
  console.log(sum);
}
//resta
resta()
function resta(num1, num2) {
  let res = num1 - num2;
  return res;
  console.log(res);
}
//mult
multiplicacion()
function multiplicacion(num1, num2) {
  let mult = num1 * num2;
  return mult;
  console.log(mult);
}
//div
division()
function division(num1, num2) {
  let div = num1 / num2;
  return div;
  console.log(div);
}
//div2
division2()
function division2(num1, num2) {
  let div2 = num1 % num2;
  return div2;
  console.log(div2);
}
