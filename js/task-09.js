function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  changeColor: document.querySelector(".color"),
  body: document.querySelector("body"),
};

refs.button.addEventListener("click", onClick);

function onClick() {
  const bgColor = getRandomHexColor();
  refs.body.style.background = bgColor;
  refs.changeColor.textContent = bgColor;
}
