class Persona {
  #nombre;
  #edad;
  #fechaNacimiento;

  constructor(nombre, edad, fechaNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#fechaNacimiento = fechaNacimiento;
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
