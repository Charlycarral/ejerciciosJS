//Arrays
//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
//Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

for (let posicion = 0; posicion < meses.length; posicion++) {
  document.write("<br> Mes de " + meses[posicion]);
}

