function pbjMaker(breadType, isItCrunchy, jellyFruit) {
    let peanutButter;
    if(isItCrunchy) {
        peanutButter = 'crunchy';
    } else {
        peanutButter = 'smooth';
    }
    console.log(`Your pb&j is made on ${breadType} bread with ${peanutButter} peanut butter and ${jellyFruit} jelly!`);
}

debugger;
pbjMaker('White', true, 'strawberry');