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


