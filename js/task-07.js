const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", onInput);

function onInput() {
  text.style.fontSize = refs.fontSizeControl.value + "px";
}
