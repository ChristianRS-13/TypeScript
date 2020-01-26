let pelicula: string ="Mision imposible";
let serie: string='Hannibal';

let poema: string= `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
`;

// Operaciones
let programas: string = "Mis programas favoritos son: "+ pelicula + " y "+ serie;

console.log(programas);

// template string
let programas2: string = `
Mis programas favoritos son: ${pelicula} y ${serie}
`;
console.log(programas2);

let edad_actual: number=30;
let edad_futura: string=`
El siguiente mes mi edad sera ${edad_actual +1}
`;
console.log(edad_futura);

// metodos
console.log(programas.charAt(0));
console.log(programas.toUpperCase());
