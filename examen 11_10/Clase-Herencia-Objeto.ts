//creo la clase Deportista

class Deportista {
    private nombre:string;
    private edad:number;
    constructor(nombre:string, edad:number) {
      this.nombre = nombre;
      this.edad = edad;
    }
   
   public imprimirDatos() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
    }	

    public Sub20(){
        if (this.edad<20){
            console.log("El deportista es un juvenil Sub-20")
        }else{
            console.log("El deportista no es un juvenil Sub-20")
        }
      }
  }

  //creo la clase Futbolista que hereda de Deportista
   
  class Futbolista extends Deportista {
    private posicion:string;
    constructor(nombre:string, edad:number, posicion:string) {
      super(nombre, edad);
      this.posicion = posicion;
    }
   
    public imprimir() {
      super.imprimirDatos();
      console.log(`Su posicion es: ${this.posicion}`);  
      super.Sub20();	
    }
}


//creo objetos

let persona1: Deportista = new Deportista("Pedro",25);

let persona2: Futbolista = new Futbolista("Ricardo", 18, "arquero")

persona1.imprimirDatos();
persona1.Sub20();

persona2.imprimir();
