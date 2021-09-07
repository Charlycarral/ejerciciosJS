// funciones sin parametros
function aumentarPrecio() {
  console.log("prueba");
  let disney = 385;
  let inflacion = 150;
  document.write(
    "Valor total del servicio disney plus $" + (disney + inflacion)
  );
}

// funcion con parametros
function actualizarPrecio(monto, producto, precio) {
  let calculo = precio + monto;
  document.write(
    "<br>El producto " + producto + " tiene el precio total $" + calculo
  );
}

// funciones que devuelve un valor
// function convertirDolaresPesos(precioDolar){
//   let total = precioDolar * 184;
//   return total
//   // jamas escribimos en esta zona, la linea de return es la ultima que se ejecuta
// }

// funciones en forma de flecha =>
let convertirDolaresPesos = (precioDolar) => {
  let total = precioDolar * 184;
  return total;
};

let monto = convertirDolaresPesos;

// invocar o llamar a una funcion
aumentarPrecio();

let coeficienteInflacion = parseInt(
  prompt("Ingrese el monto total de la inflacion del mes")
);
actualizarPrecio(coeficienteInflacion, "Teclado hyperx ", 9000);
actualizarPrecio(coeficienteInflacion, "Teclado logitec ", 14000);
actualizarPrecio(" mouse logitec ", 9000, 100);

let dolarBlue = parseInt(prompt("Ingrese el valor del dolar Blue"));
let iphone = convertirDolaresPesos(1200);

document.write(`<br> Producto Iphone - Precio $ ${iphone} (producto nuevo)`);
document.write(
  `<br> Producto PSS - Precio $ ${convertirDolaresPesos(500)} (producto nuevo)`
);

// document.write('<br> Producto Iphone - Precio $' + iphone + '(producto nuevo)');
