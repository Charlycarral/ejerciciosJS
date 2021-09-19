//Arrays
//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
//Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
//
//let meses = [
//  "Enero",
//  "Febrero",
//  "Marzo",
//  "Abril",
//  "Mayo",
//  "Junio",
//  "Julio",
//  "Agosto",
//  "Setiembre",
//  "Octubre",
//  "Noviembre",
//  "Diciembre",
//];
//
//for (let posicion = 0; posicion < meses.length; posicion++) {
//  document.write("<br> Mes de " + meses[posicion]);
//}
//
//
//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
//cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado,
//luego realizar las siguientes acciones:
//
//Mostrar la longitud del arreglo.
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
//Añade en última posición la ciudad de París.
//Escribe por pantalla el elemento que ocupa la segunda posición.
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// let arrayCiudades = [];

// do {
//   let ciudadesUsuario = prompt("Ingrese nombre de ciudades");
//   arrayCiudades.push(ciudadesUsuario);
// } while (confirm("¿Desea Ingresar alguna ciudad mas?"));

// document.write("Listado de ciudades tipeadas por el usuario: <br> ");
// for (elemento = 0; elemento < arrayCiudades.length; elemento++) {
//   document.write(
//     "Ciudad " + (elemento + 1) + ": " + arrayCiudades[elemento] + "<br>"
//   );
// }

// document.write("Longitud del Arreglo :" + arrayCiudades.length + "<br>");

// document.write("Elemento en primer posicion: " + arrayCiudades[0] + "<br>");
// document.write("Elemento en tercer posicion: " + arrayCiudades[2] + "<br>");
// document.write(
//   "Elemento en primer posicion: " +
//     arrayCiudades[arrayCiudades.length - 1] +
//     "<br>"
// );

// arrayCiudades.push("París");

// console.log(arrayCiudades[1]);

// arrayCiudades.splice(1, 1, "Barcelona");

// console.log(arrayCiudades[1]);

// 3- Escribir un script que simule el lanzamiento de dos dados.
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos
// de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
// repitiendo 50 veces esta operación.

//Completar

let arrayDados = [];
let sumaDados = 0;
let dadoUno = 0;
let dadoDos = 0;

let tirarDados = () => {
  let dadoUno = parseInt(6 * Math.random() + 1);
  console.log(dadoUno);
  return dadoUno
  let dadoDos = parseInt(6 * Math.random() + 1);
  console.log(dadoDos);
  return dadoDos
  return sumaDados
};
tirarDados();
let sumaDados = (dadoUno + dadoDos)
console.log(sumaDados)



// for (tirada=0; tirada < 0; tirada++){
// tirarDados ();
// if ()


// }


// for (tirada=0; tirada <= 50; tirada++) {
//     tirarDados ();
//     if (sumaDados ==  )
// }

// for (tirada = 0; tirada <= 50; tirada++);
// {
//   let sumaDados = dadoUno + dadoDos;

//   arrayDados.push(sumaDados);
// }

// console.log(sumaDados);

// Funciones

// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y
// devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.

// function numero(numeroUsuario) {
//   if (numeroUsuario % 2 == 0) {
//     alert("El numero seleccionado por el usuario es Par");
//   } else {
//     alert("El numero seleccionado por el usuario es Impar");
//   }
// }

// numero(prompt("Ingrese un numero"))

// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
// sólo por minúsculas o por una mezcla de ambas.

// function textoParametro(texto) {
//   if (texto == texto.toUpperCase()) {
//     alert("El texto " + texto + " esta formado por Mayusculas");
//   } else if (texto == texto.toLowerCase()) {
//     alert("El texto " + texto + " esta formado por Minusculas");
//   } else {
//     alert("El texto " + texto + " tiene Mayusculas y Minusculas");
//   }
// }

// textoParametro(prompt("Ingrese un texto"));

// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)

// let ladoA = parseInt(prompt("Ingrese el valor del lado A de un rectangulo"));
// let ladoB = parseInt(prompt("Ingrese el valor del lado B de un rectangulo"));

// function valorPerimetro() {
//   let perimetro = 2 * (ladoA + ladoB);
//   document.write("El perimetro del rectangulo es " + perimetro);
// }

// valorPerimetro();

// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10
// del número elegido por el usuario.

// let numero = prompt("Ingrese un numero");

// function tablaMultiplicar() {
//   for (elemento = 1; elemento <= 10; elemento++) {
//     document.write(
//       numero + " x " + elemento + " = " + numero * elemento + "<br>"
//     );
//   }
// }

// document.write("Tabla de Multiplicar del "+ numero + '<br>');
// tablaMultiplicar();
