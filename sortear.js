document.addEventListener("DOMContentLoaded", function () {
    const opcoesPresentes = [
        "Vale beijo 😘",
        "Sushi da praça 🍣",
        "Pizza da praça 🍕",
        "Kit 4 unhas postiças 💅",
        "Album do BTS 🎤",
        "Kit de desenho 🎨",
        "Surpresa especial 😈"
    ];

    function sortearPresentes() {
        let opcoesEmbaralhadas = [...opcoesPresentes].sort(() => Math.random() - 0.5);
        let presentesSorteados = opcoesEmbaralhadas.slice(0, 3);
        sessionStorage.setItem("presentesSorteados", JSON.stringify(presentesSorteados));
    }

    sortearPresentes();
});
