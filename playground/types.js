const name = 'kevin';
const middle = "donald";
const last = `smith`;

const sentence = "she's so cool";
const sentence2 = `she's so "cool"`;

const song = `Ohhh

ya 

I like 
pizza`;

// const hello = "Hello, my name is " + name + ". Nice to meet you.";
// let hello2 = 'Hello, my name is ';
// hello2 = hello2 + name;
// hello2 = hello2 + '. Nice to meet you.';
const hello = `hello, my name is ${name}. Nice to meet you. I am ${25 + 2} years old`;
const html = `
    <div>
        <h2>${name}</h2>
        <p>${hello}</p>
    </div>
    `;
document.body.innerHTML = html;
