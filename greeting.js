let users = [],
  check = false;

function callUserName(text) {
  const callUser = JSON.parse(localStorage.getItem(USERS_LS));
  callUser.forEach(function (localUser) {
    if (text === localUser.user) check = true;
    users.push(localUser);
  });
}

function SaveName(text) {
  const newId = Date.now();
  const newUser = text;
  const userObj = {
    id: newId,
    user: newUser,
  };

  if (localStorage.getItem(USERS_LS) !== null) callUserName(text);
  if (!check) users.push(userObj);
  localStorage.setItem(USERS_LS, JSON.stringify(users));
  localStorage.setItem(USER_LS, text);
  users = [];
  check = false;
}

function handleSubmitGreet(event) {
  // event.preventDefault(); // enter를 눌러서 제출했을 때의 기본 이벤트를 막아준다.
  const currentValue = input.value;
  paintGreeting(currentValue);
  SaveName(currentValue);
}

function askForName() {
  greeting.classList.remove(SHOWING_CN);
  toDoForm.classList.remove(SHOWING_CN);
  toDoList.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmitGreet);
  //   input.value = "";
}
///aaa
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  toDoForm.classList.add(SHOWING_CN);
  toDoList.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();
greeting.addEventListener("click", askForName);
