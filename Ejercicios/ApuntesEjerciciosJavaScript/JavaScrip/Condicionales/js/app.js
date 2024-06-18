// let nombre = prompt("Escribe tu nombre");
// switch (nombre) {
//     case "Luis":
//         console.log("Mostar datos Luis");
//     break;
//     case "Ana":
//         console.log("Mostar datos Ana");
//     break;
//     case "Pepe":
//         console.log("Mostar datos Pepe");
//     break;

//     default:
//         console.log("No estas registrado");
//         alert("No estas Resgistrado");
//         break;
//}
/*
    Escribe un funcion llamada calcularImpuestos que recibe dos argumentos numericos: edad e ingresos;

    Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 €,
    debe de retornar ingresos altos de los contrario retornar 0
*/
/*
let edad=prompt("Escribe tu edad");
let ingresos=prompt("Escribe tu euros");

function calcularImpuestos(edad,ingresos){
if (edad >= 18 && ingresos >= 1000) {
    alert("Impuestos altos")
} else {
    alert("0")
};
}*/
/*let edad=prompt("Escribe un numero")    ;
console.log(edad);
medirEdad(edad);
function medirEdad(edad){
    switch (true) {
        case  (edad < 1):
            alert("Recien nacido");
            console.log("Recien nacido");
        break;
        case (edad >= 18):
            alert("Mayor de edad");
            console.log("Mayor de edad");
        break;
        case (edad < 18):
            alert("Menos de edad");
            console.log("Menos de edad");
        break;
        case  (edad > 63):
            alert("Abuelo donde esta el Inistol");
            console.log("Abuelo donde esta el Inistol");
        break;
        
        default:
            console.log("default");
            break;
    }
}*/
let numero=prompt("Escribe un numero");
diaSemana(numero);
function diaSemana(numero){
    switch (numero) {
        case "1":alert("Lunes");break;
        case "2":alert("Martes");break;
        case "3":alert("Miercoles");break;
        case "4":alert("Jueves");break;
        case "5":alert("Viernes");break;
        case "6":alert("Sabado");break;
        case "7":alert("Domingo");break;
        default:alert("Solo del 1 al 7 \n El numero indicado es "+numero);diaSemana(prompt("Escribe un numero"));
    }
}