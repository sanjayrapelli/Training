// !
let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");

let gender = document.getElementsByName("gender");
// console.log(gender);
let show = document.getElementById("show");
let check = document.getElementById("check");

check.addEventListener("click", (event) => {
  if (event.target.checked) {
    password.setAttribute("type", "text");
    show.innerText = "Hide password";
  } else {
    password.setAttribute("type", "password");
    show.innerText = "Show password";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let un = username.value;
  let up = password.value;
  let gen = "";
  for (let i = 0; i <= gender.length - 1; i++) {
    // console.log(gender[i].value);
    // console.log(gender[i].checked);
    if (gender[i].checked == true) {
      // console.log(gender[i].value);
      gen += gender[i].value;
    }
  }
  let userDetails = {
    username: un,
    password: up,
    gender: gen,
  };
  console.log(userDetails);
  sessionStorage.setItem("userData", JSON.stringify(userDetails));
});
