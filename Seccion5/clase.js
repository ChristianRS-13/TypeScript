var vehiculo = /** @class */ (function () {
    function vehiculo(marca_, fecha_creacion_, color_, puertas_) {
        this.kilometraje = 0;
        this.marca = marca_;
        // console.log("this", this);
        this.fecha_creacion = fecha_creacion_;
        this.color = color_;
        this.puertas = puertas_;
        console.log("this", this);
    }
    vehiculo.prototype.avanzar = function () {
        this.kilometraje = this.kilometraje + 100;
    };
    return vehiculo;
}());
var miVehiculo = new vehiculo("Chevrolet", "2020", "Azul", 4);
console.log('Antes: ', miVehiculo.kilometraje);
miVehiculo.avanzar();
console.log('Despues de avanzar: ', miVehiculo.kilometraje);
var miVehiculo2 = new vehiculo("Chevrolet", "2015", "Negro", 2);
console.log('Numero de Puertas: ', miVehiculo2.puertas);
console.log('Numero de Puertas: ', miVehiculo.puertas);
