//alert("Un mensaje");
//document.write("Hellow World");
//document.write(3+5);

//let nombreUsuario = prompt("Ingrese su nombre de usuario");
//document.write(nombreUsuario)

// parseInt ('numero') = se transforma a formato entero

//let numero1 = parseInt(prompt("Ingrese un primer numero"));
//let numero2 = parseInt(prompt("Ingrese un segundo numero"));
//
//console.log(numero1);
//console.log(numero1 + numero2);
//document.write("El resultado de la suma es <br>" + (numero1 + numero2));

// Ejercicio numero 6 Practico ejercicios JS

//let numero1 = parseInt(prompt("Ingrese un primer numero"));
//let numero2 = parseInt(prompt("Ingrese un segundo numero"));
//
//if (numero1 > numero2) {
//  document.write("La variable numero 1 es mayor " + numero1);
//} else {
//  document.write("La variable numero 2 es mayor " + numero2);
//

// Ejercicio numero 7 forma A

//let numero1 = parseInt(prompt("Ingrese un primer numero"));
//let numero2 = parseInt(prompt("Ingrese un segundo numero"));
//let numero3 = parseInt(prompt("Ingrese un tercer numero"));
//
//if (numero1 > numero2) {
//  if (numero1 > numero3) {
//    document.write("El primer valor es el mayor " + numero1);
//  } else {
//    document.write("El tercer valor es el mayor " + numero3);
//  }
//} else {
//  if (numero2 > numero3) {
//    document.write("El segundo valor es el mayor " + numero2);
//  } else {
//    document.write("El tercer varlor es el mayor " + numero3);
//  }
//}

// Ejercicio numero 7 forma B utiliza y reduce el codigo

//let numero1 = parseInt(prompt("Ingrese un primer numero"));
//let numero2 = parseInt(prompt("Ingrese un segundo numero"));
//let numero3 = parseInt(prompt("Ingrese un tercer numero"));
//
//if (numero1 > numero2 && numero1 > numero3) {
//  document.write("El primer valor es el mayor " + numero1);
//} else {
//  if (numero2 > numero3) {
//    document.write("El segundo valor es el mayor " + numero2);
//  } else {
//    document.write("El tercer varlor es el mayor " + numero3);
//  }
//}

//Ejercicio numero 8
//
//let numero1 = parseInt(
//  prompt("Ingrese un numero para saber si es divisible por dos")
//);
//
//if (numero1 % 2 == 0) {
//  document.write("El numero " + numero1 + " es divisible por 2");
//} else {
//  document.write("El numero " + numero1 + " no es divisible por 2");
//}

//Ejercicio numero 10
//
//let numero1 = parseInt(
//  prompt("Ingrese un numero para saber si es divisible por 3")
//);
//
//if (numero1 % 3 == 0) {
//  document.write("El numero " + numero1 + " es divisible por 3");
//} else {
//  document.write("El numero " + numero1 + " no es divisible por 3");
//}

//Ejercicio numero 11
//
//let numero1 = parseInt(
//  prompt("Ingrese un numero")
//);
//
//if (numero1 % 2 == 0 && numero1 % 3 !=) {
//  document.write("El numero " + numero1 + " es divisible por 3");
//} else {
//  document.write("El numero " + numero1 + " no es divisible por 3");
//}

//Ejercicio numero 9
let frase = prompt("Ingrese una frase");
// hola mundo
console.log(frase);
frase = frase.toLowerCase();
console.log(frase.length);

// tomar un caracter variable.charAt (indice)
// preguntar si es vocal
// si es vocal lo muestro sino no hago nada

for (let vocal = 0; vocal < frase.length; vocal++) {
  console.log(frase.charAt(vocal));
  if (
    frase.charAt(vocal) == "a" ||
    frase.charAt(vocal) == "e" ||
    frase.charAt(vocal) == "i" ||
    frase.charAt(vocal) == "o" ||
    frase.charAt(vocal) == "u"
  ) {
    document.write(frase.charAt(vocal));
  }
}
