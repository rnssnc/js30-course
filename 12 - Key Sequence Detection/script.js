const pressed = [];
const secretCode = 'rnssnc';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  console.log(pressed);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('wow');
    cornify_add();
  }
});
