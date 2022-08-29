const listEl = document.querySelector("#categories");

const lengthListEl = listEl.children.length;
console.log("Number of categories:", lengthListEl);

const allTitleEl = listEl.querySelectorAll("h2");

const titleEl = [...allTitleEl].forEach((title) =>
  console.log("Category:", title.textContent)
);

const listUl = document.querySelector(".item").querySelectorAll("li");

console.log(listUl);
