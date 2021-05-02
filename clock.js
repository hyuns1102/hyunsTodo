const clockContainer = document.querySelector(".js-clock");
const clockTitleHours = clockContainer.querySelector(".js-hours"),
  clockTitleColon = clockContainer.querySelector(".js-colon"),
  clockTitleSeconds = clockContainer.querySelector(".js-seconds");

let col = ":";

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clockTitleHours.innerText = `${hours < 10 ? `0${hours}` : hours}`;
  clockTitleColon.innerText = `${col === ` ` ? (col = ":") : col}`;
  clockTitleSeconds.innerText = `${minutes < 10 ? `0${minutes}` : minutes}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
