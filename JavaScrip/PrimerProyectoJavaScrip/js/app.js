//distintios formas de fijado de datos a las variables
let nombre="Paco";
console.log("Mi nombre "+nombre);

let apellido;

apellido="Cano";
console.log("Mi apellido "+apellido);

//modificacion en linea
let a = "20";
console.log(a);
let b1;
b=a;
console.log(b);
//constantes
const edad=23;
console.log(edad);

//tipados

let name=82;
let numero="Juan";
console.log(numero);
console.log(name)

//Comentario lineal
/* Comentario de bloque */

/* Colecciones o objet
    Persona
    Nombre,Apellido,Edad,ColorDePiel
*/


let persona={
    nombre:"Juan",
    apellido:"Perez",
    edad:18,
    colorDePiel:"Blanco"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.colorDePiel);

//borrado de datos
delete persona.nombre;
console.log(persona);

//arrays

let animales=["perro"];
let animal=["perro","caballo"];
console.log(animales);
console.log(animal);

//agragar datos
animales[9]="gato";
console.log(animales);