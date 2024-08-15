const signUp = document.forms["form"];
const inputFn = signUp["firstname"];
const inputLn = signUp["lastname"];
const inputEmail = signUp["email"];
const inputPass = signUp["password"];
const msgFirst = document.querySelector("#first-eror");
const msgLast = document.querySelector("#last-eror");
const msgEmail = document.querySelector("#email-eror");
const msgPass = document.querySelector("#password-eror");
const imgErorFn = document.querySelector("#imgfirst");
const imgErorLn = document.querySelector("#imglast");
const imgErorEmail = document.querySelector("#imgemail");
const imgErorPass = document.querySelector("#imgpass");
const hiddenPass = document.querySelector("#hide-pass");
const showPass = document.querySelector("#show-pass");

const symbols = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;
const string = ["undefined", "number", "boolean", "null", "object"];

showPass.classList.remove("hidden");

function validation() {
  if (inputFn.value.trim() === "") {
    msgFirst.innerHTML = "First name tidak boleh kosong";
    imgErorFn.classList.remove("hidden");
  } else if (string.includes(inputFn.value)) {
    msgFirst.innerHTML = "Error";
    imgErorFn.classList.remove("hidden");
  } else if (symbols.test(inputFn.value)) {
    msgFirst.innerHTML = "First name tidak boleh berisi angka";
    imgErorFn.classList.remove("hidden");
  } else {
    msgFirst.innerHTML = " ";
    imgErorFn.classList.add("hidden");
  }
  if (inputLn.value.trim() === "") {
    msgLast.innerHTML = "Last name tidak boleh kosong";
    imgErorLn.classList.remove("hidden");
  } else if (string.includes(inputLn.value)) {
    msgLast.innerHTML = "Error";
    imgErorLn.classList.remove("hidden");
  } else if (symbols.test(inputLn.value)) {
    msgLast.innerHTML = "Last name tidak boleh berisi angka";
    imgErorLn.classList.remove("hidden");
  } else {
    msgLast.innerHTML = " ";
    imgErorLn.classList.add("hidden");
  }
  if (inputEmail.value.trim() === "") {
    msgEmail.innerHTML = "Email tidak boleh kosong";
    imgErorEmail.classList.remove("hidden");
  } else if (string.includes(inputEmail.value)) {
    msgEmail.innerHTML = "Error";
    imgErorEmail.classList.remove("hidden");
  } else {
    msgEmail.innerHTML = " ";
    imgErorEmail.classList.add("hidden");
  }
  if (inputPass.value.trim() === "") {
    msgPass.innerHTML = "Password tidak boleh kosong";
    imgErorPass.classList.remove("hidden");
  } else if (string.includes(inputPass.value)) {
    msgPass.innerHTML = "Error";
    imgErorPass.classList.remove("hidden");
  } else {
    msgPass.innerHTML = " ";
    imgErorPass.classList.add("hidden");
  }
}

function hidePassword() {
  if (password.type === "password") {
    password.type = "text";
    hiddenPass.classList.remove("hidden");
    showPass.classList.add("hidden");
  } else {
    password.type = "password";

    hiddenPass.classList.add("hidden");
    showPass.classList.remove("hidden");
  }
}

hiddenPass.addEventListener("click", hidePassword);
showPass.addEventListener("click", hidePassword);

signUp.onsubmit = (event) => {
  event.preventDefault();
  validation();
};
