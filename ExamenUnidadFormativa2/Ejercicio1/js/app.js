let gastoAlojamiento=parseFloat(prompt("Ingrese el conste de Alogamiento"));
let gastoAlimentacion=parseFloat(prompt("Ingrese el conste de Alimentacion"));
let gastoEntretenimiento=parseFloat(prompt("Ingrese el conste de Entretenimiento"));

Gastos(gastoAlojamiento,gastoAlimentacion,gastoEntretenimiento);

function Gastos(alojamiento,alimentacion,entretenimiento) {
    alert("El coste total del viaje es "+(alojamiento+alimentacion+entretenimiento)+"€")
}