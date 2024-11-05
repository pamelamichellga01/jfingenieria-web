function validarFormulario(event) {
    event.preventDefault(); // Evita el envío inmediato del formulario

    // Obtener los valores de los campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contacto = document.getElementById("contacto").value.trim();
    const message = document.getElementById("message").value.trim();
    const resultContainer = document.getElementById("resultado");

    // Expresiones regulares para validar el correo electrónico y el número de contacto
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexContacto = /^[0-9]{10}$/;

    let esValido = true; // Bandera para verificar si todos los campos son válidos

    // Validar el nombre (no vacío)
    if (name === "") {
        mostrarError("name", "Por favor, ingresa tu nombre.");
        esValido = false;
    } else {
        ocultarError("name");
    }

    // Validar el correo electrónico
    if (!regexEmail.test(email)) {
        mostrarError("email", "Por favor, ingresa un correo electrónico válido.");
        esValido = false;
    } else {
        ocultarError("email");
    }

    // Validar el número de contacto (10 dígitos)
    if (!regexContacto.test(contacto)) {
        mostrarError("contacto", "Por favor, ingresa un número de contacto válido de 10 dígitos.");
        esValido = false;
    } else {
        ocultarError("contacto");
    }

    // Validar el mensaje (no vacío)
    if (message === "") {
        mostrarError("message", "Por favor, ingresa un mensaje.");
        esValido = false;
    } else {
        ocultarError("message");
    }

    // Si todo es correcto, muestra la ventana de confirmación
    if (esValido) {
        resultContainer.innerHTML = `
            <div class="popup">
                <h3>Formulario Enviado</h3>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Correo electrónico:</strong> ${email}</p>
                <p><strong>Número de contacto:</strong> ${contacto}</p>
                <p><strong>Mensaje:</strong> ${message}</p>
            </div>
        `;
        resultContainer.style.display = 'block';
        document.getElementById("formularioContacto").reset(); // Limpia el formulario
    }
}

// Funciones para mostrar y ocultar mensajes de error
function mostrarError(id, mensaje) {
    const errorElement = document.getElementById(`error${id.charAt(0).toUpperCase() + id.slice(1)}`);
    errorElement.innerText = mensaje;
    errorElement.style.display = "block";
}

function ocultarError(id) {
    const errorElement = document.getElementById(`error${id.charAt(0).toUpperCase() + id.slice(1)}`);
    errorElement.style.display = "none";
}
