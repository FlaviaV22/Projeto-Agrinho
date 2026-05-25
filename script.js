let pontos = 0;
let moedas = 0;

const missoes = [

  "🌳 Plantar árvores na praça",
  "♻️ Recolher lixo reciclável",
  "💧 Economizar água na cidade",
  "☀️ Instalar painéis solares",
  "🚲 Incentivar uso de bicicletas",
  "🚌 Melhorar transporte público",
  "🌎 Limpar rio da cidade",
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

  alert("✅ Missão sustentável concluída!");

  if (pontos >= 100) {

    alert("🏆 Parabéns! Sua cidade virou exemplo sustentável!");

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