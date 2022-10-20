//Realizar 3 clases “padres” distintas, y aplicar herencia en cada una

class Deportes {
    protected nombre:string;
    protected cantidadJugadores:number;
    constructor(nombre:string, cantidadJugadores:number) {
      this.nombre = nombre;
      this.cantidadJugadores = cantidadJugadores;
    }
  }
   
  class Futbol extends Deportes {
    private equipos:string;
    constructor(nombre:string, cantidadJugadores:number, equipos:string) {
      super(nombre, cantidadJugadores);
      this.equipos = equipos;
    }
   
    imprimir() {
      console.log(`El club: ${this.equipos} compite en ${this.nombre}` );  	
    }
//////////////////////////////////////////////////////////////////////////////////////////

class Mercaderia {
    protected nombre:string;
    protected precio:number;
    constructor(nombre:string, precio:number) {
      this.nombre = nombre;
      this.precio = precio;
    }

    mostrar() {
        console.log(`El producto: ${this.nombre} cuesta ${this.precio}` );  	
      }
  }

class Gaseosa extends Mercaderia {
    private tamaño:number;
    private sabor:string;
    constructor(nombre:string, precio:number, tamaño:number, sabor:string) {
      super(nombre, precio);
      this.tamaño = tamaño;
      this.sabor = sabor;
    }
   
    imprimir() {
        super.mostrar();
        console.log(`Su tamaño es: ${this.tamaño} y su sabor ${this.sabor}` );  	
    }

    //////////////////////////////////////////////////////////////////////////////////

class FiguraPlana {
    protected nombre:string;
    protected perimetro:number;
    protected area:number;
    constructor(nombre:string, perimetro:number, area:number) {
        this.nombre = nombre;
        this.perimetro = perimetro;
        this.area = area;
    }
}

class PoligonoRegular extends FiguraPlana {
    private cantidadLados:number;
    private medidaLados:number;
    constructor(nombre:string, perimetro:number, area:number, cantidadLados:number, medidaLados: number) {
        super(nombre, perimetro, area);
        this.cantidadLados = cantidadLados;
        this.medidaLados = medidaLados;
    }
    
    validadPerimetro() {

        if (this.perimetro = this.cantidadLados*this.medidaLados){
            console.log(`El perimetro de: ${this.nombre} es ${this.perimetro}` );  
        }else{
            console.log("El perimetro no coincide con la medida de los lados")
        }
    }
    