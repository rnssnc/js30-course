const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

let seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(':');
    return +mins * 60 + +secs;
  })
  .reduce((total, seconds) => total + seconds);

// console.log(seconds % 3600);
const hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;
const mins = Math.floor(seconds / 60);
seconds = seconds % 60;
console.log(hours, mins, seconds);
