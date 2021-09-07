let anime = "Dragon Ball Z";

//crear o inicializar un arreglo[]

let series = ["Dragon Ball", "Naruto", "Evangelion 3.0+1", anime, 15, true];

// crar un arreglo vacio
let temporadas = [];

// cuando quiero acceder a un elemento del arreglo nombrearreglo[posicion]
document.write("Series " + series[3]);

// agregar un elemento al final del arreglo
series.push("Loky");
series.push("Breaking Bad");

console.log(series[6]);

// para saber la cantidad de elementos que tiene el arreglo lenght
console.log(series.length);
console.log(temporadas.length);

let seriesUsuario = prompt("Ingrese una serie");
series.push(seriesUsuario);
console.log(series.length);

// mostrar todos los elementos del arreglo
mostrarSeries();

// modificar un elemento del arreglo
series[4] = "The office";

mostrarSeries();

// agregar elemento en posicion en particular
series.splice(0, 0, "one piece");

mostrarSeries();

// agregar otro elemento
series.splice(3,0,'Sword art online');
// splice(posicion, elementos a borrar a partir de la posicion anterior, )

mostrarSeries();

// eliminar elementos de un arreglo
series.splice(7,1);
// splice(posicion, elementos a borrar)

mostrarSeries();

// eliminar todos los elementos a partir de tal posicion
series.splice(3);

mostrarSeries();

// crear funcion que muestre los elementos del arreglo
function mostrarSeries(){
  document.write("<br>");
for (let posicion = 0; posicion < series.length; posicion++) {
  document.write("<br>Serie " + series[posicion]);
}
}