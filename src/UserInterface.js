const taskContainer = document.getElementById('task-container');

const displayTask = (title, description, dueDate, priority, index) => {
  // const taskContainer = document.getElementById('task-container');
  const taskDiv = document.createElement('div');
  taskDiv.classList.add(`${priority}-priority`);
  taskDiv.dataset.index = index;
  const taskTitle = document.createElement('h3');
  taskTitle.textContent = title;
  const taskDescrip = document.createElement('p');
  taskDescrip.textContent = description;
  const taskDue = document.createElement('p');
  taskDue.textContent = `Due: ${dueDate}`;
  const deleteBtn = document.createElement('input');
  deleteBtn.type = 'image';
  deleteBtn.dataset.index = index;
  deleteBtn.src = 'delete.svg';
  deleteBtn.classList.add('delete-btn');
  taskDiv.appendChild(taskTitle);
  taskDiv.appendChild(taskDescrip);
  taskDiv.appendChild(taskDue);
  taskDiv.appendChild(deleteBtn);
  taskContainer.appendChild(taskDiv);
};

const clearTasks = () => {
  while (taskContainer.hasChildNodes()) {
    taskContainer.removeChild(taskContainer.firstChild);
  }
};

export { displayTask, clearTasks };