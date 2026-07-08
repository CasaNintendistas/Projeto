// ===========================
// PLAYLISTS
// ===========================

const playlists = {
    feliz: [
        "Louve - Samuel Messias",
        "Grato Sou - FHOP Music",
        "Deus de Promessas - Davi Sacer",
        "Me Atraiu - Morada"
    ],

    relaxado: [
        "Boa Parte - FHOP Music",
        "Ah Jesus / Coração Igual ao Teu - Jhulianny Souza",
        "Santo Espírito - Laura Souguellis",
        "Ousado Amor - Isaías Saad"
    ],

    triste: [
        "Lindo Momento - Jhulianny Souza",
        "Quão Lindo Esse Nome É",
        "Aquieta Minh'alma - Ministério Zoe",
        "Pai Nosso - Morada"
    ],

    motivado: [
        "Tu És Poderoso - Gabriela Rocha",
        "Grato por Seu Amor - Get Worship",
        "Novo Dia - Get Worship",
        "Eu Navegarei"
    ],

    festa: [
        "Louve - Samuel Messias",
        "Algo Novo - Get Worship",
        "Aleluia - Morada",
        "Yeshua"
    ]
};

// ===========================
// TEMAS
// ===========================

const temas = {
    feliz: {
        fundo: "linear-gradient(135deg,#FFD700,#FF8C00)",
        botao: "#FFD700",
        texto: "#333"
    },

    relaxado: {
        fundo: "linear-gradient(135deg,#4facfe,#00f2fe)",
        botao: "#00bcd4",
        texto: "#fff"
    },

    triste: {
        fundo: "linear-gradient(135deg,#434343,#000000)",
        botao: "#555",
        texto: "#fff"
    },

    motivado: {
        fundo: "linear-gradient(135deg,#ff512f,#dd2476)",
        botao: "#ff512f",
        texto: "#fff"
    },

    festa: {
        fundo: "linear-gradient(135deg,#8e2de2,#4a00e0)",
        botao: "#8e2de2",
        texto: "#fff"
    }
};

// ===========================
// GERAR PLAYLIST
// ===========================

function gerarPlaylist() {

    const humor = document.getElementById("humor").value;

    const lista = document.getElementById("playlist");

    lista.innerHTML = "";

    playlists[humor].forEach((musica, index) => {

        const item = document.createElement("li");

        item.textContent = `🎵 ${musica}`;

        item.style.animationDelay = `${index * 0.15}s`;

        lista.appendChild(item);

    });

    mudarTema(humor);
}

// ===========================
// MUDAR TEMA
// ===========================

function mudarTema(humor) {

    const body = document.body;

    const container = document.querySelector(".container");

    const botao = document.querySelector("button");

    const tema = temas[humor];

    body.style.background = tema.fundo;

    body.style.transition = ".6s";

    container.style.background = "rgba(255,255,255,.12)";
    container.style.backdropFilter = "blur(20px)";
    container.style.borderRadius = "25px";
    container.style.boxShadow = "0 20px 40px rgba(0,0,0,.35)";
    container.style.transform = "scale(1.02)";
    container.style.transition = ".4s";

    botao.style.background = tema.botao;
    botao.style.color = tema.texto;
    botao.style.transition = ".3s";

    container.animate(
        [
            {
                transform: "scale(.95)",
                opacity: .7
            },

            {
                transform: "scale(1.02)",
                opacity: 1
            }
        ],
        {
            duration: 500,
            easing: "ease-out"
        }
    );

}




window.addEventListener("load", gerarPlaylist);