// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
li1.textContent = 'One';
const li2 = document.createElement('li');
li2.textContent = 'Two';
const li3 = document.createElement('li');
li3.textContent = 'Three';

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);

// put that list into the above wrapper
myDiv.insertAdjacentElement('afterbegin', list);

// create an image
myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://source.unsplash.com/random/300x300';

// set the width to 250
myImage.width = 250;
myImage.height = 250;

// add a class of cute
myImage.classList.add('Cute');

// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';

// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="pDiv">
        <p>This is my HTML</p>
        <p>This is a second paragraph in my HTML</p>
    </div>
`;
// put this div before the unordered list from above
console.log(list);
list.insertAdjacentHTML('beforebegin', myHTML);

// const item = document.createElement('div');
// item.innerHTML = myHTML;
// myDiv.insertAdjacentElement('afterbegin', item);

// add a class to the second paragraph called warning
const pDiv = myDiv.querySelector('.pDiv');
pDiv.children[1].classList.add('Warning!');
// remove the first paragraph
myDiv.firstElementChild.firstElementChild.remove();


// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    return `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
        
    `;
};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');


// make 4 player cards using generatePlayerCard
cards.insertAdjacentHTML('afterbegin', generatePlayerCard('Kevin', 27, 177));
cards.insertAdjacentHTML('afterbegin', generatePlayerCard('Moira', 30, 167));
cards.insertAdjacentHTML('afterbegin', generatePlayerCard('Colleen', 30, 167));
cards.insertAdjacentHTML('afterbegin', generatePlayerCard('Juliette', 25, 170));

// const player1 = generatePlayerCard('Kevin', 27, `5'11"`);
// const player2 =  generatePlayerCard('Moira', 30, `5'7"`);
// const player3 =  generatePlayerCard('Colleen', 30, `5'7"`);
// const player4 =  generatePlayerCard('Juliette', 25, `5'8"`);

// append those cards to the div

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// make out delete function
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
