function agregar(){
  /*  var input = document.getElementById("fname");
    if(input.value==""){
        input.className="conError";
    } */

    var Nombre = document.getElementById("txtNombre");
    var Mail = document.getElementById("txtMail");
    var Numero = document.getElementById("txtNumero");
    var Consulta = document.getElementById("txtConsulta");
    if (Nombre.value==""){
        alert("Debe ingresar el nombre...");
        Nombre.focus();
    } else if(Mail.value=="") {
        alert("Debe ingresar el mail....");
        Mail.focus();
    } else if(Numero.value==""){
        alert("No completo el teléfono....");
        Numero.focus();
    } else if(Consulta.innerHTML=="") {
        alert("No completo el cuerpo de la consulta ....");
        Consulta.focus();
    } else {
        alert("El mail fue enviado correctamente....");
        limpiar();
    }
}
function limpiar(){
    document.getElementById("txtNombre").value="";
    document.getElementById("txtMail").value="";
    document.getElementById("txtNumero").value="";
    document.getElementById("txtConsulta").value="";
}
/*
function abrir(){
    var formulario=document.getElementById("formulario");
    var btn=document.getElementById("btnOpen");
    btn.hidden=true;
}
function cerrar(){
    var formulario=document.getElementById("formulario");
    var btn=document.getElementById("btnOpen");
    btn.hidden=false;
}*/


