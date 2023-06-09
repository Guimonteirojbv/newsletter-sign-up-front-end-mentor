const errorStatus = document.getElementById("error-status");
const form = document.getElementById("form");
const emailUser = document.getElementById("email");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  checkEmail();
}

function checkEmail() {
  const defaultEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = emailUser.value;

  if (defaultEmail.test(emailValue)) {
    window.location.href = "sucesso.html";
  } else {
    emailUser.classList.add("error-input-email");
    errorStatus.classList.remove("error-initial");
    errorStatus.classList.add("error-email");
  }
}
