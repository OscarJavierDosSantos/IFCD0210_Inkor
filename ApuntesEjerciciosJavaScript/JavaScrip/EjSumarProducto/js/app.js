let nota1=prompt("Primera nota") ;
let nota2=prompt("Segunda nota");

function escribirNotas(funcion)
{   switch (funcion) {
        case "nota1":
            document.write(nota1);
            break;
        case "nota2":
            document.write(nota2);
        break;
    }
}

function SumaProducto(funcion)
{   switch (funcion) {
        case "producto":
            document.write(parseInt(nota1)*parseInt(nota2));
            break;
        case "sumar":
            document.write(parseInt(nota1)+parseInt(nota2));
        break;
    }
}
/*
//Otra solucion posible
function solicitarNotas(){
let nota1=parseFloat(prompt("Introduce la Primera nota"));
let nota2=parseFloat(prompt("Introduce la Segunda nota"));

return[nota1,nota2];
}

function carcularSuma(nota1,nota2){ return nota1+nota2;} // calcula la suma

function carcularProducto(nota1,nota2){ return nota1*nota2;} // calcula el producto

// Funcion principal del programa
function main(){
    let [nota1,nota2] = solicitarNotas();

    let suma =carcularSuma(nota1,nota2);
    let producto = carcularProducto(nota1,nota2);
    
    console.log("La suma de las notas es "+ suma);
    console.log("El producto de las notas es "+ producto);
}
// ejecuar el programa
main();
*/