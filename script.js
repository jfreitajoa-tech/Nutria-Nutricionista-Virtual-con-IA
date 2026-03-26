const nutria = document.getElementById("nutria");
const inputChat = document.getElementById("inputChat");
const chatContainer = document.getElementById("chatContainer");
const burbuja = document.getElementById("burbujaNutria");
const chat = document.getElementById("chat");
const botonEnviar = document.getElementById("btnEnviar");
const btnHablar = document.getElementById("btnHablarNutria");
const btnCerrar = document.getElementById("btnCerrarChat");

let chatAbierto = false;

// Funciones para abrir y cerrar el chat
function abrirChat() {
    chatAbierto = true;

    if (burbuja) {
        burbuja.classList.remove("visible");
    }

    if (chatContainer) {
        chatContainer.classList.remove("hidden");
    }

    if (nutria) {
        nutria.classList.add("emocion");
        setTimeout(() => {
            nutria.classList.remove("emocion");
        }, 700);
    }
}

function cerrarChat() {
    chatAbierto = false;

    if (chatContainer) {
        chatContainer.classList.add("hidden");
    }
}

if (nutria) {
    nutria.addEventListener("click", () => {
        if (chatAbierto) {
            cerrarChat();
        } else {
            abrirChat();
        }
    });
}

if (btnCerrar) {
    btnCerrar.addEventListener("click", cerrarChat);
}

if (btnHablarNutria) {
    btnHablarNutria.addEventListener("click", abrirChat);
}

if (inputChat) {
    inputChat.addEventListener("input", () => {
        if (nutria) {
            nutria.classList.add("activa");
            setTimeout(() => {
                nutria.classList.remove("activa");
            }, 300);
        }
    });

    inputChat.addEventListener("focus", () => {
        if (nutria) nutria.classList.add("mirar");
    });

    inputChat.addEventListener("blur", () => {
        if (nutria) nutria.classList.remove("mirar");
    });

    inputChat.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            responder();
        }
    });
}

if (botonEnviar) {
    botonEnviar.addEventListener("click", responder);
}

// Función para generar respuestas de Nutria
function responder() {
    if (!inputChat || !chat) return;

    const textoOriginal = inputChat.value.trim();
    const texto = textoOriginal.toLowerCase();

    if (!textoOriginal) return;

    chat.innerHTML += `
        <div class="text-right">
            <div class="bg-gray-200 p-2 rounded-lg inline-block">
                ${textoOriginal}
            </div>
        </div>
    `;

    let respuesta = "Mmm… no estoy segura de entenderte. ¿Puedes explicármelo un poco más?🤔";

    if (texto.includes("peso")) {
        respuesta = "Si quieres bajar de peso, lo más importante es mantener un pequeño déficit calórico. Podemos empezar ajustando tus comidas paso a paso 💪";
    } else if (texto.includes("musculo")) {
        respuesta = "Para ganar músculo necesitas proteína y algo de entrenamiento de fuerza. Si quieres, puedo ayudarte a organizar tus comidas 🥩🏋️";
    } else if (texto.includes("desayuno")) {
        respuesta = "Un buen desayuno debería darte energía sin pesarte. Por ejemplo: proteína + grasa saludable + algo de carbohidrato 🍳🥑";
    } else if (texto.includes("cena")) {
        respuesta = "Para la cena, mejor algo ligero y fácil de digerir. Proteína + verduras suele funcionar muy bien 🌙";
    } else if (texto.includes("hola")) {
        respuesta = "¡Hola! 😊 Soy Nutria. Cuéntame, ¿qué te gustaría mejorar hoy?";
    }

    setTimeout(() => {
        chat.innerHTML += `
            <div class="bg-pink-100 p-2 rounded-lg w-fit mt-2">
                ${respuesta}
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;

        if (nutria) {
            nutria.classList.add("emocion");
            setTimeout(() => {
                nutria.classList.remove("emocion");
            }, 700);
        }
    }, 500);

    inputChat.value = "";
}

// Animación inicial de la silueta y aparición de Nutria
document.addEventListener("DOMContentLoaded", () => {
    const path = document.getElementById("nutria-silueta");
    const silueta = document.getElementById("svg-silueta");
    const nutria = document.getElementById("nutria");
    const burbuja = document.getElementById("burbujaNutria");

    if (!path || !silueta || !nutria || !burbuja) return;

    const longitud = path.getTotalLength();
    path.style.setProperty("--longitud", longitud);

    setTimeout(() => {
        silueta.classList.add("oculta");
        nutria.classList.add("visible");

        setTimeout(() => {
            burbuja.classList.add("visible");
        }, 700);
    }, 8000);
});