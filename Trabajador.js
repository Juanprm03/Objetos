class TrabajadorInterfaz {
    constructor(){
        if(new.target === TrabajadorInterfaz){
            throw new Error("Esta clase no puede ser instanciada directamente");
        }
        if(typeof realizarTarea === 'function'){
            throw new Error("El método realizarTarea debe ser una función");
        }
    }
}

module.exports = TrabajadorInterfaz