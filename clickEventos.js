document.addEventListener("DOMContentLoaded", function () {
    let presentesSorteados = JSON.parse(sessionStorage.getItem("presentesSorteados"));

    if (!presentesSorteados || presentesSorteados.length < 3) {
        console.error("Os presentes não foram sorteados corretamente!");
        return;
    }

    // Elementos do modal
    const modal = document.getElementById("modal");
    const presenteImagem = document.getElementById("presenteImagem");
    const closeModal = document.querySelector(".close");

    // Adiciona eventos de clique nos presentes
    document.querySelectorAll(".alertaPresentes").forEach((presente, index) => {
        presente.addEventListener("click", function () {
            let presenteGanho = presentesSorteados[index];
            alert(`Seu presente: ${presenteGanho}!`);

            // Exibe o modal
            modal.style.display = "flex";

            // Solta fogos de artifício
            soltarFogos();
        });
    });

    // Fecha o modal ao clicar no botão "X"
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

