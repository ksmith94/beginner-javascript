/* eslint-disable*/
function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(Math.random() * (max - min) + min);
}

// async for of loop
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for(const letter of text) {
//     console.log(letter);
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     console.log(el.dataset);
//     const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// Recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    // exit condition
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if(index <= text.length) {
      drawLetter(); 
      // wait for some time
    }
  }
  // when this function draw() runs, kick off drawLetter
  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);
