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

let edad=prompt("Escribe tu edad");
let ingresos=prompt("Escribe tu euros");

function calcularImpuestos(edad,ingresos){
if (edad >= 18 && ingresos >= 1000) {
    alert("Impuestos altos")
} else {
    alert("0")
};
}