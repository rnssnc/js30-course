secondHand = document.querySelector('.second-hand');
minHand = document.querySelector('.min-hand');
hourHand = document.querySelector('.hour-hand');

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

  console.log(mins);

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
