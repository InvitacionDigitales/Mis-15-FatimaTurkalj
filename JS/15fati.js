document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("musica");

    // 🎭 abrir cortina
    document.querySelector(".izquierda").classList.add("abrir");
    document.querySelector(".derecha").classList.add("abrir");

    // 🎵 volumen
    audio.volume = 0.3;

    // intentar autoplay
    const intentarAudio = async () => {

        try {

            // reproducir muteado
            audio.muted = true;

            await audio.play();

            // sacar mute después
            setTimeout(() => {

                audio.muted = false;

            }, 1000);

        } catch (error) {

            console.log("Autoplay bloqueado");

        }

    };

    intentarAudio();

    // si el navegador bloquea, al primer toque arranca
    const activarAudio = () => {

        audio.muted = false;

        audio.play();

        document.removeEventListener("click", activarAudio);
        document.removeEventListener("touchstart", activarAudio);

    };

    document.addEventListener("click", activarAudio);
    document.addEventListener("touchstart", activarAudio);

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

    // 📜 animaciones scroll
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

    // 🦋 mariposas
    const container = document.querySelector(".butterflies");

    function crearMariposa() {

        const butterfly = document.createElement("div");

        butterfly.classList.add("butterfly");

        butterfly.style.left = Math.random() * 100 + "vw";

        const size = Math.random() * 30 + 30;

        butterfly.style.width = size + "px";
        butterfly.style.height = size + "px";

        const duration = Math.random() * 8 + 10;

        butterfly.style.animationDuration = duration + "s";

        container.appendChild(butterfly);

        setTimeout(() => {

            butterfly.remove();

        }, duration * 1000);

    }

    setInterval(() => {

        crearMariposa();

    }, 800);

});