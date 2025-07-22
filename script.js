document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const content = document.getElementById('content');
    const nombreInput = document.getElementById('nombreInput');
    const submitNombreButton = document.getElementById('submitNombre');
    const nombreUsuarioSpan = document.getElementById('nombreUsuario');
    const thankYouButton = document.getElementById('thankYouButton');
    const heartRainContainer = document.getElementById('heartRainContainer');
    const thankYouModal = document.getElementById('thankYouModal');
    const thankYouNameSpan = document.getElementById('thankYouName');
    const closeThankYouModalButton = document.getElementById('closeThankYouModal');

    let nombre = ''; // Variable para almacenar el nombre durante la sesión

    // Mostrar el modal principal al cargar
    modal.style.display = 'flex';
    thankYouModal.style.display = 'none';

    // Evento al enviar nombre
    submitNombreButton.addEventListener('click', () => {
        const valor = nombreInput.value.trim();
        if (valor) {
            nombre = valor;

            // Mostrar contenido principal
            modal.style.display = 'none';
            content.style.display = 'block';
            nombreUsuarioSpan.textContent = nombre;

            // Lluvia de corazones y rosas
            startHeartRain();
        }
    });

    // Botón para mostrar mensaje de agradecimiento
    thankYouButton.addEventListener('click', () => {
        if (nombre) {
            thankYouModal.style.display = 'flex';
            thankYouNameSpan.textContent = nombre;
        }
    });

    // Botón para cerrar el mensaje de agradecimiento
    closeThankYouModalButton.addEventListener('click', () => {
        thankYouModal.style.display = 'none';
    });

    // Crear corazones o rosas aleatoriamente
function createFallingElement() {
    const element = document.createElement('span');
    element.classList.add('rain-heart');

    // Usamos emoji ❤️ en lugar de &hearts; para asegurar color rojo
    element.innerHTML = Math.random() < 0.5 ? '❤️' : '🌹';

    element.style.left = `${Math.random() * 100}vw`;
    element.style.animationDuration = `${Math.random() * 2 + 2}s`;
    heartRainContainer.appendChild(element);

    element.addEventListener('animationend', () => {
        element.remove();
    });
}


    function startHeartRain() {
        const interval = setInterval(createFallingElement, 100);
        setTimeout(() => clearInterval(interval), 2000);
    }
});
