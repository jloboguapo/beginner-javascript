const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = `https://corsproxy.io/?`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

function displayRecipes(recipes) {
  const html = recipes.map(
    recipe => `<div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${
          recipe.thumbnail &&
          `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
        }
        <a href="${recipe.href}">View recipe</a>
    </div>`
  );

  recipesGrid.innerHTML = html.join('');
}

async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const recipes = await fetchRecipes(form.query.value);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

async function handleSubmit(e) {
  e.preventDefault();
  const el = e.currentTarget;
  fetchAndDisplay();
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplay('pizza');
