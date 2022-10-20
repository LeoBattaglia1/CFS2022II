class Cuadrado{
   
    protected lado: number;
    protected area: number;
    protected perimetro: number;

    public constructor(lado: number) {
        this.lado = lado;     
    }

    public calcularArea():void{
        this.area = this.lado*this.lado;
    }

    public calcularPerimetro():void{
        this.perimetro = this.lado*4;
    }

}

class Rectangulo extends Cuadrado{
    protected altura:number;
    public constructor(lado: number, altura: number) {
        
        super(lado)
        this.altura=altura
    }

    public calcularArea():void{
        this.area= this.lado*this.altura
    }    
    
    public calcularPerimetro():void{
        this.perimetro = this.lado*2+this.altura*2;
    }
}

class Triangulo extends Rectangulo{

    public constructor(lado: number, altura: number) {
        super(lado, altura)
    }

    public calcularArea():void{
        this.area = (this.lado*this.altura)/2;
    }
}

let Cuadradito = new Cuadrado(5);
Cuadradito.calcularArea();
Cuadradito.calcularPerimetro();
console.log(Cuadradito);

let Rectangular = new Rectangulo(3,2);
Rectangular.calcularArea();
Rectangular.calcularPerimetro();
console.log(Rectangular);


let Triangulito = new Triangulo(4,8);
Triangulito.calcularArea();
console.log(Triangulito);
