"use strict";
exports.__esModule = true;
var fs = require("fs");
var readFileSync = require("readline-sync");
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';'); //vamos a tener nuestro "objetos" separados por ;
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
var Auto = /** @class */ (function () {
    function Auto(patente, marca) {
        this.patente = patente;
        this.marca = marca;
    }
    return Auto;
}());
//class RegistroAutomotor{
// private arregloAutosRegistados: string[];
//public constructor(arregloAutosRegistrados: string[]) {
//  this.arregloAutosRegistados=arregloAutosRegistrados;
//}
//public getListaAutos() {
//return this.arregloAutosRegistados;
//}
//}
//}
function crearRegistro(auto, arrayRegistro) {
    var datosAuto = auto.split(',');
    var patente = datosAuto[0];
    var marca = datosAuto[1];
    //creo un objeto "nuevoRegistro" con los atributos patente y marca obtenidos del .txt
    var nuevoRegistro = new Auto(patente, marca);
    //inserto el objeto de tipo Auto en el arreglo recibido
    arrayRegistro.push(nuevoRegistro);
}
function modificarRegistro(arrayRegistro, posicion) {
    var patente = readFileSync.question("Ingrese la patente: ");
    var marca = readFileSync.question("Ingrese la marca: ");
    var nuevoRegistro = new Auto(patente, marca);
    arrayRegistro[posicion] = nuevoRegistro;
}
function borrarRegistro(arrayRegistro, posicion) {
    delete arrayRegistro[posicion];
}
//Inicio programa
var datos = new GestorDeArchivos('registroAuto.txt'); // devuelve un arreglo de strings con "elementos" de profesores.
var arrayRegistro = [];
for (var i = 0; i < datos.getArregloString().length; i++) {
    //Creo Registro uno por uno leyendo el txt, llamando a la funcion crearRegistro
    crearRegistro(datos.getArregloString()[i], arrayRegistro);
}
console.log(arrayRegistro);
modificarRegistro(arrayRegistro, 1);
console.log(arrayRegistro);
borrarRegistro(arrayRegistro, 1);
console.log(arrayRegistro);
