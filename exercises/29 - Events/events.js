/* eslint-disable no-undef */
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('It Got Clicked!!!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('BUYING ITEM');
}

function attachListener(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
}

buyButtons.forEach(attachListener);

// buyButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('You clicked it!');
//   });
// });
