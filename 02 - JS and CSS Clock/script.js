secondHand = document.querySelector('.second-hand');
minHand = document.querySelector('.min-hand');
hourHand = document.querySelector('.hour-hand');

var options = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  document.querySelector('.text-date').innerHTML = `${
    hours < 10 ? '0' + hours : hours
  }:${mins < 10 ? '0' + mins : mins}:${
    seconds < 10 ? '0' + seconds : seconds
  } ${now.toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })}`;

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minsDegress = (mins / 60) * 360 + 90;
  const hoursDegress = (hours / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegress}deg)`;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`;
}

setInterval(setDate, 1000);
