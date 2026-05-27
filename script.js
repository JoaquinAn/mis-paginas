const boton = document.getElementById('miBoton');
const imagen = document.getElementById('miImagen');

boton.addEventListener('click', () => {
    // toggle() hace magia: si la clase 'oculto' está, la saca (muestra la imagen). 
    // Si no está, la pone (vuelve a esconder la imagen).
     imagen.classList.toggle('oculto');
    // Opcional: Cambiamos el texto del botón según el estado de la imagen
    if (imagen.classList.contains('oculto')) {
        boton.textContent  = 'Presss';
    } else {
        boton.textContent = 'ocultar imagen'
    }
    });