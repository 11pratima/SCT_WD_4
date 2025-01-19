// Initialize tasks array from localStorage or empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskInput.value.trim(),
        completed: false,
        datetime: taskDateTime.value,
        createdAt: new Date().toISOString()
    };

    tasks.push(task);
    saveTasks();
    taskInput.value = '';
    taskDateTime.value = '';
    renderTasks();
}

// Function to toggle task completion
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Function to edit a task
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newText = prompt('Edit task:', task.text);
    const newDateTime = prompt('Edit date and time (leave empty to keep current):', task.datetime);
    
    if (newText !== null) {
        tasks = tasks.map(t => {
            if (t.id === id) {
                return {
                    ...t,
                    text: newText.trim() || t.text,
                    datetime: newDateTime || t.datetime
                };
            }
            return t;
        });
        saveTasks();
        renderTasks();
    }
}

// Function to filter tasks
function filterTasks(filter) {
    currentFilter = filter;
    document.querySelectorAll('.task-filters button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === filter) {
            btn.classList.add('active');
        }
    });
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    let filteredTasks = tasks;
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }

    filteredTasks.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        const dateTimeStr = task.datetime ? 
            new Date(task.datetime).toLocaleString() : 
            'No date set';

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} 
                onclick="toggleTask(${task.id})">
            <div class="task-content">
                <div>${task.text}</div>
                <small>${dateTimeStr}</small>
            </div>
            <div class="task-actions">
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Initial render
renderTasks();
