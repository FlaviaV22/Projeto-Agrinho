let energia = 50;
let reciclagem = 50;
let transporte = 50;
let agua = 50;
let pontos = 0;

function atualizarTela() {
  document.getElementById("energia").innerText = energia;
  document.getElementById("reciclagem").innerText = reciclagem;
  document.getElementById("transporte").innerText = transporte;
  document.getElementById("agua").innerText = agua;
  document.getElementById("pontos").innerText = pontos;

  verificarJogo();
}

function energiaSolar() {
  energia += 10;
  agua -= 2;
  pontos += 15;

  mensagem("☀️ Energia limpa instalada!");
  atualizarTela();
}

function coletaSeletiva() {
  reciclagem += 10;
  pontos += 15;

  mensagem("♻️ A cidade agora recicla mais lixo!");
  atualizarTela();
}

function melhorarTransporte() {
  transporte += 10;
  energia -= 3;
  pontos += 15;

  mensagem("🚌 Transporte público melhorado!");
  atualizarTela();
}

function economizarAgua() {
  agua += 10;
  pontos += 15;

  mensagem("💧 Campanha de economia de água realizada!");
  atualizarTela();
}

function mensagem(texto) {
  document.getElementById("mensagem").innerText = texto;
}

function verificarJogo() {

  if (
    energia <= 0 ||
    reciclagem <= 0 ||
    transporte <= 0 ||
    agua <= 0
  ) {
    mensagem("❌ Sua cidade entrou em crise ambiental!");
    desativarBotoes();
  }

  if (pontos >= 100) {
    mensagem("🏆 Parabéns! Sua cidade é sustentável!");
    desativarBotoes();
  }
}

function desativarBotoes() {
  let botoes = document.querySelectorAll("button");

  botoes.forEach(botao => {
    botao.disabled = true;
    botao.style.background = "gray";
  });
}