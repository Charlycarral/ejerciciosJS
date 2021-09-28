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

// Rectángulos
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho,
// mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

// class Rectangulo {
//   constructor(paramAlto, paramAncho) {
//     this.alto = paramAlto;
//     this.ancho = paramAncho;
//   }

//   get mostrarAncho() {
//     return this.ancho;
//   }
//   get mostrarAlto() {
//     return this.ancho;
//   }

//   set modificarAlto(nuevoAlto) {
//     this.alto = nuevoAlto;
//   }
//   set modificarAncho(nuevoAncho) {
//     this.ancho = nuevoAncho;
//   }

//   mostrarParametros() {
//     document.write(`<br>Alto: ${this.alto}<br>Ancho: ${this.ancho} `);
//   }
//   calcularPerimetro() {
//     let perimetro = (this.alto * 2 + this.ancho * 2);
//     document.write(`<br>El Perimetro del rectangulo es de : ${perimetro} mtrs`);

//   }
//   calcularArea() {
//     let area = (this.alto * this.ancho);
//     document.write(`<br>El Area del rectangulo es de: ${area} m2`);
//   }
// }

// let rectanguloA = new Rectangulo(2, 4);

// rectanguloA.mostrarParametros();
// rectanguloA.calcularPerimetro();
// rectanguloA.calcularArea();

// Producto
// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
// nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

// class Producto {
//   constructor(paramCodigo, paramNombre, paramPrecio) {
//     this.codigo = paramCodigo;
//     this.nombre = paramNombre;
//     this.precio = paramPrecio;
//   }

//   imprimeDatos() {
//     console.log(
//       `Codigo: ${this.codigo} Nombre: ${this.nombre} $ ${this.precio}`
//     );
//   }

//   get mostrarCodigo() {
//     return this.codigo;
//   }

//   get mostrarNombre() {
//     return this.nombre;
//   }

//   get mostrarPrecio() {
//     return this.precio;
//   }

//   set modificarCodigo(nuevoCodigo) {
//     this.codigo = nuevoCodigo;
//   }
//   set modificarNombre(nuevoNombre) {
//     this.nombre = nuevoNombre;
//   }
//   set modificarPrecio(nuevoPrecio) {
//     this.precio = nuevoPrecio;
//   }
// }

// let arrayProducto = [];

// // creamos las tres instancias de producto

// let remera = new Producto(10201, "Remera Nike", 2500);
// arrayProducto.push(remera);

// let pantalonCorto = new Producto(10203, "Pantalon Corto Adidas", 1350);
// arrayProducto.push(pantalonCorto);

// let mediasFutbol = new Producto(10300, "Medias Futbol Nike", 1000);
// arrayProducto.push(mediasFutbol);

// // creamo el bucle para mostrar el Array producto

// let contador;
// for (contador = 0; contador < arrayProducto.length; contador++) {
//   arrayProducto[contador].imprimeDatos();
// }

// Generaciones
// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
// Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona
// creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

// class Persona {
//   constructor(nombre, edad, dni, sexo, peso, altura, anoDeNacimiento) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.dni = dni;
//     this.sexo = sexo;
//     this.peso = peso;
//     this.altura = altura;
//     this.anoDeNacimiento = anoDeNacimiento;
//   }

//   mostrarGeneracion() {
//     let anoNacimiento = this.anoDeNacimiento;
//     if (anoNacimiento <= 1948) {
//       document.write(
//         `<br> Esta persona pertenece a la generacion Silen Generation cuyo rasgo Caracteristico es la Auteridad`
//       );
//     } else if (anoNacimiento >= 1949 && anoNacimiento <= 1968) {
//       document.write(
//         `<br> Esta persona pertenece a la generacion Baby Boom cuyo rasgo Caracteristico es la Ambición`
//       );
//     } else if (anoNacimiento >= 1969 && anoNacimiento <= 1980) {
//       document.write(
//         `<br> Esta persona pertenece a la generacion X cuyo rasgo Caracteristico es la Obseción por el éxito`
//       );
//     } else if (anoNacimiento >= 1981 && anoNacimiento <= 1993) {
//       document.write(
//         `<br> Esta persona pertenece a la generacion Y cuyo rasgo Caracteristico es la Frustración`
//       );
//     } else if (anoNacimiento >= 1994 && anoNacimiento <= 2010) {
//       document.write(
//         `<br> Esta persona pertenece a la generacion Y cuyo rasgo Caracteristico es la Irreverencia`
//       );
//     } else {
//       document.write(
//         `<br> El año de nacimiento de esta persona no esta Categorizado`
//       );
//     }
//   }

//   esMayorDeEdad() {
//     let edadPersona = this.edad;

//     if (edadPersona >= 18) {
//       document.write(`<br> Esta persona es Mayor de Edad`);
//     } else {
//       document.write(`<br> Esta persona es Menor de Edad`);
//     }
//   }

//   mostrarDatos() {
//     document.write(
//       `<br>Nombre: ${this.nombre} <br>Edad: ${this.edad}<br>Sexo: ${this.sexo}<br>Peso: ${this.peso} kg<br>Altura ${this.altura} cm<br>Año de nacimiento: ${this.anoDeNacimiento}  `
//     );
//   }

//   generaDNI() {
//     let numeroDni = Math.floor(Math.random() * 99999999);
//     document.write(`<br>Número de Dni Aleatorio: ${numeroDni}`);
//   }
// }

// let carlos = new Persona("Carlos", 35, 32169525, "Masculino", 100, 180, 1986);

// carlos.mostrarDatos();
// carlos.mostrarGeneracion();
// carlos.esMayorDeEdad();
// carlos.generaDNI();

// Libros
// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad.
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

// class Libros {
//   constructor(isbn, titulo, autor, numerodePaginas) {
//     this.isbn = isbn;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.numerodePaginas = numerodePaginas;
//   }

//   get mostrarIsbn() {
//     return this.isbn;
//   }

//   get mostratTitulo() {
//     return this.titulo;
//   }
//   get mostrarAutor() {
//     return this.autor;
//   }
//   get mostrarNumerodePaginas() {
//     return this.numerodePaginas;
//   }

//   set modificarIsbn(nuevoIsbn) {
//     this.isbn = nuevoIsbn;
//   }

//   set modificarTitulo(nuevoTitulo) {
//     this.titulo = nuevoTitulo;
//   }
//   set modificarAutor(nuevoAutor) {
//     this.autor = nuevoAutor;
//   }
//   set modificarNumerodePaginas(nuevoNumerodePaginas) {
//     this.numerodePaginas = nuevoNumerodePaginas;
//   }

//   mostrarLibro() {
//     document.write(
//       `El libro "${this.titulo}" con ISBN ${this.mostrarIsbn} creado por el autor ${this.mostrarAutor} tiene páginas ${this.mostrarNumerodePaginas} <br>`
//     );
//   }
// }

// let theLordoftheRings = new Libros(
//   9780261103689,
//   "The Lord of the Rings",
//   "Tolkien, J. R. R.",
//   950
// );

// let strangerinaStrangeLand = new Libros(
//   9780399107726,
//   "Stranger in a Strange Land",
//   "Heinlein, Robert A.",
//   820
// );
// // mostramos los libros
// theLordoftheRings.mostrarLibro();
// strangerinaStrangeLand.mostrarLibro();

// // Buscamos cual es el libro con mayor numero de paginas
// if (
//   theLordoftheRings.mostrarNumerodePaginas >
//   strangerinaStrangeLand.mostrarNumerodePaginas
// ) {
//   document.write(
//     `El libro con mayor numero de paginas es "${theLordoftheRings.mostratTitulo}"`
//   );
// } else {
//   document.write(
//     `El libro con mayor numero de paginas es "${strangerinaStrangeLand.mostratTitulo}"`
//   );
// }

// Agenda telefónica

// Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. 
// Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. 
// Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.
