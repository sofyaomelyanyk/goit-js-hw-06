const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItemEl = document.querySelector("#ingredients");

const makeIngredients = (options) => {
  return options.map((option) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = option;

    return itemEl;
  });
};

const items = makeIngredients(ingredients);
listItemEl.append(...items);

console.log(items);
