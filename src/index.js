import { taskFactory, projectFactory } from "./AppLogic";
import { displayTask, clearTasks } from "./UserInterface";

const tasks = [];

const titleInput = document.getElementById('title');
const descripInput = document.getElementById('descrip');
const dateInput = document.getElementById('due-date');
const priorityInput = document.getElementById('priority');

document.getElementById('create-btn').addEventListener('click', e => {
  e.preventDefault();
  tasks.push(taskFactory(titleInput.value, descripInput.value, dateInput.value, priorityInput.value));
  resetInputs();
  clearTasks();
  displayTasks();
});

document.getElementById('cancel-btn').addEventListener('click', e => {
  e.preventDefault();
  resetInputs();
});

document.getElementById('task-container').addEventListener('click', e => {
  if (e.target.classList.contains('delete-btn')) {
    deleteTask(e.target.dataset.index);
  }
});

const resetInputs = () => {
  titleInput.value = '';
  descripInput.value = '';
  dateInput.value = '';
  priorityInput.value = 'low';
};

const displayTasks = () => {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    displayTask(task.title, task.description, task.dueDate, task.priority, i);
  }
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  clearTasks();
  displayTasks();
};

// displayTasks(defaultProj);

// const projects = [];
// projects.push(defaultProj);

// console.log(task1);
// console.log(defaultProj);