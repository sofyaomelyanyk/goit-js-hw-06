const input = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(event) {
  if (event.currentTarget.value === "") {
    event.currentTarget.value = spanName.textContent;
  }

  spanName.textContent = event.currentTarget.value;
}
