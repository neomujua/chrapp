const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const logoutBtn = document.querySelector("#logout");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(e) {
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);

  showName(userName);
}

function showName(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${userName}`
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function logoutClicked(e) {
  localStorage.removeItem("userName");
  window.location.reload();
}

if (savedUserName==null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  showName(savedUserName);
  logoutBtn.addEventListener("click", logoutClicked);
}