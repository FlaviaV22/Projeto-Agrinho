let pontos = 0;
let moedas = 0;

const desafios = [

{
  pergunta: "💧 A cidade está desperdiçando água. O que fazer?",
  opcoes: [
    {
      texto: "Criar campanha de economia de água",
      correta: true
    },
    {
      texto: "Ignorar o problema",
      correta: false
    }
  ]
},

{
  pergunta: "♻️ O lixo aumentou na cidade!",
  opcoes: [
    {
      texto: "Implantar coleta seletiva",
      correta: true
    },
    {
      texto: "Jogar lixo no rio",
      correta: false
    }
  ]
},

{
  pergunta: "⚡ O consumo de energia está alto!",
  opcoes: [
    {
      texto: "Usar energia solar",
      correta: true
    },
    {
      texto: "Construir mais fábricas poluentes",
      correta: false
    }
  ]
},

{
  pergunta: "🚗 Há muito trânsito e poluição.",
  opcoes: [
    {
      texto: "Melhorar transporte público",
      correta: true
    },
    {
      texto: "Aumentar carros nas ruas",
      correta: false
    }
  ]
}

];

function iniciarJogo() {

  document.getElementById("inicio").classList.add("escondido");

  document.getElementById("jogo").classList.remove("escondido");

  novoDesafio();
}

function novoDesafio() {

  let sorteio = Math.floor(Math.random() * desafios.length);

  let desafio = desafios[sorteio];

  document.getElementById("desafio").innerText =
    desafio.pergunta;

  let opcoesHTML = "";

  desafio.opcoes.forEach(opcao => {

    opcoesHTML += `
      <button onclick="responder(${opcao.correta})">
        ${opcao.texto}
      </button>
    `;
  });

  document.getElementById("opcoes").innerHTML =
    opcoesHTML;
}

function responder(correta) {

  if (correta) {

    pontos += 10;
    moedas += 5;

    alert("✅ Boa escolha sustentável!");

  } else {

    pontos -= 5;

    alert("❌ Essa ação prejudica o meio ambiente!");
  }

  atualizarPainel();

  if (pontos >= 50) {

    alert("🏆 Parabéns! Sua cidade virou exemplo de sustentabilidade!");

    location.reload();

  } else {

    novoDesafio();
  }
}

function atualizarPainel() {

  document.getElementById("pontos").innerText = pontos;

  document.getElementById("moedas").innerText = moedas;
}