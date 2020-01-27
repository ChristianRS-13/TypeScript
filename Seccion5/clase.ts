class vehiculo{
    // atributos o propiedades sin inicializar
    marca: string;
    fecha_creacion: string;
    color: string;
    puertas: number;
    kilometraje: number=0;

    constructor(marca_: string, fecha_creacion_:string, color_:string, puertas_:number){
        this.marca=marca_;
        // console.log("this", this);
        this.fecha_creacion = fecha_creacion_;
        this.color = color_;
        this.puertas = puertas_;
        console.log("this", this);
    }

    avanzar(){
        this.kilometraje = this.kilometraje +100;
    }
}


let miVehiculo = new vehiculo("Chevrolet", "2020", "Azul", 4);
console.log('Antes: ',miVehiculo.kilometraje);
miVehiculo.avanzar();
console.log('Despues de avanzar: ', miVehiculo.kilometraje);

let miVehiculo2 = new vehiculo("Chevrolet", "2015", "Negro", 2);
console.log('Numero de Puertas: ', miVehiculo2.puertas);

console.log('Numero de Puertas: ', miVehiculo.puertas);

