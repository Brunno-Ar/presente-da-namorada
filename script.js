document.getElementById("sim").addEventListener("click", function() {
    window.location.href = "presentes.html";
});

const botaoNao = document.getElementById("nao");

botaoNao.addEventListener("mouseover", function(event) {
    const botaoWidth = botaoNao.offsetWidth;
    const botaoHeight = botaoNao.offsetHeight;

    const maxWidth = window.innerWidth - botaoWidth - 20;
    const maxHeight = window.innerHeight - botaoHeight - 20;

    let newX, newY;

    do {
        newX = Math.random() * maxWidth;
        newY = Math.random() * maxHeight;
    } while (Math.abs(newX - event.clientX) < 100 && Math.abs(newY - event.clientY) < 100);

    botaoNao.style.left = `${newX}px`;
    botaoNao.style.top = `${newY}px`;
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script carregado!"); // Teste

    // Lista de 10 possíveis presentes
    const presentes = [
        "Vale Beijo",
        "Sushi da Praça",
        "Pizza da Praça",
        "Kit 4 Unhas Postiças",
        "Algum do BTS",
        "Kit de Desenho",
        "Chocolate",
        "Pelúcia",
        "Chaveiro Fofo",
        "Cartão Especial"
    ];

    const container = document.getElementById("presentes-container");

    // Se o contêiner não for encontrado, exiba um erro
    if (!container) {
        console.error("Erro: Não encontrou a div #presentes-container");
        return;
    }

    // Sorteia 3 presentes aleatórios da lista
    function sortearPresentes() {
        let sorteados = [];
        while (sorteados.length < 3) {
            let presenteAleatorio = presentes[Math.floor(Math.random() * presentes.length)];
            if (!sorteados.includes(presenteAleatorio)) {
                sorteados.push(presenteAleatorio);
            }
        }
        console.log("Presentes sorteados:", sorteados); // Teste
        return sorteados;
    }

    // Exibir os 3 presentes na tela
    function mostrarPresentes() {
        const presentesSorteados = sortearPresentes();

        presentesSorteados.forEach(presente => {
            let img = document.createElement("img");
            img.src = "img/gift.png"; // Caminho corrigido da imagem
            img.classList.add("presente");
            img.alt = "Presente Misterioso";

            // Adiciona evento de clique para revelar o presente
            img.addEventListener("click", function() {
                alert(`Parabéns! Você ganhou: ${presente}`);
            });

            container.appendChild(img);
        });
    }

    mostrarPresentes();
});
