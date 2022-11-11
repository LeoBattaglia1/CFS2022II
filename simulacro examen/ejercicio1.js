//Ejercicio 1:
//Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc).
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
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log('wuff wuff\n');
    };
    return Dog;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('meow meow\n');
    };
    return Cat;
}(Dog));
var gatito = new Cat('Pocky');
gatito.makeSound(); // -> meow meow
var firulais = new Dog('Pocky');
firulais.makeSound(); // -> wuff wuff
