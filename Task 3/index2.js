// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        listItem.innerHTML = taskText + '<button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(listItem);
        taskInput.value = "";
        saveTasks();
    } else {
        alert("Please enter a task!");
    }
}

// Function to edit a task
function editTask(element) {
    var newText = prompt("Edit task:", element.parentNode.firstChild.textContent);
    if (newText !== null) {
        element.parentNode.firstChild.textContent = newText;
        saveTasks();
    }
}

// Function to delete a task
function deleteTask(element) {
    if (confirm("Are you sure you want to delete this task?")) {
        element.parentNode.remove();
        saveTasks();
    }
}

// Function to save tasks locally
function saveTasks() {
    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);
}

// Function to load tasks from local storage
function loadTasks() {
    var taskList = localStorage.getItem("tasks");
    if (taskList !== null) {
        document.getElementById("taskList").innerHTML = taskList;
    }
}

// Load tasks when the page is loaded
window.onload = loadTasks;
