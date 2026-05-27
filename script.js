const field =
  document.getElementById("field");

const plantsCount =
  document.getElementById("plantsCount");

const coins =
  document.getElementById("coins");

let totalPlants = 0;
let totalCoins = 100;

// ========================
// PLANTAR
// ========================

function plantar(){

  const plant =
    document.createElement("div");

  plant.classList.add("plant");

  const randomHeight =
    Math.floor(Math.random() * 60) + 20;

  plant.style.height =
    randomHeight + "px";

  field.appendChild(plant);

  totalPlants++;

  plantsCount.innerText =
    totalPlants;

}

// ========================
// COLHER
// ========================

function colher(){

  const plants =
    document.querySelectorAll(".plant");

  if(plants.length > 0){

    plants.forEach(p => p.remove());

    totalCoins += totalPlants * 10;

    coins.innerText =
      totalCoins;

    totalPlants = 0;

    plantsCount.innerText =
      totalPlants;

    alert("🚜 Colheita realizada!");

  }else{

    alert("🌱 Nenhuma plantação!");

  }

}

// ========================
// PERSONAGEM MOVIMENTO
// ========================

const player =
  document.getElementById("player");

let x = window.innerWidth / 2;
let y = window.innerHeight - 220;

document.addEventListener("keydown", (e) => {

  if(e.key === "ArrowRight"){
    x += 20;
  }

  if(e.key === "ArrowLeft"){
    x -= 20;
  }

  if(e.key === "ArrowUp"){
    y -= 20;
  }

  if(e.key === "ArrowDown"){
    y += 20;
  }

  player.style.left = x + "px";
  player.style.top = y + "px";

});