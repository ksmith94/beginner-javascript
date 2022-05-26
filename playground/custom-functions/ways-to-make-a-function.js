// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }

//Anon function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }


//function expression
// const doctorize = function(firstName) {
//     return `Dr. ${firstName}`;
// }


// const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

// const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 } );


//IIFE
//Immediateley Invoked Function Expression


(function(age) {
    console.log('Running the anon function');
    return `You are cool and age ${age}`;
})(10);

//Methods!!!
const wes = {
    name: 'Westopher Bos',
    //method!
    sayHi: function() {
        console.log(`Hey ${this.name}`);
        return 'Hey Wes';
    },
    //short-hand method
    yellHi() {
        console.log('HEY WESSSS');
    },
    //arrow function
    whisperHi: () => {
        console.log('hii wesss im a mouse');
    }
}

//calback functions
//click callback
const button = document.querySelector('.clickMe');

function handleClick() {
    console.log('Great clicking!!');
}
button.addEventListener('click', function(){
    console.log('Nice Job!');
});

//timer callback
setTimeout(() => {
    console.log('DONE! Time to eat!');
}, 1000)