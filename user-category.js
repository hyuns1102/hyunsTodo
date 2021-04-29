function paintToUser() {
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

function init() {
  if (localStorage.getItem(USERS_LS) !== null) {
    // paintToUser();
  }
}
init();
