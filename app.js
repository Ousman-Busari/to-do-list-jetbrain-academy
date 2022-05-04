const inputTask = document.getElementById("input-task");
const addTaskButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");
const taskStatus = document.querySelectorAll(".task");
const deleteButton = document.querySelectorAll(".delete-btn");
const taskNumber = document.getElementsByTagName("li");

todoMain();
function todoMain() {
  addTaskButton.addEventListener("click", (e) => {
    if (inputTask.value != "") {
      e.preventDefault();

      let taskID = "task-" + Math.random();
      const newTask = `<li>
        
        <label for="${taskID}">
        <input type="checkbox" class="task-status" onclick = "strikeAction(this)" id="${taskID}"/><span class="task"
        >${inputTask.value}</span>
        </label>
        
        <div>
        <button type="reset" class="delete-btn" onclick="deleteAction(this)">+</button>
        </div>
        </li>`;
      taskList.innerHTML += newTask;
      localStorage.setItem("tasks", taskList.innerHTML);
    }
    inputTask.value = "";
  });
}
function checked(element) {
  if (element.nextSibling.classList.contains("done")) {
    element.prop("checked");
  }
}

function strikeAction(element) {
  if (element.checked == true) {
    element.nextSibling.classList.add("done");
  } else if (element.checked != true) {
    element.nextSibling.classList.remove("done");
  }
  localStorage.setItem("tasks", taskList.innerHTML);
}

function deleteAction(element) {
  element.parentElement.parentElement.remove();
  localStorage.setItem("tasks", taskList.innerHTML);
}
taskList.innerHTML = localStorage.getItem("tasks");
