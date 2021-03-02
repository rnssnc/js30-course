function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key.charCodeAt(0)}"]`);
  if (!audio) return;

  audio.currentTime = 0; //Проиграть не дожидаясь конца текущего выполенения
  audio.play();

  const key = document.querySelector(`.key[data-key="${e.key.charCodeAt(0)}"]`);
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll(`.key`);
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
