const lista = document.getElementById("toDo-list");
const inputTask = document.getElementById("newTask");

function buttonInsertTask() {
  let newTask = inputTask.value.trim();
  if (!getListTask().includes(newTask)) {
    insertTask(newTask);
  }
}

function insertTask(newTask) {
  let liTask = document.createElement("li");
  liTask.textContent = newTask;
  liTask.ondblclick = () => deleteTask(liTask);
  liTask.onclick = () => liTask.classList.toggle("selected");
  lista.appendChild(liTask);
}

function deleteTask(task) {
  task.remove();
}

function getListTask() {
  return [...lista.querySelectorAll("li")].map((li) => li.textContent);
}

function sortTask() {
  let listTask = [...lista.querySelectorAll("li")];
  listTask.sort((a, b) => a.textContent.localeCompare(b.textContent));
  listTask.forEach((li) => {
    lista.appendChild(li);
  });
}

function selectAll(select = true) {
  let allLiTask = [...document.querySelectorAll("li")];
  allLiTask.forEach((li) => {
    if (select) {
      li.classList.add("selected");
    } else {
      li.classList.remove("selected");
    }
  });
}

function deleteSelected (){
    let seleccionados = [...lista.querySelectorAll("li.selected")];
    seleccionados.forEach((li) => {
        deleteTask(li);
    })
}