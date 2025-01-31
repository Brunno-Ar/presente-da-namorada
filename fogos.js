function soltarFogos() {
    const fogosContainer = document.querySelector(".fogos");
    if (!fogosContainer) return; // Evita erro se o container não existir

    fogosContainer.innerHTML = ""; // Limpa fogos anteriores

    for (let i = 0; i < 10; i++) {
        let fogo = document.createElement("div");
        fogo.className = "fogo";
        fogo.style.left = Math.random() * 100 + "vw";
        fogo.style.top = Math.random() * 100 + "vh";
        fogosContainer.appendChild(fogo);

        // Remove fogo após a animação
        setTimeout(() => fogo.remove(), 1000);
    }
}
