const inputTask = document.getElementById("input-task");
const addTaskButton = document.getElementById("add-task-button");
const taskLists = document.getElementById("task-list");

let storedTasks = localStorage.getItem("tasks");
taskLists.innerHTML = storedTasks;

state();
function state() {
  const taskStatus = document.querySelectorAll(".task");
  for (let state of taskStatus) {
    if (state.classList.contains("done")) {
      state.previousSibling.checked = true;
    } else {
      state.previousSibling.checked = false;
    }
  }
}

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputTask.value != "") {
    let newTask = `<li>
    <label>
      <input type="checkbox" class="task-status" onclick = "strikeAction(this)" onchange="state()"/><span class="task"
      >${inputTask.value}</span>
      </label>
      <div>
      <button type="reset" class="delete-btn" onclick="deleteAction(this)">+</button>
      </div>
      </li>`;
    inputTask.value = "";
    taskLists.innerHTML += newTask;
    localStorage.setItem("tasks", taskLists.innerHTML);
  }
});

addTaskButton.addEventListener("click", state);

function strikeAction(element) {
  if (element.checked == true) {
    element.nextSibling.classList.add("done");
  } else if (element.checked != true) {
    element.nextSibling.classList.remove("done");
  }
  localStorage.setItem("tasks", taskLists.innerHTML);
}

function deleteAction(element) {
  element.parentElement.parentElement.remove();
  localStorage.setItem("tasks", taskLists.innerHTML);
}

// localStorage.clear();
