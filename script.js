let pontos = 0;
let moedas = 0;

const missoes = [

  "🌳 Plantar árvores na cidade",
  "♻️ Recolher lixo reciclável",
  "💧 Economizar água",
  "☀️ Instalar energia solar",
  "🚲 Incentivar bicicletas",
  "🚌 Melhorar transporte público",
  "🌎 Limpar rios",
  "🌱 Criar horta comunitária"

];

function iniciarJogo() {

  document.getElementById("inicio")
    .classList.add("escondido");

  document.getElementById("jogo")
    .classList.remove("escondido");

  novaMissao();
}

function novaMissao() {

  let sorteio =
    Math.floor(Math.random() * missoes.length);

  document.getElementById("missao-texto")
    .innerText = missoes[sorteio];
}

function cumprirMissao() {

  pontos += 10;
  moedas += 5;

  atualizarPainel();

  animarPersonagem();

  if (pontos >= 100) {

    alert("🏆 Sua cidade virou exemplo sustentável!");

    location.reload();

  } else {

    novaMissao();
  }
}

function atualizarPainel() {

  document.getElementById("pontos")
    .innerText = pontos;

  document.getElementById("moedas")
    .innerText = moedas;
}

function animarPersonagem() {

  let personagem =
    document.getElementById("personagem");

  personagem.innerHTML = "🦸‍♀️";

  setTimeout(() => {

    personagem.innerHTML = "👧";

  }, 500);
}