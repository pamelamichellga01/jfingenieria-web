document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.carrusel-item');
    let indiceActual = 0;

    document.getElementById('anterior').addEventListener('click', function() {
        imagenes[indiceActual].classList.remove('activo');
        indiceActual = (indiceActual > 0) ? indiceActual - 1 : imagenes.length - 1;
        imagenes[indiceActual].classList.add('activo');
    });

    document.getElementById('siguiente').addEventListener('click', function() {
        imagenes[indiceActual].classList.remove('activo');
        indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
        imagenes[indiceActual].classList.add('activo');
    });

    // Mostrar la primera imagen al cargar
    imagenes[indiceActual].classList.add('activo');
});
