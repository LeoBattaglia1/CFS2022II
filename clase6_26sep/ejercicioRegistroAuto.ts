import * as fs from 'fs';
import * as readlineSync from 'readline-sync';


class GestorDeArchivos {
    private arregloString: string[];
    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
    }
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
    public getArregloString(): string[] {
        return this.arregloString;
    }
}

class RegistroAutomotor{
    private patente: string;
    private marca: string;
    private modelo: string;

    public constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente;
        this. marca = marca;
        this.modelo = modelo;
    }

}