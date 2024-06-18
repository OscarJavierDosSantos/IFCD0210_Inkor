// comentario de linea
/* 
    comentario de bloque
*/
/* Variales
    var a = 8; variable modificable ya no se usa
    let b = "Lucia"; variable modificable 
    const c= true; variable constante  obliga tener dato desde el inicio

    b="pepe"; para cambiar el valor de la varible
*/
/*Mostar datos en consola
console.log(dato a mostrar);
*/
/*Declaraciones de variables a la vez
    let nombre,apellido,nombreApellido;
    nombre="ana";
    apellido = "diaz";    
    nombreApellido = nombre+" "+apellido; 

     let nombre="PEPE",apellido="Gomez",nombreApellido=nombre+" "+apellido;
*/
/*Funciones

function nombreFuncion( parametros si queremos ) {
let nombreVariable="Variable dentro de la funcion";
return nombreVariable;
}

console.log(nombreFuncion());

    Funciones con operadores

    function suma1( o,p ) {
    return o + p;
    }

    let resultado= suma1(5,8);
*/
/*Tipos de datos
    --> String cadena de caracteres texto
        let text ="Rafa";
        let text2 ='Rafael';

    --> Number numero
        let num =5;
        let num2 =5.5; los decimales es con punto(.) NO con coma(,)

        let resultado = num + num2; suma normal de numeros

    --> Boolean
        let asistencia=true;
            asistencia=false;
    
    --> undefine no se asigno valor : let b;

    --> null no esta declarado
*/
/*Operadores
    Asignacion =
    let asignacion = casa;

    Operaciones aritmeticas
    sumar 
    let sumar = 8+5;
    restar
    let restar =8-5;
    Multiplicaion
    let multi = 8*5;
    division
    let division =8/5;
    resto
    let resto = 10%2;
    exponente
    let exponente=3**3; 

    Incremento y decremento

    let x =5;
    let y =6;

    x++; incremento
    y--; decremento
 */
/*Reglas de sinstaxis
    --> no se debe de poner el mismo nombre de las variables reservadas(let let ;)
    --> debemos escribir con el camelCase 
    --> JavaScript es case sensitive,se refiere a la sensivilidad de las variables y
         los identificadores a las diferencias de minusculas y mayusculas.
    --> no se permitelas declaraciones que empiezen con numeros siempre seran letras

    let nombreapellido1="Pepe";-->no esta mal pero no sigue la norma de camelCase
    let nombreApellido1="Pepa";-->sigue la norma de camelCase
 */
/*Operadores logicos
    let ope1=5;
    let ope2=10;
    let ope3=15;

    let operadores = ope1 < ope2 && ope2 > ope3;


    Conjuncion && |  Disyuncion || | Negacion !
    V V --> V     |  V V --> V     |  V F
    V F --> F     |  V F --> V     |  F V
    F V --> F     |  F V --> V     |
    F F --> F     |  F F --> F     |
*/
/*Fechas
    let date = new Date();
    console.log(date);
*/
/*Concatenacion +

    let g = "Hola me llamo ";
    let i = "PEPE";
    let j = " y tengo 10 años";
    let k = g+i+j;
*/
/*Conversion de datos
    de texto a num
    let nume=5;
    let nume2="8"; es un string

    let resul = nume + parseInt(nume2);

    de texto a float
    let numero=5;
    let numero2="8.6"; es un string

    let resul1 = numero + parseInt(numero2);
*/
/*Comparadores

    let w=4;
    let u="9";

    let r = w == u;

    para compara el tipo de datos almacenado (tipo de dato y contenido)
     r = w === u;

     Negacion
     r = w != u;

*/
/*Operadores menos y mayor

    let menor = 8<3;
    let mayor= 8>3;
    let menorIgual = 8<=3;
    let mayorIgual= 8>=3;


*/
/*Estructura de datos en formato clave valor
    que pueden tener propiedades caracteristicas metodos y representan un producto alumno etc
    ejemplo coche modelo marca color

    let coche ={marca:"fiat",modelo:2000,color:"Rojo" }
    let coche1 ={marca:"Clio",modelo:1998,color:"azul" }

    console.log(coche);
    console.log(coche1);
*/
/*Array grupo de valores listas

let array =["1,2,3,4"];
let array1=["HTML,CSS,JS"];

console.log(array);
console.log(array1);

Array dentro de un objeto

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

 //this. hace referencia a un valor fuera de la funcion

*/
/*Extraccion de cadenas de caracteres

let texto="Educacion";
let resultado= texto.slice(4,7);
console.log(resultado);---> aci

// va de atras 
let texto="España";
let resultado= texto.slice(-5,-3);
console.log(resultado);---> sp

//remplazar caracteres en una variable
const texto3="La naturaleza es compartida";
const resul2=texto3.replace("naturaleza","vida")
console.log(resul2);

// comvertir texto en mayusculas
let texto3="La naturaleza es compartida";
let texto6 = texto3.toUpperCase();
console.log(texto6);

// comvertir texto en minusculas
 let texto3="LA NATURALEZA ES COMPATIDA";
let texto6 = texto3.toLowerCase();
console.log(texto6);

//Ver el numero de caracteres de un string
let mensaje = "Texto a probar";
console.log("Tiene un total de "+mensaje.length +" letras");

//busqueda de caracteres(indica la posicion donde empieza los buscado)
let mensaje = "Texto a probar";
console.log(mensaje.indexOf("probar"));-->8

//mostar desde un inico a un final indicado
let mensaje = "Texto a probar";
console.log(mensaje.substring(0,5));-->Texto

//quitar espacios creando un array
let mensaje = "Hasta luego Mari Carmen";
console.log(mensaje.split(" "));--> (4) ['Hasta', 'luego', 'Mari', 'Carmen']

//Calcular longitud de la array

let vocales =["a","b","c","d","e","f","g","h","y","j"];
console.log(vocales.length);

//concatener arrays
let vocales =["a","b","c","d"];
console.log(vocales.concat("e","f","g","h","y","j"));

//join separador
let lista3=['Hasta', 'luego', 'Mari', 'Carmen'];
console.log(lista3.join(" "))-->Hasta luego Mari Carmen

// anexar elementos
let lista4=[1,2,3,4];
console.log(lista4.push(5));

//shift
let lista5=[1,2,3,4];
console.log(lista4.shift());

//unshift
let lista6=[1,2,3,4];
console.log(lista4.unshift(0));

//reverso
let lista7=["1","2","3","4"];
console.log(lista4.reverse());

//Funciones de numeros inNaN 
muestra true si es caracter y false cuando es numero

let caracter="8";
console.log(isNaN(caracter));

*/
/*Estructuras de control de flujo

// if
    let x=3;
    let y=6;

    if (x>y) {
        alert (x +" es mayor "+ y)
    }
    if (x>0) {
        alert (x +" es mayor que 0")
    }
    if (x<0 || x!=3) {
        alert (x +" es negativo o distinto de 3")
    }

    //if {} else
    let edad =17;

    if (edad>=18) {
        alert ("Puedes entrar al se mayor de edad");
    }
    else {
        alert ("A tu casa enano");
    }
    //for
    for (let i = 0; i < 3; i++) {
    console.log("caracola");}
    
    //while
    let il=0;
    while (il<3) {
        console.log("pesicola");
        il++;    
    }
*/

/* Eventos 




*/