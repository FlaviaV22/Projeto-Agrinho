// Inicialização do mapa
const map = L.map('map').setView([-15.7801, -47.9292], 4);

// Camada do mapa
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; OpenStreetMap'
  }
).addTo(map);

// =========================
// ÁREAS AGRÍCOLAS
// =========================

const agricultureAreas = [
  {
    coords: [-12.5, -55.7],
    name: "Produção de Soja"
  },
  {
    coords: [-22.9, -47.0],
    name: "Cana-de-açúcar"
  },
  {
    coords: [-16.3, -49.2],
    name: "Milho Sustentável"
  }
];

agricultureAreas.forEach(area => {
  L.circle(area.coords, {
    color: '#00ff99',
    fillColor: '#00ff99',
    fillOpacity: 0.3,
    radius: 50000
  })
  .addTo(map)
  .bindPopup(`
    <b>${area.name}</b><br>
    Área monitorada
  `);
});

// =========================
// QUEIMADAS
// =========================

const fireIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/482/482839.png',
  iconSize: [32, 32]
});

const fires = [
  [-10.0, -55.0],
  [-8.5, -63.9],
  [-5.0, -60.0]
];

fires.forEach(fire => {
  L.marker(fire, { icon: fireIcon })
    .addTo(map)
    .bindPopup("🔥 Área com queimadas");
});

// =========================
// DESMATAMENTO
// =========================

const deforestation = [
  [
    [-7, -58],
    [-7, -57],
    [-6, -57],
    [-6, -58]
  ]
];

deforestation.forEach(area => {
  L.polygon(area, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5
  })
  .addTo(map)
  .bindPopup("🌳 Área de desmatamento");
});

// =========================
// GRÁFICO
// =========================

const ctx = document.getElementById('agroChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun'
    ],
    datasets: [{
      label: 'Produção sustentável',
      data: [12, 19, 25, 32, 40, 52],
      borderColor: '#00ff99',
      backgroundColor: 'rgba(0,255,153,0.2)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'white'
        }
      },
      y: {
        ticks: {
          color: 'white'
        }
      }
    }
  }
});

// =========================
// SIMULAÇÃO TEMPO REAL
// =========================

setInterval(() => {

  const fireValue =
    Math.floor(Math.random() * 500);

  const forestValue =
    Math.floor(Math.random() * 5000);

  const sustainableValue =
    Math.floor(Math.random() * 100);

  document.getElementById('fires')
    .innerText = fireValue;

  document.getElementById('forest')
    .innerText = forestValue + " ha";

  document.getElementById('sustainable')
    .innerText = sustainableValue + "%";

}, 3000);