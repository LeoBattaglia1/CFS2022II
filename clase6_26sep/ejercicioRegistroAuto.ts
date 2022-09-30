import * as fs from 'fs';


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

class Auto{
    private patente: string;
    private marca: string;
    

    public constructor(patente: string, marca: string) {
        this.patente = patente;
        this. marca = marca;
    }
}

//class RegistroAutomotor{

    private arregloAutosRegistados: string[];

    public constructor(arregloAutosRegistrados: string[]) {
        this.arregloAutosRegistados=arregloAutosRegistrados;
}
    public getListaAutos() {
    return this.arregloAutosRegistados;
}


    }


}
    
function crearRegistro(auto: string, arrayRegistro: Array<Auto>): void {

    let datosAuto : string[] = auto.split(','); 
    let patente: string = datosAuto[0];
    let marca: string = datosAuto[1];
   
    //creo un objeto "nuevoRegistro" con los atributos patente y marca obtenidos del .txt
    let nuevoRegistro = new Auto(patente,marca);
    //inserto el objeto de tipo Auto en el arreglo recibido
    arrayRegistro.push(nuevoRegistro);
}



//Inicio programa
let datos = new GestorDeArchivos('registroAuto.txt'); // devuelve un arreglo de strings con "elementos" de profesores.
let arrayRegistro: Array<Auto> = [];


//creo array de objetos

for (let i: number = 0; i < datos.getArregloString().length; i++) {

    //Creo Registro uno por uno leyendo el txt, llamando a la funcion crearRegistro
    
    crearRegistro(datos.getArregloString()[i], arrayRegistro);
}

console.log(arrayRegistro);
