var Animal = /** @class */ (function () {
    function Animal(cantidadDePatas, nombre) {
        this.cantidadDePatas = cantidadDePatas;
        this.nombre = nombre;
    }
    Animal.prototype.mostrarInfo = function () {
        console.log("La info es:");
    };
    return Animal;
}());
var araña = new Animal(8, "araña");
console.log(araña);
