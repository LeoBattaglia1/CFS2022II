class Auto {
    private velocidad : number;
    private estaEnsendido: boolean;
//los atributos los ponemos siempre en private

    public constructor(velocidad: number, estaEnsendido: boolean) {
        this.velocidad = velocidad;
        this. estaEnsendido = estaEnsendido;
    }

   public desascelerar() : void {
        this.velocidad = this.velocidad - 1;
    }
    
    public apagarAuto() {
        return this.estaEnsendido = false;
    }

    public prenderAuto() {
        return this.estaEnsendido= true;
    }

    public setVelocidad(velocidad: number) {
        this.velocidad = velocidad;
    }

    public getVelocidad() {
        return "la velocidad del auto es " + this.velocidad ;
    }
}

let Fiat600 = new Auto( 60, true); //creo el objeto Fiat600 de la clase auto 

console.log(Fiat600.getVelocidad())
Fiat600.setVelocidad(40);
Fiat600.desascelerar();
Fiat600.prenderAuto();
console.log(Fiat600);







