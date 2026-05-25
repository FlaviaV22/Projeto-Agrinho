let pontos = 0;
let moedas = 0;

let missaoAtual = "";

const missoes = [

  "🌳 Plantar árvores",
  "♻️ Recolher lixo",
  "💧 Economizar água",
  "☀️ Instalar energia solar"

];

function iniciarJogo() {

  document.getElementById("inicio")
    .classList.add("escondido");

  document.getElementById("cidadeTela")
    .classList.remove("escondido");

  novaMissao();
}

function novaMissao() {

  let sorteio =
    Math.floor(Math.random() * missoes.length);

  missaoAtual = missoes[sorteio];

  document.getElementById("missao-texto")
    .innerText = missaoAtual;
}

function abrirMissao() {

  document.getElementById("cidadeTela")
    .classList.add("escondido");

  document.getElementById("missaoTela")
    .classList.remove("escondido");

  document.getElementById("tituloMissao")
    .innerText = missaoAtual;

  carregarCenario();
}

function carregarCenario() {

  let area =
    document.getElementById("areaMissao");

  /* CENÁRIOS */

  if (missaoAtual === "🌳 Plantar árvores") {

    area.innerHTML = "🌱";

  }

  else if (missaoAtual === "♻️ Recolher lixo") {

    area.innerHTML = "🗑️";

  }

  else if (missaoAtual === "💧 Economizar água") {

    area.innerHTML = "🚰";

  }

  else if (missaoAtual === "☀️ Instalar energia solar") {

    area.innerHTML = "🏠";

  }
}

function executarMissao() {

  let area =
    document.getElementById("areaMissao");

  /* RESULTADO DA MISSÃO */

  if (missaoAtual === "🌳 Plantar árvores") {

    area.innerHTML = "🌳 🌳 🌳";

  }

  else if (missaoAtual === "♻️ Recolher lixo") {

    area.innerHTML = "♻️";

  }

  else if (missaoAtual === "💧 Economizar água") {

    area.innerHTML = "💧";

  }

  else if (missaoAtual === "☀️ Instalar energia solar") {

    area.innerHTML = "☀️🏠☀️";

  }

  pontos += 10;
  moedas += 5;

  atualizarPainel();

  alert("✅ Missão concluída!");
}

function voltarCidade() {

  document.getElementById("missaoTela")
    .classList.add("escondido");

  document.getElementById("cidadeTela")
    .classList.remove("escondido");

  novaMissao();
}

function atualizarPainel() {

  document.getElementById("pontos")
    .innerText = pontos;

  document.getElementById("moedas")
    .innerText = moedas;
}