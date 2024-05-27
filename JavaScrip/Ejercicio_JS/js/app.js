let nombre = "Luis";
let edad = 45;
let asistencia = true;
let apellido = "Ciervo";
let estatura = 1.60;


function escribeNombre(){
    document.write(nombre);//escribe en el documento html
};
function escribir(variable){  
    document.write(variable);//escribe en el documento html lo indicado en la variable manado desde el html.
};


/*
console.log("Hola , me llamo "+nombre);
console.log("Nombre: "+nombre);
console.log("Apellido: "+apellido);
console.log("Edad: "+edad);
console.log("Asistencia: "+asistencia);
console.log("Estatura: "+estatura);
*/
console.log("Hola , me llamo "+nombre+" " + typeof nombre);//typeof para saber el tipo de dato

//alert("Hola , me llamo "+nombre);
