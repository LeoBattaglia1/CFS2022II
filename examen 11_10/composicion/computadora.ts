import Monitor from "./monitor";
import Teclado from "./teclado";


class Computadora {
    private monitor : Monitor;
    private teclado : Teclado;

    constructor(monitor : Monitor, teclado: Teclado){
        this.monitor= monitor;
        this.teclado = teclado;
        
    }

    
}

let monitor: Monitor = new Monitor(26);
let teclado: Teclado = new Teclado("inalambrico");

let notbook : Computadora = new Computadora(monitor, teclado);

