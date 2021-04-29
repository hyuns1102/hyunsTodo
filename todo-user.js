let USERTODOS_LS = "";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); // 현재 li 값과 toDo안의 값 비교해서 다르면 리턴
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(USERTODOS_LS, JSON.stringify(toDos)); //객체를 string형으로 바꿔준다.
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";
  delBtn.style.backgroundColor = "transparent";
  delBtn.style.borderColor = "transparent";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = `  ${text}`;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.style.listStyle = "none";
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
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
      paintToDo(toDo.text);
    });
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
