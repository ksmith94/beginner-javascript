var age;
console.log(age);
age = 10;

//what does this file do?
sayHi();

//how does this file do it?
function sayHi() {
    console.log('Hey!');
    console.log(add(10, 3));
}

function add(a, b) {
    return a + b;
}