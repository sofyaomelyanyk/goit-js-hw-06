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

  if (!value.email || !value.password) {
    alert("Все поля должны быть заполнены!");
  } else {
    console.log(value);
  }

  event.target.reset();
}
