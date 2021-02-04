const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hi');

// Styled
console.log(
  '%c Some text',
  'font-size: 30px; color: white; background: red; text-shadow: 10px 10px 0 blue'
);
// warning!
console.warn('heyho');
// Error :|
console.error('seems like an error');
// Info
console.info('y');
// Testing
console.assert(1 === 2, 'wow');
// clearing
//console.clear()

// Viewing DOM Elements
//console.dir
// Grouping together
// console.group()
// console.groupCollapsed()
// counting
console.count('y');
console.count('y');
console.count('y');
console.count('y');
console.count('y');
// timing
console.time('fetching');
console.timeEnd('fetching');
