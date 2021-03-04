const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

let countdown;

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  console.log(seconds);
  const [minutes, remainderSeconds] = [Math.floor(seconds / 60), seconds % 60];
  const display = `${minutes}:${remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timespamp) {
  const end = new Date(timespamp);
  endTimeDisplay.textContent = `Ends in: ${end.getHours()}:${
    end.getMinutes() < 10 ? `0${end.getMinutes()}` : end.getMinutes()
  }`;
}

function startTimer() {
  timer(parseInt(this.dataset.time));
}

buttons.forEach((button) => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
