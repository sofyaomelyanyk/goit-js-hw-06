const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onBlur);

const length = refs.input.dataset.length;

function onBlur(event) {
  let eventLength = event.target.value.length;
  refs.input.classList.remove(...refs.input.classList);

  if (eventLength >= length) {
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.add("invalid");
  }
}
