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

function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  console.log(button);
  console.log(event.target === event.currentTarget);
  // stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('You clicked the window!');
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: true },
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', (e) => {
  console.log(e.currentTarget);
  console.log(this);
});
