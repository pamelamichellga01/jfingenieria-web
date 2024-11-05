document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.carrusel-item');
    let indiceActual = 0;
    let intervalo;

    // Contenedor de indicadores
    const indicadores = document.querySelector('.indicadores');

    if (!indicadores) {
        console.error('No se encontró el contenedor de indicadores en el DOM');
        return;
    }

    // Generar indicadores dinámicamente
    imagenes.forEach((_, i) => {
        const indicador = document.createElement('span');
        indicador.classList.add('indicador');
        if (i === indiceActual) indicador.classList.add('activo');
        indicadores.appendChild(indicador);
    });

    function mostrarImagen(indice) {
        imagenes.forEach((img, i) => img.classList.toggle('activo', i === indice));
        actualizarIndicadores();
    }

    function actualizarIndicadores() {
        const todosIndicadores = document.querySelectorAll('.indicador');
        todosIndicadores.forEach((ind, i) => {
            ind.classList.toggle('activo', i === indiceActual);
        });
    }

    function avanzarCarrusel() {
        indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
        mostrarImagen(indiceActual);
    }

    function reiniciarIntervalo() {
        clearInterval(intervalo);
        intervalo = setInterval(avanzarCarrusel, 3000);
    }

    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');

    if (botonAnterior) {
        botonAnterior.addEventListener('click', function() {
            indiceActual = (indiceActual > 0) ? indiceActual - 1 : imagenes.length - 1;
            mostrarImagen(indiceActual);
            reiniciarIntervalo();
        });
    } else {
        console.error('No se encontró el botón anterior en el DOM');
    }

    if (botonSiguiente) {
        botonSiguiente.addEventListener('click', function() {
            indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
            mostrarImagen(indiceActual);
            reiniciarIntervalo();
        });
    } else {
        console.error('No se encontró el botón siguiente en el DOM');
    }

    document.querySelectorAll('.indicador').forEach((indicador, i) => {
        indicador.addEventListener('click', function() {
            indiceActual = i;
            mostrarImagen(indiceActual);
            reiniciarIntervalo();
        });
    });

    mostrarImagen(indiceActual);
    intervalo = setInterval(avanzarCarrusel, 3000);

    const themeToggleButton = document.getElementById('theme-toggle');
    const iconDiurno = document.getElementById('icon-diurno');
    const iconNocturno = document.getElementById('icon-nocturno');

    if (themeToggleButton) {
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
    } else {
        console.error('No se encontró el botón de cambio de tema en el DOM');
    }
});
