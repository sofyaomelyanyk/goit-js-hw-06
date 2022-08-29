const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onBlur);

const length = refs.input.dataset.length;

function onBlur(event) {
  const eventLength = event.target.value.length;

  if (eventLength < length) {
    refs.input.classList.add("invalid");
  }

  refs.input.classList.add("valid");
}
