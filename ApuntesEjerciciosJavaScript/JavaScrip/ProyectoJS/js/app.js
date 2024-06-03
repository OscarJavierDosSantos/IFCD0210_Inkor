//ejercicio en pizarra

let Alumno1 ={nombre:"oscar",apellido:"Ape1",DNI:"x159753x",colegio:"Mi Casa,Mi Telefono",notaFinal: 5}
let Alumno2 ={nombre:"albert",apellido:"Ape2",DNI:"x654951x",colegio:"Mi Casa,Mi Telefono",notaFinal:9 }
let Alumno3 ={nombre:"pepe",apellido:"Ape3",DNI:"x789123x",colegio:"Mi Casa,Mi Telefono",notaFinal:8 }
let Alumno4 ={nombre:"pepa",apellido:"Ape4",DNI:"x357951x",colegio:"Mi Casa,Mi Telefono",notaFinal:4 }
let Alumno5 ={nombre:"luisa",apellido:"Ape5",DNI:"x357123x",colegio:"Mi Casa,Mi Telefono",notaFinal:3 }

console.log(Alumno2.colegio);

//ejemplo solucionado de lis de objeto con array dentro del objeto
let vendedor={
    nombreVendedor:"Tomas",
    apellidoVendedor:"Sol",
    empresa:"Coches S.A",
    habilidades:["Puntualidad","carisma"]
}
 function vender(){ return "Tomas ha vendido un coche";}
 function nombreCompleto(persona){ return persona.nombreVendedor +" "+persona.apellidoVendedor;}

 console.log(vender());
 console.log(nombreCompleto(vendedor));
 console.log(vendedor.nombreVendedor);
 console.log(vendedor.habilidades);

 //ejercicio en la pizarra
let texto ="Mi curso de JS";

 console.log(texto.toUpperCase());
 console.log(texto.slice(6,7));
 console.log(texto.replace("JS","PHP"));
 console.log(texto);

//ejercicio en la pizarra de concatenacion

let text1 = "La vida";
let text2 = "es una"
let text3= "sola"

console.log(text1+" "+text2+" "+text3);
console.log(text1.concat(" "+text2.concat(" "+text3)));

//ejercicio en la pizarra
/*Dadas dos cadenas de texto se van a asignar a unas variables
concatenarlas con (+) , tranformarla a mayusculas y
 numero total de caracteres de la oracion completa */
let mensaje1="Cuando no tengas nada de bello que decir,";
let mensaje2="nada es mas hermoso que el silencio";

console.log(mensaje1.concat(" "+ mensaje2));
console.log(mensaje1.concat(" "+ mensaje2).toUpperCase());
console.log("El numero total de caracteres es "+
    mensaje1.concat(" "+ mensaje2).length);

