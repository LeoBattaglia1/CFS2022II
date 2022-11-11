import Monitor from './composicion/monitor';
abstract class Arbol {
    abstract getNombre(): string;
    abstract getAltura(): number;
    
    
    mostrarInfo(){
        console.log(`el arbol se llama: ${this.getNombre()} y mide de ${this.getAltura()} metros altura `)
    }
}

class Pino extends Arbol{
 
    getNombre(): string{
        return "Pino silvestre"
    }

    getAltura(): number{
        return 2
    }
    
}

let miPino: Pino = new Pino();
miPino.mostrarInfo();

