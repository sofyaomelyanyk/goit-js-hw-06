const input = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(event) {
  if (!event.target.value) {
    event.target.value = spanName.textContent;
  }

  spanName.textContent = event.target.value;
}
