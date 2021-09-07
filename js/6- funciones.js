// funciones
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
    "<br>El producto " + producto + "tiene el precio total $" + calculo
  );
}

// invocar o llamar a una funcion
aumentarPrecio();

let coeficienteInflacion = parseInt(  prompt("Ingrese el monto total de la inflacion del mes"));
actualizarPrecio(coeficienteInflacion, "Teclado hyperx ", 9000);
actualizarPrecio(coeficienteInflacion, "Teclado logitec ", 14000);
actualizarPrecio('mouse logitec', 9000, 100);
