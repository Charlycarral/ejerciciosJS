//Persona -> nombre, apellido, dni, usuario, pass, comision,
//Alumno-> nombre, apellido, dni, usuario, pass, comision, curso, legajo,
//Tutor-> nombre, apellido, dni, usuario, pass, comision, id, antiguedad,

class Persona {
  constructor(
    paramNombre,
    paramApellido,
    paramDni,
    paramUsuario,
    paramPass,
    paramComision
  ) {
    this.nombre = paramNombre;
    this.apellido = paramApellido;
    this.dni = paramDni;
    this.usuario = paramUsuario;
    this.pass = paramPass;
    this.comision = paramComision;
  }

  mostrarDatos() {
    document.write(`<br>Nombre: ${this.nombre} 
        <br>Apellido: ${this.apellido}
        <br>Dni: ${this.dni}
        <br>Usuario: ${this.usuario}
        <br>Pass: ${this.pass}
        <br>Comision: ${this.comision} `);
  }

  mostrarNombreCompleto() {
    document.write(`<br> Nombre: ${this.nombre} Apellido: ${this.apellido}`);
  }

  // propiedades conmutadas  getters y setters

  get mostrarUsuario() {
    return this.usuario;
  }
  get mostrarComision() {
    return this.comision;
  }

  set modificarDni(nuevoDni) {
    this.dni = nuevoDni;
  }

  set modificarComision(nuevaComision) {
    this.comision = nuevaComision;
  }
}
class Alumno extends Persona {
  constructor(
    paramNombre,
    paramApellido,
    paramDni,
    paramUsuario,
    paramPass,
    paramComision,
    paramLegajo,
    paramCurso
  ) {
    super(
      paramNombre,
      paramApellido,
      paramDni,
      paramUsuario,
      paramPass,
      paramComision
    );
    this.legajo = paramLegajo;
    this.curso = paramCurso;
    this.estado = true;
  }

  mostrarDatos() {
    document.write(`<br>Nombre: ${this.nombre} 
    <br>Apellido: ${this.apellido}
    <br>Dni: ${this.dni}
    <br>Usuario: ${this.usuario}
    <br>Pass: ${this.pass}
    <br>Comision: ${this.comision} 
    <br>Legajo ${this.legajo}
    <br>Curso: ${this.curso} `);
  }
}
class Tutor extends Persona {
  constructor(
    paramNombre,
    paramApellido,
    paramDni,
    paramUsuario,
    paramPass,
    paramComision,
    paramId,
    paramAntiguedad
  ) {
    super(
      paramNombre,
      paramApellido,
      paramDni,
      paramUsuario,
      paramPass,
      paramComision
    );
    this.id = paramId;
    this.antiguedad = paramAntiguedad;
    this.estado = true;
  }

  mostrarDatosTutor() {
    document.write(`<br>Nombre: ${this.nombre} 
    <br>Apellido: ${this.apellido}
    <br>Dni: ${this.dni}
    <br>Usuario: ${this.usuario}
    <br>Pass: ${this.pass}
    <br>Comision: ${this.comision} 
    <br>Id ${this.id}
    <br>Antiguedad: ${this.antiguedad} `);
  }
}

let lily = new Persona("Lili", "Cerda", 33443344, "Icerda", "hdjfh23", "171");
lily.mostrarDatos();

document.write(`<br>Usuario: ${lily.mostrarUsuario}`);

//usuar el setter
let otroDdi = 32169525;

lily.modificarDni = otroDdi;
lily.mostrarDatos();

let jonathan = new Alumno(
  "Jonathan",
  "Singht",
  35455541,
  "jsisis",
  "dasdadsd",
  "17i",
  1234,
  "Fullstack"
);

jonathan.mostrarDatos();

let carlos = new Tutor(
  "Carlos",
  "Carral",
  32323232,
  "adsada",
  "carlos123",
  "17i",
  "carlosid",
  5
);

carlos.mostrarDatosTutor();
