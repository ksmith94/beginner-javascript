/* 1. The Recipe Puppy API used in the course is broken
Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

2. To use Cors anywhere, you now need to request temporary access.
- You can do that here: https://cors-anywhere.herokuapp.com/corsdemo
*/

const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const $form = document.querySelector('form.search');
const $recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  // https://cors-anywhere.herokuapp.com/https://recipes.beginnerjavascript.com/api?q=pizza
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

function displayRecipes(recipes) {
  console.log('creating html', recipes);
  const html = recipes.map(
    (recipe) => `<div class="recipe">
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    ${recipe.thumbnail
    && `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
    <a href="${recipe.href}" target="_blank">View Recipe</a>
    </div>`
  );
  $recipesGrid.innerHTML = html.join('');
}

async function fetchAndDisplay(query) {
  $form.submit.disabled = true;
  const recipes = await fetchRecipes(query);
  $form.submit.disabled = false;
  displayRecipes(recipes.results);
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  fetchAndDisplay(el.query.value);
}

$form.addEventListener('submit', handleSubmit);

fetchAndDisplay('pizza');
