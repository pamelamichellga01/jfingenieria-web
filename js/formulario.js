function validarFormulario() {
    // Obtener los valores de los campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contacto = document.getElementById("contacto").value;
    var message = document.getElementById("message").value;

    // Expresión regular para validar el correo electrónico y el número de contacto
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var regexContacto = /^[0-9]{10}$/;

    // Validar el nombre (no vacío)
    if (name === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    // Validar el correo electrónico
    if (!regexEmail.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Validar el número de contacto (10 dígitos)
    if (!regexContacto.test(contacto)) {
        alert("Por favor, ingresa un número de contacto válido de 10 dígitos.");
        return false;
    }

    // Validar el mensaje (no vacío)
    if (message === "") {
        alert("Por favor, ingresa un mensaje.");
        return false;
    }

    // Si todo es correcto, se puede enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
}
