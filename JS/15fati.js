document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("musica");

    // 🎭 abrir cortina
    document.querySelector(".izquierda").classList.add("abrir");
    document.querySelector(".derecha").classList.add("abrir");

    // 🎵 música
    audio.volume = 0.3;

    // intentar autoplay
    audio.play().catch(() => {

        // si el navegador bloquea, esperar un click
        const iniciarAudio = () => {
            audio.play();

            document.removeEventListener("click", iniciarAudio);
            document.removeEventListener("touchstart", iniciarAudio);
        };

        document.addEventListener("click", iniciarAudio);
        document.addEventListener("touchstart", iniciarAudio);
    });

    // ⏳ CONTADOR
    const fechaFiesta = new Date('July 18, 2026 21:00:00').getTime();

    setInterval(() => {

        const ahora = new Date().getTime();
        const diferencia = fechaFiesta - ahora;

        document.getElementById('days').innerText =
            Math.floor(diferencia / (1000 * 60 * 60 * 24));

        document.getElementById('hours').innerText =
            Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById('minutes').innerText =
            Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('seconds').innerText =
            Math.floor((diferencia % (1000 * 60)) / 1000);

    }, 1000);

    // 📜 SCROLL ANIMACIÓN
    const elementos = document.querySelectorAll('.fade-up');

    const mostrarElementos = () => {

        elementos.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 80) {
                el.classList.add('show');
            }

        });

    };

    mostrarElementos();

    window.addEventListener('scroll', mostrarElementos);

    // 🦋 MARIPOSAS
    const container = document.querySelector(".butterflies");

    function crearMariposa() {

        const butterfly = document.createElement("div");
        butterfly.classList.add("butterfly");

        // posición aleatoria
        butterfly.style.left = Math.random() * 100 + "vw";

        // tamaño aleatorio
        const size = Math.random() * 30 + 30;

        butterfly.style.width = size + "px";
        butterfly.style.height = size + "px";

        // duración aleatoria
        const duration = Math.random() * 8 + 10;
        butterfly.style.animationDuration = duration + "s";

        container.appendChild(butterfly);

        // eliminar después
        setTimeout(() => {
            butterfly.remove();
        }, duration * 1000);
    }

    // 🦋 MUCHAS MARIPOSAS
    setInterval(() => {

        crearMariposa();

    }, 800);

});