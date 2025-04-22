const $inputEmail = document.getElementById("email");
const $errorMessage = document.getElementById("error-message");
const $submitButton = document.getElementById("submit-button");

function showError(error) {
  $inputEmail.classList.add("border-red-500");
  $errorMessage.textContent = error;
  $errorMessage.classList.remove("hidden");
}

function hideError() {
  $inputEmail.classList.remove("border-red-500");
  $errorMessage.classList.add("hidden");
  $errorMessage.textContent = "";
}

function isEmailValid(email) {
  let isValid = false;
  if (email?.trim().length === 0) {
    showError("Whoops! It looks like you forgot to add your email");
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    showError("Please provide a valid email address");
  } else {
    hideError();
    isValid = true;
  }
  return isValid;
}

$inputEmail.addEventListener("blur", (event) => {
  const email = event.target.value;
  isEmailValid(email);
});

$inputEmail.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    $submitButton.focus();
    $submitButton.click();
  }
});

$submitButton.addEventListener("click", () => {
  if (!isEmailValid($inputEmail.value)) return;

  alert("Submitted the email");
  $inputEmail.focus();
});
