const playlists = {
    feliz: [
        ["Louve Samuel Messias Lukas Agustinho"],
        ["Grato Sou FHOP Music"]
    ],

    relaxado: [
        ["Boa Parte FHOP Musica"],
        ["AH Jesus/ Coração Igual Ao Teu, Jhulianny Souza"]
    ],

    triste: [
        ["Lindo Momento Jhulianny Souza"],
        ["O Quao Lindo Esse Nome E"]
    ],

    motivado: [
        ["Tu Es Poderoso, Gabriela Rocha"],
        ["Grato Por Seu Amor , Get Workship"]
        ["Novo Dia, Get Workship"]
    ],

    festa: [
        ["Louve, Samuel Messias "],
        [" Algo Novo Vindo  Get Worship"]
        [""]
    ]
};

function gerarPlaylist() {
    const humor = document.getElementById("humor").value;
    const lista = document.getElementById("playlist");

    const playlistAleatoria =
        playlists[humor][Math.floor(Math.random() * playlists[humor].length)];

    lista.innerHTML = "";

    playlistAleatoria.forEach(musica => {
        const item = document.createElement("li");
        item.textContent = musica;
        lista.appendChild(item);
    });

    mudarTema(humor);
}

function mudarTema(humor) {
    const body = document.body;

    switch (humor) {
        case "feliz":
            body.style.background = "linear-gradient(135deg, #FFD700, #FF8C00)";
            break;

        case "relaxado":
            body.style.background = "linear-gradient(135deg, #4facfe, #00f2fe)";
            break;

        case "triste":
            body.style.background = "linear-gradient(135deg, #434343, #463c3c)";
            break;

        case "motivado":
            body.style.background = "linear-gradient(135deg, #ff512f, #dd2476)";
            break;

        case "festa":
            body.style.background = "linear-gradient(135deg, #8e2de2, #4a00e0)";
            break;
    }
}

window.onload = function () {
    gerarPlaylist();
};

function mudarTema(humor) {
    const body = document.body;
    const container = document.querySelector(".container");
    const botao = document.querySelector("button");

    body.style.transition = "background 0.6s ease";
    container.style.transition = "all 0.5s ease";
    botao.style.transition = "all 0.3s ease";

    
    container.style.background = "rgba(255,255,255,0.15)";
    container.style.backdropFilter = "blur(15px)";
    container.style.borderRadius = "20px";
    container.style.padding = "30px";
    container.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
    container.style.transform = "scale(1.02)";

    botao.style.border = "none";
    botao.style.padding = "12px 20px";
    botao.style.borderRadius = "10px";
    botao.style.fontWeight = "bold";
    botao.style.cursor = "pointer";

    switch (humor) {
        case "feliz":
            body.style.background = "linear-gradient(135deg,#FFD700,#FF8C00)";
            botao.style.background = "#FFD700";
            botao.style.color = "#333";
            break;

        case "relaxado":
            body.style.background = "linear-gradient(135deg,#4facfe,#00f2fe)";
            botao.style.background = "#00c6ff";
            botao.style.color = "white";
            break;

        case "triste":
            body.style.background = "linear-gradient(135deg,#434343,#000000)";
            botao.style.background = "#555";
            botao.style.color = "white";
            break;

        case "motivado":
            body.style.background = "linear-gradient(135deg,#ff512f,#dd2476)";
            botao.style.background = "#ff512f";
            botao.style.color = "white";
            break;

        case "festa":
            body.style.background = "linear-gradient(135deg,#8e2de2,#4a00e0)";
            botao.style.background = "#8e2de2";
            botao.style.color = "white";
            break;
    }

    container.animate(
        [
            { transform: "scale(0.95)", opacity: 0.8 },
            { transform: "scale(1.02)", opacity: 1 }
        ],
        {
            duration: 500,
            easing: "ease"
        }
    );
}