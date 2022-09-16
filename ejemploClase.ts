class Animal{
    cantidadDePatas : number;
    nombre : string;

    mostrarInfo(){
        console.log("La info es:")
    }

    constructor(cantidadDePatas:number, nombre:string){

        this.cantidadDePatas = cantidadDePatas
        this.nombre = nombre
    }
}

let araña = new Animal (8, "araña");
console.log(araña);