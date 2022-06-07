/* 1. The Recipe Puppy API used in the course is broken
Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

2. To use Cors anywhere, you now need to request temporary access.
- You can do that here: https://cors-anywhere.herokuapp.com/corsdemo
*/

const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';

async function fetchRecipes(query) {
  // https://cors-anywhere.herokuapp.com/https://recipes.beginnerjavascript.com/api?q=pizza
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data);
}

fetchRecipes('pizza');
