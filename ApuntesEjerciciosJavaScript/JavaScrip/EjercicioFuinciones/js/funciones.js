let a= 5;
let b= 7;

console.log(a+b);//suma
console.log(a-b);//resta
console.log(a*b);//multiplicar
console.log(a%b);//modulo
console.log(a**b);//potencia
console.log("-------------------");
console.log(a+b);//suma
console.log(a-b);//resta
console.log(a*b);//multiplicar
console.log(a%b);//modulo
console.log(a**b);//potencia
console.log("-------------------");
console.log(a>b);//mayor que
console.log(a>=b);//mayor igual
console.log(a<b);//menor
console.log(a<=b);//menor igual
console.log(a==b);//igual
console.log("-------------------");
let mayor=false;
let suscrito=false;
console.log(mayor && suscrito);//operador and
console.log("-------------------");
console.log(mayor || suscrito);//operador or
console.log("-------------------");
console.log(!mayor);//operador not
console.log("-------------------");
function cualEsMayor(a,b){
    if(a>b){
        return a+" es mayor que " +b;
    }else{
        return a+" es menor que " + b;
    }
}
mayor = cualEsMayor(5,5);
console.log(mayor);
console.log("-------------------");
/*
    Nombre ancho x alto
    8k 7680 x 4320
    4k 3840 x 2160
    wqhd 2560 x 1440
    fhd 1920 x 1080
    hd 1280 x 720
*/

function nombreResolucion(ancho , alto){
    if (ancho >= 7680 && alto > 4320)
    {
        return "8k";
    }
    else if (ancho >= 3840 && alto > 2160)
        {
            return "4k";
        }
        else if (ancho >= 2560 && alto > 1440)
            {
                return "WQHD";
            }
            else if (ancho >= 1920 && alto > 1080)
                {
                    return "FHD";
                }
                else if (ancho >= 1280 && alto > 720)
                    {
                        return "HD";
                    }
                    else {
                        return false;
                    }
}

let nombre = nombreResolucion(2100,1200);
console.log("El nombre de la resolucion es "+nombre)
console.log("-------------------");
let i=0;
while (i<=10)
    {
    if (i % 2 !== 0){
   //    console.log(i);//muestra todos los numeros
        console.log("i");// muestra 5 i que los los vaces que saca un numero
    }
    i++;
}
console.log("-------------------");
//crear algoritmo que devuelva el precio mas impuesto
function resultado(precio , impuesto){
    return precio+((precio*impuesto)/100);
}
let final= resultado(20,6);
console.log("El resultado es "+final)
/*
function resultado(precio , impuesto){
    return precio +(precio * impuesto);
}
let final= resultado(20,0.06);
console.log("El resultado es "+final)
*/