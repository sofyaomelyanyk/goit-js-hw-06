const categories = document
  .querySelector("#categories")
  .querySelectorAll(".item");

const listCategories = [];

categories.forEach((elem) => {
  const title = elem.querySelector("h2").textContent;
  const items = elem.querySelectorAll("li");

  listCategories.push({
    Category: title,
    Elements: items.length,
  });
});

console.log(`Number of categories: ${categories.length}`, listCategories);
