//Ejercicio 1
// Escribir un programa que muestre la edad y si es mayor de 18 años mostar un mensaje que ya puede conducir
// si la edad ingresada no es un numero valido indicarlo en un mensaje.

//let edad = parseInt(prompt("Ingrese su edad"));
//if (edad >= 18) {
//  console.log("Su edad es de " + edad + ". Ya puede conducir");
//} else if (edad < 18) {
//
//} else {
//  console.log("La edad ingresada no es un numero valido");
//}

//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert
//según los siguientes rangos de nota:
//
//0-2: Muy deficiente
//3-4: Insuficiente
//5-6: Suficiente
//7: Bien
//8-9: Notable
//10: Sobresaliente
//
//Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
//Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.

//Primera solucion  al parecer erronea porque no puede ingresar como case algo distinto a una sentencia ===
//let nota = parseInt(prompt("Ingrese su calificación"));
//
//switch (nota) {
//  case 0:
//    alert("Su nota es muy deficiente");
//    break;
//  case 1:
//    alert("Su nota es muy deficiente");
//    break;
//  case 2:
//    alert("Su nota es muy deficiente");
//    break;
//  case 3:
//    alert("Su nota es insuficiente");
//    break;
//  case 4:
//    alert("Su nota es insuficiente");
//    break;
//  case 5:
//    alert("Su nota es suficiente");
//    break;
//  case 6:
//    alert("Su nota es suficiente");
//    break;
//  case 7:
//    alert("Su nota es bien");
//    break;
//  case 8:
//}

//let nota = parseInt(prompt("Ingrese su calificación"));
//
//if (nota >= 0 && nota <= 2) {
//  alert("Su nota es muy deficiente");
//} else if (nota >= 3 && nota <= 4) {
//  alert("Su nota es insuficiente");
//} else if (nota >= 5 && nota <= 6) {
//  alert("Su nota es suficiente");
//} else if (nota == 7) {
//  alert("Su nota califica como bien");
//} else if (nota >= 8 && nota <= 9) {
//  alert("Su nota es notable");
//} else if (nota == 10) {
//  alert("Su nota es sobresaliente");
//} else if (nota > 10) {
//  alert("número erróneo");
//} else {
//  alert("Introduce un número válido");
//}

//Ejercicio numero 4
//Realiza un script que pida números hasta que se pulse “cancelar”.
//Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
//Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

//let numero = parseInt(prompt('Ingrese un numero'))
//while (numero > 0) {
//numero =
//}

//Ejercicio numero 5
//Realizar una página con un script que calcule el valor de la letra de un número de DNI
//(Documento nacional de identidad).
//
//El algoritmo para calcular la letra del dni es el siguiente :
//
//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
//(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

//let numeroDni = prompt("Ingrese un numero de DNI");
//if (numeroDni >= 0 && numeroDni <= 99999999) {
//  let resultadoDni = numeroDni % 23;
//
//  switch (resultadoDni) {
//    case 0:
//      letra = "T";
//      break;
//    case 1:
//      letra = "R";
//      break;
//    case 2:
//      letra = "W";
//      break;
//    case 3:
//      letra = "A";
//      break;
//    case 4:
//      letra = "G";
//      break;
//    case 5:
//      letra = "M";
//      break;
//    case 6:
//      letra = "Y";
//      break;
//    case 7:
//      letra = "F";
//      break;
//    case 8:
//      letra = "P";
//      break;
//    case 9:
//      letra = "D";
//      break;
//    case 10:
//      letra = "X";
//      break;
//    case 11:
//      letra = "B";
//      break;
//    case 12:
//      letra = "N";
//      break;
//    case 13:
//      letra = "J";
//      break;
//    case 14:
//      letra = "Z";
//      break;
//    case 15:
//      letra = "S";
//      break;
//    case 16:
//      letra = "Q";
//      break;
//    case 17:
//      letra = "V";
//      break;
//    case 18:
//      letra = "H";
//      break;
//    case 19:
//      letra = "L";
//      break;
//    case 20:
//      letra = "C";
//      break;
//    case 21:
//      letra = "K";
//      break;
//    case 22:
//      letra = "E";
//      break;
//    default:
//      alert("El numero es erroneo");
//  }
//  document.write(
//    "Para el numero de DNI " +
//      numeroDni +
//      " la letra correspondiente es la  " +
//      letra
//  );
//} else {
//  alert("Ingrese un numero correcto");
//}

//Ejercicio numero 6

//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
//
//1
//22
//333
//4444
//55555
//666666
//…….

//let numero;
//let veces;
//
//for (numero = 1; numero <= 30; numero++) {
//  for (veces = 0; veces < numero; veces++) {
//    document.write(numero);
//  }
//  document.write("<br>");
//}

//Ejercicio numero 7
//Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario
//(no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
//
//303030303030303030303030303030303030303030303030303030303030
//2929292929292929292929292929292929292929292929292929292929
//28282828282828282828282828282828282828282828282828282828
//…..
//333
//22
//1

//let numeroUsuario = parseInt(prompt("Indique un número no mayor de 50"));
//let veces;
//let numero;
//
//if (numeroUsuario > 0 && numeroUsuario <= 50) {
//  for (numero = numeroUsuario; numero >= 1; numero--) {
//    for (veces = numero; veces >= 1; veces--) {
//      document.write(numero);
//    }
//    document.write("<br>");
//  }
//} else {
//  alert("Ingrese un numero correcto");
//}

//Ejercicio numero 8

//Crea script para generar pirámide siguiente con los números del 1
//al número que indique el usuario (no mayor de 50)

//let numeroUsuario = parseInt(prompt("Indique un número no mayor de 50"));
//let veces;
//let numero;
//
//if (numeroUsuario > 0 && numeroUsuario <= 50) {
//  for (numero = 0; numero <= numeroUsuario; numero++) {
//    for (veces = 1; veces <= numero; veces++) {
//      document.write(numero);
//    }
//
//    document.write("<br>");
//  }
//} else {
//  alert("Ingrese un numero correcto");
//}

////Ejercicio numero 9
//9- Crea un script que escriba los números del 1 al 500,
//que indique cuáles son múltiplos de 4 y de 9
//y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
//
//1
//2
//3
//4 (Múltiplo de 4)
//5-
//————————————————————-
//
//6
//7
//8 (Múltiplo de 4)
//9 (Múltiplo de 9)
//10

//for (numero = 1; numero <= 500; numero++) {
//  document.write(numero);
//  if (numero % 4 == 0) {
//    document.write(" (Multiplo de 4)");
//  }
//  if (numero % 9 == 0) {
//    document.write(" (Multiplo de 9)");
//  }
//  if (numero % 5 == 0) {
//    document.write("<hr>");
//  }
//  document.write("<br>");
//}

//Ejercicios con Math
//
//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

//let edad1 = parseInt(prompt("Ingrese la edad de la primer persona"));
//let nombre1 = prompt("Ingrese el nombre de la primer persona");
//let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona"));
//let nombre2 = prompt("Ingrese el nombre de la segunda persona");
//let edad3 = parseInt(prompt("Ingrese la edad de la tercer persona"));
//let nombre3 = prompt("Ingrese el nombre de la tercer persona");
//
//let edadMayor = Math.max(edad1, edad2, edad3);
//
//if (edadMayor === edad1) {
//  alert(nombre1 + " con " + edad1 + " años es la persona de mayor edad");
//}
//if (edadMayor === edad2) {
//  alert(nombre2 + " con " + edad2 + " años es la persona de mayor edad");
//}
//if (edadMayor === edad3) {
//  alert(nombre3 + " con " + edad3 + " años es la persona de mayor edad");
//} else {
//  alert("Ingrese una edad correcta");
//}

//Ejercicio numero 12
//Realiza un script que genere un número aleatorio entre 1 y 99

//let numero = Math.trunc(Math.random()*99);
//document.write(numero)

//Ejercicios con String
//
//Ejercicio 13
//Realiza un script que pida un texto y lo muestre en mayúsculas.
//
//let texto = prompt("Ingrese un texto");
//document.write("TEXTO EN MAYUSCULAS " + texto.toUpperCase);

//Ejercicio 14
//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo –
//entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”,
//deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

//let textoUsuario = prompt("Ingrese un texto");
//let numerocaracteres = textoUsuario.length;
//
//console.log(numerocaracteres);
//
//for (letra = 0; letra <= numerocaracteres; letra++) {
//    document.write(textoUsuario.charAt(letra) + "- ");
//}

//Ejercicio 15
//Realiza un script que cuente el número de vocales que tiene un texto.

//let textoUsuario = prompt("Ingrese un texto");
//let numeroCaracteres = textoUsuario.length;
//let numerodeVocales = 0;
//for (caracter = 0; caracter <= numeroCaracteres; caracter++) {
//  let letra = textoUsuario.charAt(caracter);
//  if (
//    letra == "a" ||
//    letra == "e" ||
//    letra == "i" ||
//    letra == "o" ||
//    letra == "u"
//  ) {
//    numerodeVocales++;
//  }
//}
//document.write("El numero de vocales del texto ingresado es " +numerodeVocales)

//Ejercicio numero 16
//Realiza un script que pida una cadena de texto y la devuelva al revés.
//Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

//let textoUsuario = prompt('Ingrese un texto');
//let numeroCaracteres = (textoUsuario.length);
//
//
//for (posicionLetra = numeroCaracteres; posicionLetra >= 0; posicionLetra--) {
//    letra = textoUsuario.charAt(posicionLetra);
//    document.write(letra)
//}

//Ejercicio numero 17
//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

//let textoUsuario = prompt("Ingrese un texto");
//let numeroCaracteres = textoUsuario.length;
//
//for (posicion = 0; posicion <= numeroCaracteres; posicion++) {
//  letra = textoUsuario.charAt(posicion);
//  if (
//    letra == "a" ||
//    letra == "e" ||
//    letra == "i" ||
//    letra == "o" ||
//    letra == "u"
//  ) {
//    document.write(
//      "La primer vocal en el texto ingresado esta en la posicion " + posicion
//    );
//    break
//  }
//}