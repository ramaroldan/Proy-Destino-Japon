

// Función para validar el formulario

function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
  
    var datos_ok1 = false;
    var datos_ok2 = false;
    var datos_ok3 = false;
    var datos_ok4 = false;
  
    // Validar el campo de nombre
    if (nombre === "") {
      alert("Por favor ingrese su nombre");
      datos_ok1 = false;
      return false;
    } else if (nombre.length > 30) {
      alert("El nombre ingresado es muy largo");
      datos_ok1 = false;
      return false;
    } else {
      datos_ok1 = true;
    }
  
    // Validar el campo de email
    if (email === "") {
      alert("Por favor ingrese su email");
      datos_ok2 = false;
      return false;
    } else if (email.length > 50) {
      alert("El email ingresado es muy largo");
      datos_ok2 = false;
      return false;
    } else if (!validarEmail(email)) {
      alert('Por favor, ingresa un correo electrónico válido');
      return false;
    } else {
      datos_ok2 = true;
    }
  
    // Validar el campo de asunto
    if (asunto === "") {
      alert("Por favor ingrese su motivo");
      datos_ok3 = false;
      return false;
    } else {
      datos_ok3 = true;
    }
  
    // Validar el campo de text area
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
  
  // Función para validar el formato de un email utilizando expresiones regulares
  function validarEmail(email) {
    var valMail = /\S+@\S+\.\S+/;
    return valMail.test(email);
  }
  
//Consumiendo API
function saludoAPI() {
    fetch("https://pokeapi.co/api/v2/pokemon/25")
        .then(response => response.json())
        .then(data => {
            let element = document.getElementById("pikachu")
            element.innerHTML = `
            <p>¡Gracias por visitarnos!</p>
            <img src="${data.sprites.front_female}" width="200px">
            <img src="${data.sprites.front_default}" width="200px">
            <p>¡Pika pronto!</p>
            `
        })
        .catch(error => console.log(error))
}

