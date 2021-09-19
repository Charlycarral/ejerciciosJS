// Clases, objetos y métodos.

// Crear objetos
// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca,
// modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// let auto = {
//   color: "blanco",
//   marca: "Fiat",
//   modelo: "Cronos",
//   encendido: false,
// };

// let encenderAuto = () => {
//     auto.encendido = true;
// console.log(`¿El auto marca ${auto.marca} modelo ${auto.modelo} color ${auto.color} esta encendido? ${auto.encendido}.`
//   );
// }

// let apagarAuto = () => {
//     auto.encendido = false;
// console.log(`¿El auto marca ${auto.marca} modelo ${auto.modelo} color ${auto.color} esta encendido? ${auto.encendido}.`
//   );
// }
// encenderAuto();
// apagarAuto();

// Cuenta bancaria
// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a 
// mostrar la descripción del estado de la cuenta.
 

// let cuenta = {
//     titular: 'Alex',
//     saldo: 0,
// }

// let ingresarSaldo = () => {
//          dinero = parseInt(prompt('Ingrese la cantidad de dinero que desea depositar'));
//          cuenta.saldo = (cuenta.saldo + dinero);
//          console.log(cuenta.saldo);

// }

// let retirarSaldo = () => {
//          dinero = parseInt(prompt('Ingrese la cantidad de dinero que desea retirar'));
//          cuenta.saldo = (cuenta.saldo - dinero);
//          console.log(cuenta.saldo);

// }

// let informarEstadoCuenta = () => {
//          document.write(`El saldo actual de la cuenta del titular ${cuenta.titular} es de ${cuenta.saldo}`)

// }

// ingresarSaldo();
// retirarSaldo();
// informarEstadoCuenta();