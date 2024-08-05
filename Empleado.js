class Empleado {
  
    constructor(nombre, salarioBase) {
      this.nombre = nombre;
      this.salarioBase = salarioBase;
    }
    
  

  }

  class Gerente extends Empleado {

  
    constructor(nombre, salarioBase, bono) {
      super(nombre, salarioBase);
      this.bono = bono;
    }
    calcularSalarioTotal() {
      return this.salarioBase + this.bono;
    }
}

class Vendedor extends Empleado {
    constructor(nombre, salarioBase, comision) {
      super(nombre, salarioBase);
      this.comision = comision;
    }
}