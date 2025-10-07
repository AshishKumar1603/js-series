 /* document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
   // todoInput.value = ""; //clear input
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firing
      tasks = tasks.filter((t) => t.id === task.id);
      li.remove();
      saveTasks();
    });

    // todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}); */
 

 /* document.addEventListener("DOMContentLoaded", ()=>{
  const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");
const progressText = document.getElementById("progress-text");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((task) => renderTask(task));
updateProgess();

addTaskButton.addEventListener("click", ()=>{
  const taskText = todoInput.value.trim();
  if(taskText === "") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks();
  renderTask(newTask);
 // todoInput.value = "";//clear input
  updateProgess();
});

function renderTask(task){
  const li = document.createElement("li");
  li.setAttribute("data-id", task.id);

  // Checkbox create karo
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    // Task text span
    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) span.classList.add("completed");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Checkbox change event - toggle complete
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      if (task.completed) {
        span.classList.add("completed");
      } else {
        span.classList.remove("completed");
      }
      saveTasks();
      updateProgress();
    });

    // Delete button event
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
      updateProgress();
    });

    // Clear existing content & append new elements
    li.innerHTML = "";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
  
  //todoList.appendChild(li);
}

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks)); //
}
function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    progressText.textContent = `You have completed ${completed} out of ${total} tasks.`;

    // Optional: Jab sab complete ho jaye to alag message dikhao
    if (total > 0 && completed === total) {
      progressText.textContent = "🎉 Great job! All tasks completed.";
    }
  }
/* JSON.stringify(task)

JavaScript me arrays aur objects ko direct store nahi kar sakte,
kyunki localStorage sirf text (string) samajhta hai.

JSON.stringify() ka kaam hai:
→ Object ya array ko string me convert karna. 
});
 
  */

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  const progressText = document.getElementById("progress-text");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));
  updateProgress();

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = "";
    updateProgress();
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    // Checkbox create karo
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    // Task text span
    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) span.classList.add("completed");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Checkbox change event - toggle complete
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      if (task.completed) {
        span.classList.add("completed");
      } else {
        span.classList.remove("completed");
      }
      saveTasks();
      updateProgress();
    });

    // Delete button event
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
      updateProgress();
    });

    // Clear existing content & append new elements
    li.innerHTML = "";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    progressText.textContent = `You have completed ${completed} out of ${total} tasks.`;

    // Optional: Jab sab complete ho jaye to alag message dikhao
    if (total > 0 && completed === total) {
      progressText.textContent = "🎉 Great job! All tasks completed.";
    }
  }
});