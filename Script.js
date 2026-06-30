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