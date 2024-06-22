document.body.addEventListener("htmx:configRequest", (event) => {
  const form = event.target;
  const username = form.querySelector("#username").value;
  const error = form.querySelector("#username-error");

  if (username.length < 3) {
    event.preventDefault();
    error.innerText = "O nome deve ter pelo menos 3 caracteres.";
  } else {
    error.innerText = "";
  }
});
