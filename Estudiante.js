const Persona = require('Persona.js')

class Estudiante extends Persona{
    constructor(nombre, apellido, edad, grado) {
        super(nombre, apellido, edad);
        this.grado = grado;
    }

    toString(){
        return `Estudiante: ${super.toString()}, Grado: ${this.grado}`;
    }
}

