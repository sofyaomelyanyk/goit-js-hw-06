const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  const value = {
    email: email.value,
    password: password.value,
  };

  console.log(value);

  if (!event.target.value) {
    alert("Все поля должны быть заполнены!");
  }

  event.target.reset();
}
