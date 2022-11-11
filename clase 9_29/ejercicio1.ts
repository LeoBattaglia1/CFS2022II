//Analizar el siguiente código y decir que mostrara

class Persona {
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number) {
      this.nombre = nombre;
      this.edad = edad;
    }
   
    imprimir() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
    }	
  }
   
  class Empleado extends Persona {
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number) {
      super(nombre, edad);
      this.sueldo = sueldo;
    }
   
    imprimir() {
      super.imprimir();
      console.log(`Sueldo: ${this.sueldo}`);  	
    }
   
    pagaImpuestos() {
      if (this.sueldo>5000)
        console.log(`${this.nombre} debe pagar impuestos`);
      else
        console.log(`${this.nombre} no debe pagar impuestos`);
    }
  }
   
  const persona1=new Persona('Juan', 44); //crea el objeto persona1 de la clase Persona
  persona1.imprimir();
  //aqui va a mostrar: 
  //Nombre: Juan 
  //Edad: 44
   
  const empleado1=new Empleado('Ana', 22, 7000); //crea el objeto empleado1 de la clase Empleado
  empleado1.imprimir();
  //aqui va a mostrar: 
  //Nombre: Ana 
  //Edad: 22
  //Sueldo: 7000

  empleado1.pagaImpuestos();
  //aqui va a mostrar: 
  //Ana debe pagar impuesto
  

  //el codigo tiene una clase padre llamada Persona, con dos atibutos y un metodo; y una clase Empleado que hereda de Persona y agrega un nuevo atributo y dos metodos