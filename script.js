// Función para apagar y encender las velas con lógica mejorada
function toggleFlame(candle) {
    let flame = candle.querySelector(".flame");

    // Obtener cuántas veces se ha apagado la vela
    let timesOff = parseInt(candle.getAttribute("data-times-off")) || 0;

    if (timesOff >= 3) {
        console.log("La vela ya no puede encenderse más.");
        return; // No hacer nada si ya se apagó 3 veces
    }

    // Apagar la llama temporalmente
    flame.style.display = "none";

    // Esperar 3 segundos antes de volver a encender la llama
    setTimeout(() => {
        if (timesOff < 2) {
            flame.style.display = "block"; // Encender si aún no alcanzó el límite
        }

        // Incrementar el contador de apagados
        candle.setAttribute("data-times-off", timesOff + 1);

        if (timesOff === 2) {
            console.log("La vela se apagará permanentemente en el siguiente intento.");
        }
    }, 3000);
}

// Función para celebrar con confeti y música
function celebrar() {
    // Lanzar confeti
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Reproducir la música de cumpleaños
    let audio = document.getElementById("birthdaySong");
    if (audio) {
        audio.play().catch(error => console.log("Error al reproducir el audio:", error));
    } else {
        console.log("No se encontró el audio.");
    }
}



function irAPagina() {
    window.location.href = "https://bixgis.github.io/Cumple_Lore1/"; 
  }
  