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
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
    }
    Cuadrado.prototype.calcularArea = function () {
        this.area = this.lado * this.lado;
    };
    Cuadrado.prototype.calcularPerimetro = function () {
        this.perimetro = this.lado * 4;
    };
    return Cuadrado;
}());
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(lado, altura) {
        var _this = _super.call(this, lado) || this;
        _this.altura = altura;
        return _this;
    }
    Rectangulo.prototype.calcularArea = function () {
        this.area = this.lado * this.altura;
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        this.perimetro = this.lado * 2 + this.altura * 2;
    };
    return Rectangulo;
}(Cuadrado));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(lado, altura) {
        return _super.call(this, lado, altura) || this;
    }
    Triangulo.prototype.calcularArea = function () {
        this.area = (this.lado * this.altura) / 2;
    };
    return Triangulo;
}(Rectangulo));
var Cuadradito = new Cuadrado(5);
Cuadradito.calcularArea();
Cuadradito.calcularPerimetro();
console.log(Cuadradito);
var Rectangular = new Rectangulo(3, 2);
Rectangular.calcularArea();
Rectangular.calcularPerimetro();
console.log(Rectangular);
var Triangulito = new Triangulo(4, 8);
Triangulito.calcularArea();
console.log(Triangulito);
