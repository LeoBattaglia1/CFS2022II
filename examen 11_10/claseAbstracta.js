"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Arbol = /** @class */ (function () {
    function Arbol() {
    }
    Arbol.prototype.mostrarInfo = function () {
        console.log("el arbol se llama: ".concat(this.getNombre(), " y mide de ").concat(this.getAltura(), " metros altura "));
    };
    return Arbol;
}());
var Pino = /** @class */ (function (_super) {
    __extends(Pino, _super);
    function Pino() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pino.prototype.getNombre = function () {
        return "Pino silvestre";
    };
    Pino.prototype.getAltura = function () {
        return 2;
    };
    return Pino;
}(Arbol));
var miPino = new Pino();
miPino.mostrarInfo();
