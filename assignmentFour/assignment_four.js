document.addEventListener('DOMContentLoaded', () => {
    const addTaskForm = document.querySelector('.container');
    const taskInput = document.querySelector('.container2');
    const taskList = document.querySelector('.container3');

    // Function to add a task with date and time
    function addTask(taskText, creationDateTime) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="creation-date-time">${creationDateTime}</span>
            <div class="action-buttons">
                <button class="edit-button">Edit</button>
                <button class="save-button" style="display: none;">Save</button>
                <button class="delete-button">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    }

    // Function to save tasks in localStorage
    function saveTasksToStorage() {
        localStorage.setItem('tasks', taskList.innerHTML);
    }

    // Function to load tasks from localStorage
    function loadTasksFromStorage() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            taskList.innerHTML = tasks;
        }
    }

    // Add event listener for form submission
    addTaskForm.addEventListener('submit', e => {
        e.preventDefault();
        const newTask = taskInput.value.trim();
        const currentDate = new Date();
        const creationDateTime = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        if (newTask !== '') {
            addTask(newTask, creationDateTime);
            saveTasksToStorage(); // Save tasks to localStorage
            taskInput.value = '';
        }
    });

    // Load tasks from localStorage when the page is loaded
    loadTasksFromStorage();

    // Event listener for task list to handle editing, deleting, and toggling completion
    taskList.addEventListener('click', e => {
        const target = e.target;
        const taskItem = target.closest('.task-item');
        if (!taskItem) return;

        if (target.classList.contains('delete-button')) {
            deleteTask(taskItem);
            saveTasksToStorage(); // Save tasks after deletion
        } else if (target.classList.contains('edit-button')) {
            editTask(taskItem);
        } else if (target.classList.contains('task-text')) {
            toggleTaskCompletion(taskItem);
        }
    });
});

// Function to delete a task
function deleteTask(taskItem) {
    // Implement task deletion logic here
    taskItem.remove();
}

// Function to edit a task
function editTask(taskItem) {
    // Implement task editing logic here
}

// Function to toggle task completion
function toggleTaskCompletion(taskItem) {
    // Implement task completion toggling logic here
}
