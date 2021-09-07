let resultado = [];
document.write("Arreglo de Peliculas: <br>");
do {
  let peliculas = prompt("Ingrese aqui su pelicula favorita");
  resultado.push(peliculas);
} while (confirm("¿Desea continuar?)"));

for (let posicion = 0; posicion < resultado.length; posicion++) {
  document.write("<br> Pelicula " + (posicion+1) + ": " + resultado[posicion]);
}
