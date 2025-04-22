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
    } else {
      alert("You need to add a task ");
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

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

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
    todoInput.value = ""; // clear input
    console.log(tasks);
  });

  // todoInput.addEventListener("keypress", function (e) {
  //   if (e.key === "Enter") {
  //     addTaskButton.click();
  //   }
  // });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
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
      e.stopPropagation(); //Prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });
    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }
});

*/
