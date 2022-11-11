
interface Pantalla {
    pulgadas:number;
    brillo: number;
   
   aumentarBrillo() : void;
     
}	

class Tv implements Pantalla{
    pulgadas = 50;
    brillo = 25;

    public aumentarBrillo(): void {
        this.brillo+=1
    }
}


let miTv: Tv = new Tv();
miTv.aumentarBrillo();
console.log(miTv);