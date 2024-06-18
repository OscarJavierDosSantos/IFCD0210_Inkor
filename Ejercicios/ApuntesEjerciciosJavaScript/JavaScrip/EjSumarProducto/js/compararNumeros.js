function comparaNumeros(num1) {

    if (num1>0) {
        alert("El numero introducido es positivo");
    } 
    else if (num1<0)
    {
        alert("El numero introducido es negativo");
    }
    else
    {
        alert("El numero introducido es cero");
    }
    
}
 comparaNumeros(parseInt(prompt("Introduce un numero")));
