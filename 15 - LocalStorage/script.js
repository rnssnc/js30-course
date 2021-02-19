const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  items.push({
    text,
    done: false,
  });
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map(
      (plate, i) => `
  <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      } />
    <label for="item${i}">${plate.text}</label>
  </li>`
    )
    .join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const element = e.target;
  const elementIndex = element.dataset.index;
  console.log(items[elementIndex].done);
  items[elementIndex].done = !items[elementIndex].done;
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);

itemsList.addEventListener('click', toggleDone);

console.log('yep');
populateList(items, itemsList);
