const refs = {
  actionDecrement: document.querySelector('[data-action="decrement"]'),
  actionIncrement: document.querySelector('[data-action="increment"]'),
  counterEl: document.querySelector("#counter"),
  valueEl: document.querySelector("#value"),
};

refs.actionDecrement.addEventListener("click", onAddActionDecrement);
refs.actionIncrement.addEventListener("click", onAddActionIncrement);

let counterValue = 0;

function onAddActionDecrement() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}

function onAddActionIncrement() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}
