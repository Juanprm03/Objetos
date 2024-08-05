class Persona {
  #nombre;
  #edad;
  #fechaNacimiento;

  constructor(nombre, edad, fechaNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#fechaNacimiento = fechaNacimiento;
    if(this.realizarTarea === undefined){
        throw new Error ("La Persona debe implementar el metodo realizar tarea")
    }
  }
  
  realizarTarea() {
    console.log(`${this.#nombre} Realizando tarea laboral`);
  }

  establecerNombre(nombre) {
    if (typeof nombre!=='string' || nombre.trim() === '') {
        throw new Error("El nombre no puede estar vacío o contener solo espacios");
      }
    this.#nombre = nombre;
  }

  obtenerNombre() {
    return this.#nombre;
  }

  establecerEdad(edad) {
    if (edad < 0) {
        throw new Error("La edad no puede ser negativa");
      }
    this.#edad = edad;
  }

  obtenerEdad() {
    return this.#edad;
  }

  establecerFechaNacimiento(fechaNacimiento) {
    if (typeof fechaNacimiento!=='string') {
        throw new Error("La fecha de nacimiento debe ser una fecha válida");
      }
    this.#fechaNacimiento = fechaNacimiento;
  }

  obtenerFechaNacimiento() {
    return this.#fechaNacimiento;
  }

  calcularFechaNacimiento() {
    const currentYear = new Date().getFullYear();
    return new Date(currentYear - this.#edad, 0, 1);
  }
}

module.exports = Persona

const persona = new Persona('Juan', 19, '2005-03-05');
console.log(persona.obtenerNombre());
persona.establecerEdad(26);
console.log(persona.obtenerEdad());
console.log(persona.calcularFechaNacimiento());
