const categories = document
  .querySelector("#categories")
  .querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

function getListCategories() {
  return [...categories].map((elem) => {
    const title = elem.querySelector("h2").textContent;
    const items = elem.querySelectorAll("li");
    console.log(`Category: ${title}\n Elements: ${items.length}`);
  });
}

getListCategories();
