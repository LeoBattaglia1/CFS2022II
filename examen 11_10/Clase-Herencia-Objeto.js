//creo la clase Deportista
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
var Deportista = /** @class */ (function () {
    function Deportista(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Deportista.prototype.imprimirDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Edad: ".concat(this.edad));
    };
    Deportista.prototype.Sub20 = function () {
        if (this.edad < 20) {
            console.log("El deportista es un juvenil Sub-20");
        }
        else {
            console.log("El deportista no es un juvenil Sub-20");
        }
    };
    return Deportista;
}());
//creo la clase Futbolista que hereda de Deportista
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, edad, posicion) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.posicion = posicion;
        return _this;
    }
    Futbolista.prototype.imprimir = function () {
        _super.prototype.imprimirDatos.call(this);
        console.log("Su posicion es: ".concat(this.posicion));
        _super.prototype.Sub20.call(this);
    };
    return Futbolista;
}(Deportista));
//creo objetos
var persona1 = new Deportista("Pedro", 25);
var persona2 = new Futbolista("Ricardo", 18, "arquero");
persona1.imprimirDatos();
persona1.Sub20();
persona2.imprimir();
