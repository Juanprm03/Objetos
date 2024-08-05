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

class Circulo extends FiguraGeometrica{
  #radio;

  constructor(nombre, color, radio) {
    super(nombre, color);
    this.#radio = radio;
  }
}

class Rectangulo extends FiguraGeometrica {
    #base;
    #altura;
  
    constructor(nombre, color, base, altura) {
      super(nombre, color);
      this.#base = base;
      this.#altura = altura;
    }
}