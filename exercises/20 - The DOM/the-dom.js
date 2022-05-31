// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);
// //set the text content on that element
// // heading.textContent = 'Wes is cool';
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} +pizza`;
// pizzaList.insertAdjacentText('afterbegin', `pizza`);
// pizzaList.insertAdjacentText('beforeend', `pizza`);


//classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.alt = 'Cute Pup'; //setter
console.log(pic.alt); //getter
console.log(pic.naturalWidth); //getterx
pic.width = 200;

// pic.setAttribute('wes-is-cool', 'REALLY CUTE PUP');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
})