let btn = document.querySelector("button");
let ctx = null;
let tileW = 20;
let tileH = 20;
let mapW = 40;
let mapH = 40;

let gameMap = [];

function genMap() {
  for (let i = 0; i < mapH * tileH; i++) {
    let randNo = Math.floor(Math.random() * 4);
    if (randNo === 0) {
      let randNo1 = Math.floor(Math.random() * 2);
      gameMap.push(randNo1);
    } else if (randNo === 1) {
      let randNo2 = Math.floor(Math.random() * 2 + 1);
      gameMap.push(randNo2);
    } else if (randNo === 2) {
      let randNo3 = Math.floor(Math.random() * 2 + 2);
      gameMap.push(randNo3);
    } else {
      gameMap.push(randNo);
    }
  }
}

window.onload = function () {
  ctx = document.querySelector("#map").getContext("2d");
  requestAnimationFrame(drawGame);
  ctx.font = "bold 10pt sans-serif";
  genMap();
};

function drawGame() {
  if (ctx === null) {
    return;
  }
  for (let y = 0; y < mapH; y++) {
    for (let x = 0; x < mapW; x++) {
      switch (gameMap[y * mapW + x]) {
        case 0:
          ctx.fillStyle = "#0f0f87"; //water
          break;
        case 1:
          ctx.fillStyle = "#708090"; //rock
          break;
        case 2:
          ctx.fillStyle = "#228B22"; //grass
          break;
        case 3:
          ctx.fillStyle = "#376137"; //forest
          break;
      }
      ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
    }
  }
  requestAnimationFrame(drawGame);
}

btn.addEventListener("click", function () {
  window.location.reload();
});
