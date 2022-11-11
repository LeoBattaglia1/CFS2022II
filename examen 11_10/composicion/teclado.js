"use strict";
exports.__esModule = true;
var Teclado = /** @class */ (function () {
    function Teclado(tipo) {
        this.tipo = tipo;
    }
    Teclado.prototype.mostrar = function () {
        console.log("El teclado es: ".concat(this.tipo));
    };
    return Teclado;
}());
exports["default"] = Teclado;
