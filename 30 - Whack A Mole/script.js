const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;

function randomizeTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole) return randomHole(holes);

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomizeTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  console.log(e);
  if (!e.isTrusted) return;
  scoreBoard.textContent++;
  this.classList.remove('up');
}

moles.forEach((mole) => mole.addEventListener('click', bonk));
