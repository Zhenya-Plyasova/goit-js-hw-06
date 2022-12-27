const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.getElementById("ingredients");
ingredients.map((ingredient)=>{
  const listElement = document.createElement("li");
  listElement.textContent=ingredient;
  listElement.classList.add("item");
  listOfIngredients.appendChild(listElement);
});
