"use strict";
exports.__esModule = true;
var Tv = /** @class */ (function () {
    function Tv() {
        this.pulgadas = 50;
        this.brillo = 25;
    }
    Tv.prototype.aumentarBrillo = function () {
        this.brillo += 1;
    };
    return Tv;
}());
var miTv = new Tv();
miTv.aumentarBrillo();
console.log(miTv);
