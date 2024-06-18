document.getElementById('nombre').value,
                                                document.getElementById('apellido').value,
                                                document.getElementById('pass').value,
                                                document.getElementById('sexo').value,
                                                document.getElementById('email').value
function enviarForm(nombre,apellido,pass,sexo,email){
    let mensajeFinal="A continuacion te indico los campos a rellenar\n";
    //Para comprobar los distintos campos a validar
    let nombreComp=comprobar(nombre);
    let apeComp=comprobar(apellido);
    let passComp=comprobar(pass);
    let sexoComp=comprobar(sexo);
    let emailComp=comprobar(email);
    
    
    if (nombreComp==true) {mensajeFinal+="Te falta por incluir el Nombre\n"; }
    if (apeComp==true) {mensajeFinal+="Te falta por incluir el Apellido\n"; }
    if (passComp==true) {mensajeFinal+="Te falta por incluir el Password\n"; }
    if (sexoComp==true) {mensajeFinal+="Te falta por incluir el Sexo\n"; } 
    if (emailComp==true) {mensajeFinal+="Te falta por incluir el Email\n";  }

    if ( nombreComp==false && apeComp==false && emailComp==false && passComp==false && sexoComp==false && mensajeComp==false){
            mensajeFinal=("Gracias por contactar con nosotros "+nombre.toUpperCase() + 
            "\nLeeremos su mensaje y le responderemos los antes posible ") ;    
        }
        return alert(mensajeFinal);
        console.log(mensajeFinal);
}
//compruba que el texto enviado sea distinto de vacio
function comprobar(texto){
    let estado=false;
    if (texto=="") {
        estado=true;
    }
    return estado;
}