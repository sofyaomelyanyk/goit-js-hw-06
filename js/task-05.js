const input = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");
const defaultName = spanName.textContent;

input.addEventListener("input", onInput);

function onInput(event) {
  spanName.textContent = event.currentTarget.value;

  if (!event.currentTarget.value) {
    spanName.textContent = defaultName;
  }
}
