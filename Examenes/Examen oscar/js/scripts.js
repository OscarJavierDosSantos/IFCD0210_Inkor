console.log

function enviarForm(nombre,apellido,nacimiento,sexo,email,telefono,usuario,pass,Confirmpass){
    console.log(nombre,apellido,nacimiento,sexo,email,telefono,usuario,pass,Confirmpass);
    let mensajeFinal="A continuacion te indico los campos a rellenar\n";
    
    let nombreComp=comprobar(nombre);
    let apeComp=comprobar(apellido);
    let nacimientoComp=comprobar(nacimiento);
    let sexoComp=comprobar(sexo);
    let emailComp=comprobar(email);
    let telefonoComp=comprobar(telefono);
    let usuarioComp=comprobar(usuario);
    let passComp=comprobar(pass);
    let comfirmpassComp=comprobar(Confirmpass);
    let contrasiguales=false;
    
    if (nombreComp==true) {mensajeFinal+="Te falta por incluir el Nombre\n"; }
    if (apeComp==true) {mensajeFinal+="Te falta por incluir el Apellido\n"; }
    if (nacimientoComp==true) {mensajeFinal+="Te falta por incluir la Fecha de Nacimiento\n"; }
    if (sexoComp==true) {mensajeFinal+="Te falta por incluir el Sexo\n"; } 
    if (emailComp==true) {mensajeFinal+="Te falta por incluir el Email\n";  }
    if (telefonoComp==true) {mensajeFinal+="Te falta por incluir el Telefono\n"; } 
    if (usuarioComp==true) {mensajeFinal+="Te falta por incluir el Nombre de Usuario\n";  }
    if (passComp==true) {mensajeFinal+="Te falta por incluir el Password\n"; }
    
    if (comfirmpassComp===passComp) {
        mensajeFinal+="Las comptraseñas coinciden";
        contrasiguales=true;
    }else{
        mensajeFinal+="Las comptraseñas no coinciden";
        contrasiguales=false; 
    }
   

    if ( nombreComp==false && apeComp==false && nacimientoComp==false && sexoComp==false && emailComp==false && telefonoComp==false 
            && usuarioComp==false &&  passComp==false && comfirmpassComp==false && contrasiguales==true){
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
