const item = document.querySelector('.item');

const width = 500;
const src = `https://source.unsplash.com/random/${width}`;
const desc = `Cute Pup <h1>LOVE THAT GUY</h1>`;
const myHTML = `
<div class="wrapper">
    <h1>${desc}</h1>
    <img src="${src}" alt="${desc}"/>
</div>
`;

// turn a string into a DOM element
const myFragment =document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));
console.log(myFragment);
document.body.appendChild(myFragment);

