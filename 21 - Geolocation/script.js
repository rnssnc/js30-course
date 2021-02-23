let arrow = document.querySelector('.arrow');
let speed = document.querySelector('.speed');

navigator.geolocation.watchPosition(
  (data) => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    console.log(data.coords.heading);
  },
  (err) => {
    console.log(err);
  }
);
