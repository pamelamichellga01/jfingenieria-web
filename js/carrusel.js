document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.carrusel-item');
    let indiceActual = 0;
    let intervalo;

    // Contenedor de indicadores
    const indicadores = document.querySelector('.indicadores');

    // Generar indicadores dinámicamente
    imagenes.forEach((_, i) => {
        const indicador = document.createElement('span');
        indicador.classList.add('indicador');
        if (i === indiceActual) indicador.classList.add('activo'); // Activo en la primera imagen
        indicadores.appendChild(indicador);
    });

    // Función para mostrar la imagen en el índice actual y actualizar indicadores
    function mostrarImagen(indice) {
        imagenes.forEach((img, i) => img.classList.toggle('activo', i === indice));
        actualizarIndicadores(); // Actualiza el estado de los indicadores
    }

    // Función para actualizar los indicadores
    function actualizarIndicadores() {
        const todosIndicadores = document.querySelectorAll('.indicador');
        todosIndicadores.forEach((ind, i) => {
            ind.classList.toggle('activo', i === indiceActual);
        });
    }

    // Función para avanzar el carrusel automáticamente
    function avanzarCarrusel() {
        indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
        mostrarImagen(indiceActual);
    }

    // Función para reiniciar el intervalo del desplazamiento automático
    function reiniciarIntervalo() {
        clearInterval(intervalo);
        intervalo = setInterval(avanzarCarrusel, 3000); // Ajusta el tiempo a 3 segundos
    }

    // Control de botones anterior y siguiente
    document.getElementById('anterior').addEventListener('click', function() {
        indiceActual = (indiceActual > 0) ? indiceActual - 1 : imagenes.length - 1;
        mostrarImagen(indiceActual);
        reiniciarIntervalo(); // Reinicia el intervalo al hacer clic
    });

    document.getElementById('siguiente').addEventListener('click', function() {
        indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
        mostrarImagen(indiceActual);
        reiniciarIntervalo(); // Reinicia el intervalo al hacer clic
    });

    // Añadir la funcionalidad de hacer clic en un indicador para cambiar de imagen
    document.querySelectorAll('.indicador').forEach((indicador, i) => {
        indicador.addEventListener('click', function() {
            indiceActual = i;
            mostrarImagen(indiceActual);
            reiniciarIntervalo();
        });
    });

    // Mostrar la primera imagen al cargar y activar desplazamiento automático
    mostrarImagen(indiceActual);
    intervalo = setInterval(avanzarCarrusel, 3000); // Inicia el desplazamiento automático

    // Cambio de tema y cambio de ícono
    const themeToggleButton = document.getElementById('theme-toggle');
    const iconDiurno = document.getElementById('icon-diurno');
    const iconNocturno = document.getElementById('icon-nocturno');

    // Establece el estado inicial para que solo una imagen esté visible
    iconDiurno.style.display = "block";
    iconNocturno.style.display = "none";

    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('night-mode');

        if (document.body.classList.contains('night-mode')) {
            iconDiurno.style.display = "none";
            iconNocturno.style.display = "block";
        } else {
            iconDiurno.style.display = "block";
            iconNocturno.style.display = "none";
        }
    });
});
