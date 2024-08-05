class FiguraGeometrica{
  #nombre = '';
  #color = '';

  constructor(nombre, color) {
    this.#nombre = nombre;
    this.#color = color;
  }
  establecerNombre(nombre) {
    this.#nombre = nombre;
  }

  obtenerNombre() {
    return this.#nombre;
  }

  establecerColor(color) {
    this.#color = color;
  }

  obtenerColor() {
    return this.#color;
  }

}