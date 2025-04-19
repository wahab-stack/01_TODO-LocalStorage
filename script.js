document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // Add new task
  addTaskBtn.addEventListener("click", function () {
    const taskText = todoInput.value.trim();
    if (taskText) {
      addTask(taskText);
      todoInput.value = "";
    }
  });

  // Add task when pressing Enter
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });

  // Function to add a new task
  function addTask(text) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${text}</span>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);

    // Add delete functionality
    li.querySelector(".delete-btn").addEventListener("click", function () {
      li.remove();
    });
  }
});

/* 
const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

addTaskButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newTask);
  todoInput.value = ""; // clear input
  console.log(tasks);
});
*/
