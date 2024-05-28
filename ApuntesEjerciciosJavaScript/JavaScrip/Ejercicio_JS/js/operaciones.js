//operaciones aritmeticas
let suma = 30+70;
let resta = 80-50;
let multi = 50*2;
let dividir = 100/2;
let resto = 50%2;

console.log("La suma es --> "+suma);
console.log("La resta es --> "+resta);
console.log("La multiplicacion es es --> "+multi);
console.log("La division es --> "+dividir);
console.log("La resta es --> "+resto);
//operaciones relacionales o comparacion
let menor =30 < 50;
console.log("Es menor 30 a 50 --> "+menor);
let mayor =30 > 50;
console.log("Es mayor 30 a 50 --> "+mayor);

console.log("Es menor 18<12 directamente sin variable --> "+ (18<12));
//operaciones logicas
   let edadOpe=18;
    let DNI=true; 
    //AND &&
console.log( edadOpe >= 18 && DNI==true);
    //OR ||
console.log( edadOpe <= 18 || DNI==true);
    //negacion !
    let edadOpeNeg=18;
    let DNINeg=!true; 
    console.log( edadOpeNeg <= 18 || DNINeg==true);