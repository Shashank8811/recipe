let btnEl = document.querySelector(".btn-search");
let recipeEl = document.querySelector(".recipe-content");

let titleEl = document.querySelector(".recipe-title");
let ingreEl = document.querySelector(".recipe-ingredients");
let servingEl = document.querySelector(".recipe-servings");
let instEl = document.querySelector(".recipe-instructions");

let loaderEl = document.querySelector(".loader");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "98981df0c7msh72e18e637e6919fp1ef15fjsn99e865646a7b",
    "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
  },
};

async function getRecipe(recipe) {
  let recipeVal = document.getElementById("recipe").value;
  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${recipeVal}`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    titleEl.textContent = result[0].title;
    ingreEl.innerHTML = `<h3>★Ingredients🥗</h3> ${result[0].ingredients}`;
    servingEl.innerHTML = `<h3>★Servings🍽️</h3>${result[0].servings}`;
    instEl.innerHTML = `<h3>★Instructions📜</h3>${result[0].instructions}`;
    console.log(result);
  } catch (error) {
    recipeEl.innerHTML = `<h2>Sorry the recipe not found!<h2>`;
    recipeEl.style.alignItems = "center";
  }
}

btnEl.addEventListener("click", function () {
  recipeEl.style.display = "flex";
  getRecipe();
});
