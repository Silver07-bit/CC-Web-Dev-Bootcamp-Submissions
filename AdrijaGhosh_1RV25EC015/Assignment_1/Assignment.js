
const taskInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


function addTask() {
    const taskValue = taskInput.value.trim();


    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }


    const listItem = document.createElement('li');


    listItem.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn">Delete</button>
    `;

   
    const deleteBtn = listItem.querySelector('.delete-btn');
    deleteBtn.onclick = function() {
        listItem.remove();
    };


    todoList.appendChild(listItem);


    taskInput.value = "";
    taskInput.focus();
}


addBtn.addEventListener('click', addTask);




