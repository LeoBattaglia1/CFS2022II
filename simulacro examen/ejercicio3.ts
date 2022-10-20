//Ejercicio 3:
//Utilizar lo aprendido y crear una Clase, la cual tenga metedos y atributos, una instancia de dicha clase, y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede.

class Cigarrillos {
    protected nombre:string;
    protected precio:number;
    constructor(nombre:string, precio:number) {
      this.nombre = nombre;
      this.precio = precio;
    }

    mostrar() {
        console.log(`Los cigarrillos ${this.nombre} cuesta $ ${this.precio}` );  	
      }
  }

class Pier extends Cigarrillos {
    private cantidad:number;
    constructor(nombre:string, precio:number, cantidad:number) {
      super(nombre, precio);
      this.cantidad = cantidad;
    }
   
    imprimir() {
        super.mostrar();
        console.log(`Se venden en atados de ${this.cantidad} unidades` );  	
    }
}

let mentolados = new Pier("Mentolados Pier",350,20);
mentolados.imprimir();

