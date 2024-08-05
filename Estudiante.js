const Persona = require('Persona.js')

class Estudiante extends Persona{
    constructor(nombre, apellido, edad, grado) {
        super(nombre, apellido, edad);
        this.grado = grado;
        if(this.realizarTarea === undefined){
            throw new Error ("El estudiante debe implementar el metodo realizar tarea")
        }
    }
    
    realizarTarea(){
        console.log(`${this.nombre} Realizando tarea escolar`);
    }

    toString(){
        return `Estudiante: ${super.toString()}, Grado: ${this.grado}`;
    }
}

