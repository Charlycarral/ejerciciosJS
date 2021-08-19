/*
if(condicion logica){
    codigo a ejecutar si se cumple la condicion
}
else{
    codigo a ejecutar si no se cumple la condicion
}
*/

let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

if (numero1 > numero2) {
  document.write("La variable numero 1 es mayor " + numero1);
} else if (numero2 > numero1) {
  document.write("La variable numero 2 es mayor " + numero2);
} else {
  document.write("Las variables son iguales " + numero1);
}
