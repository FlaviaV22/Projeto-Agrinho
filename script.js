// CALCULADORA

function calcularImpacto() {

  let hectares =
    document.getElementById("hectares").value;

  let economiaAgua = hectares * 500;

  document.getElementById("resultado")
    .innerHTML =
    `Economia estimada:
    ${economiaAgua} litros de água`;
}


// CHART.JS

const ctx =
document.getElementById('grafico');

new Chart(ctx, {
  type: 'bar',

  data: {
    labels: [
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023'
    ],

    datasets: [{
      label: 'Produção Sustentável',

      data: [
        12,
        19,
        25,
        30,
        40,
        52
      ],

      backgroundColor: '#2e7d32'
    }]
  },

  options: {
    responsive: true
  }
});