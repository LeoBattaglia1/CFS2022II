//Ejercicio 1:
//Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc).

class Dog {
    protected name:string;
    constructor(name: string) {
        this.name = name;
      }
      public makeSound(): void {
        console.log ('wuff wuff\n');
      }
}

   class Cat extends Dog{

    constructor(name: string) {
        super(name);
      }

     public makeSound(): void {
      console.log('meow meow\n');
    }
   }
   let gatito = new Cat('Pocky');
   gatito.makeSound(); // -> meow meow
   let firulais = new Dog('Pocky');
   firulais.makeSound(); // -> wuff wuff

   //ACLARACION: al principio pense que crear una clase "Mascota" seria lo correcto para que Cat y Dog hereden de ahí.
   //pero a fines de ahorrar codigo lo resolvi de esta manera. No se si es correcto pero maneje las dos opciones.