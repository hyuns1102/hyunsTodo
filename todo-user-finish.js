let USERTODOS_LS = "";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== li.id; // 현재 li 값과 toDo안의 값 비교해서 다르면 리턴
  });
  toDos = cleanToDos;
  saveToDos();
}
function replayToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const finishedText = li.querySelector("span");
  const finBtn = document.createElement("button-fin");
  finishedText.style.textDecoration = "none";
  li.removeChild(btn);
  finBtn.innerText = "✅";
  finBtn.style.backgroundColor = "transparent";
  finBtn.style.borderColor = "transparent";
  finBtn.addEventListener("click", finishedToDo);
  li.insertBefore(finBtn, li.firstChild);
  toDos.filter(function (toDo) {
    if (toDo.id === li.id) toDo.fin = false;
  });

  saveToDos();
}
function finishedToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const finishedText = li.querySelector("span");
  const reBtn = document.createElement("button-re");
  finishedText.style.textDecoration = "line-through";
  li.removeChild(btn);
  reBtn.innerText = "⏪";
  reBtn.style.backgroundColor = "transparent";
  reBtn.style.borderColor = "transparent";
  reBtn.addEventListener("click", replayToDo);
  li.insertBefore(reBtn, li.firstChild);
  toDos.filter(function (toDo) {
    if (toDo.id === li.id) toDo.fin = true;
  });

  saveToDos();
}

function saveToDos() {
  localStorage.setItem(USERTODOS_LS, JSON.stringify(toDos)); //객체를 string형으로 바꿔준다.
}

function paintToDo(toDoObj) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button-fin");
  const reBtn = document.createElement("button-re");
  const span = document.createElement("span");

  let Btn = finBtn;

  if (toDoObj.fin === true) {
    Btn = reBtn;
    Btn.innerText = "⏪";
    span.style.textDecoration = "line-through";
  } else {
    Btn.innerText = "✅";
  }
  delBtn.innerText = "❌";
  Btn.style.backgroundColor = "transparent";
  Btn.style.borderColor = "transparent";
  delBtn.style.backgroundColor = "transparent";
  delBtn.style.borderColor = "transparent";
  delBtn.addEventListener("click", deleteToDo);
  finBtn.addEventListener("click", finishedToDo);
  reBtn.addEventListener("click", replayToDo);

  span.innerText = `${toDoObj.text}`;

  li.appendChild(Btn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = toDoObj.id;
  toDoList.style.listStyle = "none";
  toDoList.appendChild(li);
  toDos.push(toDoObj);
  saveToDos();
}
function getTaskObject(text) {
  return {
    id: String(Date.now()),
    text,
    fin: false,
  };
}
function handleSubmit(event) {
  event.preventDefault();
  // const currentValue = toDoInput.value;
  const currentValue =
    toDoInput.value !== "" ? getTaskObject(toDoInput.value) : "";
  if (currentValue !== "") {
    paintToDo(currentValue);
    toDoInput.value = "";
  }
}

function loadToDos() {
  const currentUser = localStorage.getItem(USER_LS);
  USERTODOS_LS = TODOS_LS + "-" + currentUser;
  const loadedToDos = localStorage.getItem(USERTODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); // string을 객체형으로 바꾼다.
    parsedToDos.forEach(function (toDo) {
      //array의 function을 활용한다.  for문을 한 단어로 쓰는방법
      paintToDo(toDo);
    });
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
