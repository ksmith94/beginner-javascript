console.log('it works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

//oh shoot! We need to add something to the top
const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin',heading);

// const myUnorderedList = document.createElement('ul');
// myUnorderedList.insertAdjacentText('afterbegin', 'Unordered List');
// const listItemOne = document.createElement('li');
// listItemOne.textContent = 'List Item 1';
// const listItemTwo = document.createElement('li');
// listItemTwo.textContent = 'List Item 2';
// const listItemThree = document.createElement('li');
// listItemThree.textContent = 'List Item 3';
// const listItemFour = document.createElement('li');
// listItemFour.textContent = 'List Item 4';
// const listItemFive = document.createElement('li');
// listItemFive.textContent = 'List Item 5';

// myUnorderedList.appendChild(listItemOne);
// myUnorderedList.appendChild(listItemTwo);
// myUnorderedList.appendChild(listItemThree);
// myUnorderedList.insertAdjacentElement('beforeend', listItemFour);
// myUnorderedList.insertAdjacentElement('beforeend', listItemFive);

// myDiv.appendChild(myUnorderedList);

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2); 
