

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    let datos_ok1 = false;
    let datos_ok2 = false;
    let datos_ok3 = false;
    let datos_ok4 = false;

    if (nombre === "") {
        alert("Por favor ingrese su nombre");
        datos_ok1 = false;
        return false;
    }
    else if (nombre.length > 30) {
        alert("El nombre ingresado es muy largo");
        datos_ok1 = false;
        return false;
    }
    else {
        datos_ok1 = true;
    }

    if (email === "") {
        alert("Por favor ingrese su email");
        datos_ok2 = false;
        return false;
    }
    else if (email.length > 50) {
        alert("El email ingresado es muy largo");
        datos_ok2 = false;
        return false;
    }
    else {
        datos_ok2 = true;
    }

    if (asunto === "") {
        alert("Por favor ingrese su motivo");
        datos_ok3 = false;
        return false;
    } else {
        datos_ok3 = true;
    }

    if (mensaje === "") {
        alert("Por favor ingrese su consulta");
        datos_ok4 = false;
        return false;
    } else {
        datos_ok4 = true;
    }

    if (datos_ok1 && datos_ok2 && datos_ok3 && datos_ok4) {
        alert("Su consulta se ha enviado correctamente");
        return true;
    }
   
}

