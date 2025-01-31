document.addEventListener("DOMContentLoaded", function () {
    let presentesSorteados = JSON.parse(sessionStorage.getItem("presentesSorteados"));

    if (!presentesSorteados || presentesSorteados.length < 3) {
        console.error("Os presentes não foram sorteados corretamente!");
        return;
    }

    document.querySelectorAll(".alertaPresentes").forEach((presente, index) => {
        presente.addEventListener("click", function () {
            alert(`Seu presente: ${presentesSorteados[index]}!`);
        });
    });
});

