// Mensagem de boas-vindas
window.onload = function() {
    alert("Bem-vindo ao site sobre Equilíbrio entre Produção e Meio Ambiente!");
};

// Botão voltar ao topo
const botaoTopo = document.createElement("button");
botaoTopo.innerHTML = "↑";
botaoTopo.classList.add("botao-topo");
document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Destacar seção ao clicar no menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        alert(`Você está acessando a seção: ${link.textContent}`);
    });
});