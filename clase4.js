var Auto = /** @class */ (function () {
    function Auto(velocidad, estaEnsendido) {
        this.velocidad = velocidad;
        this.estaEnsendido = estaEnsendido;
    }
    Auto.prototype.desascelerar = function () {
        this.velocidad = this.velocidad - 1;
    };
    Auto.prototype.apagarAuto = function () {
        return this.estaEnsendido = false;
    };
    Auto.prototype.prenderAuto = function () {
        return this.estaEnsendido = true;
    };
    Auto.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Auto.prototype.getVelocidad = function () {
        return "la velocidad del auto es " + this.velocidad;
    };
    return Auto;
}());
var Fiat600 = new Auto(60, true); //creo el objeto Fiat600 de la clase auto 
console.log(Fiat600.getVelocidad());
Fiat600.setVelocidad(40);
Fiat600.desascelerar();
Fiat600.prenderAuto();
console.log(Fiat600);
