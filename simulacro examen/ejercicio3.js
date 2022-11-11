//Ejercicio 3:
//Utilizar lo aprendido y crear una Clase, la cual tenga metedos y atributos, una instancia de dicha clase, y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede.
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
var Cigarrillos = /** @class */ (function () {
    function Cigarrillos(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Cigarrillos.prototype.mostrar = function () {
        console.log("Los cigarrillos ".concat(this.nombre, " cuesta $ ").concat(this.precio));
    };
    return Cigarrillos;
}());
var Pier = /** @class */ (function (_super) {
    __extends(Pier, _super);
    function Pier(nombre, precio, cantidad) {
        var _this = _super.call(this, nombre, precio) || this;
        _this.cantidad = cantidad;
        return _this;
    }
    Pier.prototype.imprimir = function () {
        _super.prototype.mostrar.call(this);
        console.log("Se venden en atados de ".concat(this.cantidad, " unidades"));
    };
    return Pier;
}(Cigarrillos));
var mentolados = new Pier("Mentolados Pier", 350, 20);
mentolados.imprimir();
