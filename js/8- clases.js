// crear una clase
class Serie {
    // con este metodo se crean los objetos
    constructor(parametroNombre, parametroTemporadas, parametroCapitulos, parametroGenero) {
        // crear las propiedades del objeto
        this.nombre = parametroNombre;
        this.temporadas = parametroTemporadas;
        this.capitulos = parametroCapitulos;
        this.genero = parametroGenero;
        this.publicado = false; // propiedad por defecto
        
    }
    // aqui van nuestros metodos
    mostraDatos (){
        document.write('Serie: '+ this.nombre+ ' Temporadas: '+this.temporadas+'<br>');

    }

    mostrarDatosExtendido(){
        // mostrar todas las propiedades del objeto '' o ``
        document.write(`Serie: ${this.nombre}, tiene ${this.temporadas} temporadas, con ${this.capitulos} capitulos cada una. Genero ${this.genero}<br> `)
    }
}

// utilizar las clase o crear o instanciar objetos

let theOfficce = new Serie ('The Officce' , 9,27,'sitcom');
let vikingos = new Serie('Vikings',5,20,'Accion');
console.log(theOfficce);

theOfficce.mostraDatos();
vikingos.mostraDatos();

theOfficce.mostrarDatosExtendido();
vikingos.mostrarDatosExtendido();
