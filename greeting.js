
const form = document.querySelector(".js-form"),
    greeting = document.querySelector(".js-greetings"),
    input = form.querySelector("input");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

//erase name 추가
function EraseName() {
    localStorage.removeItem(USER_LS);
    loadName();
}
greeting.addEventListener("click", EraseName);

function SaveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmitGreet(event) {
    event.preventDefault(); // enter를 눌러서 제출했을 때의 기본 이벤트를 막아준다.
    const currentValue = input.value;
    paintGreeting(currentValue);
    SaveName(currentValue);
}

function askForName() {
    greeting.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmitGreet);
    input.value = "";
}
///aaa
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser == null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();