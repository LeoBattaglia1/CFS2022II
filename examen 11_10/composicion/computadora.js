"use strict";
exports.__esModule = true;
var monitor_1 = require("./monitor");
var teclado_1 = require("./teclado");
var Computadora = /** @class */ (function () {
    function Computadora(monitor, teclado) {
        this.monitor = monitor;
        this.teclado = teclado;
    }
    return Computadora;
}());
var monitor = new monitor_1["default"](26);
var teclado = new teclado_1["default"]("inalambrico");
var notbook = new Computadora(monitor, teclado);
