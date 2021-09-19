let mostraObjeto = (seriesParametro) => {
  // obtener todas las claves de un objeto como si fuera un arreglo
  let claves = Object.keys(seriesParametro);
  console.log(claves); //['nombre', 'temporadas', 'capitulos', 'premios']
  for (let i = 0; i < claves.length; i++) {
    let propiedad = claves[i]; //'nombre'
    //document.write(`^<br>${propiedad}: ${serieParametro[propiedad]}`)
    document.write(`<br>${propiedad}: ${seriesParametro[propiedad]}`);
    // serieParametro[clave[i]]
  }
};

// let nombre = "the office";
// let temporadas = 9;
// let genero = "sitcom";
// let capitulos = 27;

// crear un objeto con notacion literal

let serie = {
  nombre: "the office",
  temporadas: 9,
  genero: "sitcom",
  capitulos: 27,
};

// mostrar una propíedad de un objeto
document.write(`Serie: ${serie.nombre}`);
document.write(`<br>Capitulos: ${serie.capitulos}`);

// mostrar una propiedad de un objeto metodo dos
document.write(`<br>Temporadas: ${serie["temporadas"]}`);
console.log(serie);

//modificar una propiedad de un objeto
serie.temporadas = 10;
document.write(`<br>Temporadas: ${serie["temporadas"]}`);

//agregar una nueva propiedad a un objeto
serie.premios = true;
document.write(`<br> Premios: ${serie.premios}`);

//borrar una propiedad de un objeto
delete serie.genero;
console.log(serie);

// llamamos a la funcion
mostraObjeto(serie);
