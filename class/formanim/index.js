const passwordInput = document.getElementById("password");
const submit = document.getElementById("formw");
const button = document.querySelector(".submit-btn");
passwordInput.addEventListener("focusin", (event) => {
  passwordInput.style = "outline: 1px solid red; border: none";
});

passwordInput.addEventListener("keyup", (event) => {
  let inputlength = passwordInput.value.length;
  if (inputlength >= 8) {
    button.style.backgroundColor = "green";
    button.style.left = "25%";
    passwordInput.style = "outline: 1px solid green;border: none;";
  } else {
    button.style.left = "0px";
    button.style.backgroundColor = "blue";
    passwordInput.style = "outline: 1px solid red;border: none;";
  }
});

button.addEventListener("mouseover", (event) => {
  let btn = event.target;
  let left = "0px";
  let right = "50%";
  let center = "25%";
  if (btn.style.left == center) {
    return;
  }
  if (btn.style.left == left) {
    btn.style.left = right;
  } else {
    btn.style.left = left;
  }
});

submit.addEventListener("submit", (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (passwordInput.value.length < 8) {
    alert("Please enter password correctly");
  }
});
