const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onBlur);

const length = refs.input.dataset.length;

function onBlur(event) {
  const eventLength = event.currentTarget.value.length;

  if (eventLength >= length) {
    refs.input.classList.add("valid");
  } else if (eventLength < length) {
    refs.input.classList.add("invalid");
  }
}
