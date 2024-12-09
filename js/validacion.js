// Simulación de base de datos (usuarios) con JSON
const usuarios = [
    {
        nombre: 'Nataly',
        password: 'clave123'
    },
    {
        nombre: 'Juan',
        password: 'contrasena456'
    }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const password = document.getElementById('password').value.trim();

    // Limpiar mensajes de error
    document.getElementById('nombreError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('loginError').style.display = 'none';

    let isValid = true;

    // Validar que el nombre no esté vacío y solo contenga letras
    const nombreRegex = /^[A-Za-z\s]+$/;
    if (nombre === "" || !nombreRegex.test(nombre)) {
        document.getElementById('nombreError').style.display = 'block';
        document.getElementById('nombreError').textContent = 'El nombre debe contener solo letras y no puede estar vacío.';
        isValid = false;
    }

    // Validar que la contraseña tenga al menos 8 caracteres
    if (password === "" || password.length < 8) {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 8 caracteres.';
        isValid = false;
    }

    if (isValid) {
        // Verificar las credenciales con el JSON de usuarios
        const usuarioEncontrado = usuarios.find(user => user.nombre === nombre && user.password === password);

        if (usuarioEncontrado) {
            alert('Inicio de sesión exitoso');
            window.location.href = 'dashboard.html'; // Cambiar a la página que quieras cargar
        
        } else {
            document.getElementById('loginError').style.display = 'block';
            document.getElementById('loginError').textContent = 'Nombre o contraseña incorrectos.';
        }
    }
});
