// Grab elements from DOM
const taskAddButton = document.getElementById('createTaskBtn');
const taskInputField = document.getElementById('taskInputField');
const taskListContainer = document.getElementById('taskListContainer');
const removeCompletedButton = document.getElementById('removeCompletedBtn');

// Add Task functionality
taskAddButton.addEventListener('click', function() {
    const taskContent = taskInputField.value.trim();

    if (taskContent !== '') {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            ${taskContent}
            <button class="action-btn edit-btn">Edit</button>
            <button class="action-btn delete-btn">Delete</button>
        `;

        // Add animation when a task is added
        taskElement.style.opacity = 0;
        setTimeout(() => {
            taskElement.style.opacity = 1;
        }, 100);

        // Mark task as completed on click
        taskElement.addEventListener('click', function() {
            taskElement.classList.toggle('completed');
        });

        // Edit task functionality
        const editButton = taskElement.querySelector('.edit-btn');
        editButton.addEventListener('click', function(event) {
            event.stopPropagation();
            const updatedTaskContent = prompt('Modify your task:', taskElement.firstChild.nodeValue.trim());

            if (updatedTaskContent !== null && updatedTaskContent !== '') {
                taskElement.firstChild.nodeValue = updatedTaskContent + ' ';
            }
        });

        // Delete task functionality
        const deleteButton = taskElement.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();
            taskElement.style.opacity = 0;
            setTimeout(() => {
                taskListContainer.removeChild(taskElement);
            }, 300);
        });

        taskListContainer.appendChild(taskElement);
        taskInputField.value = ''; // Reset input field
    }
});

// Remove completed tasks
removeCompletedButton.addEventListener('click', function() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(function(task) {
        task.style.opacity = 0;
        setTimeout(() => {
            taskListContainer.removeChild(task);
        }, 300);
    });
});
