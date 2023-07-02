import { loadPage } from "./Page";
import { taskFactory, projectFactory } from "./AppLogic";
import { displayProject, displayTask, clearProjects } from "./UserInterface";

loadPage();

const tasks = [];
const projects = [];

const titleInput = document.getElementById('title');
const descripInput = document.getElementById('descrip');
const dateInput = document.getElementById('due-date');
const priorityInput = document.getElementById('priority');

const defaultProject = projectFactory('Default Project');
projects.push(defaultProject);

document.getElementById('submit-task').addEventListener('click', e => {
  e.preventDefault();
  tasks.push(taskFactory(titleInput.value, descripInput.value, dateInput.value, priorityInput.value));
  console.log('Tasks: ', tasks);
  defaultProject.addTask(tasks[tasks.length - 1]);
  resetInputs();
  clearProjects();
  displayProjectsAndTasks();
});

document.getElementById('clear-task').addEventListener('click', e => {
  e.preventDefault();
  resetInputs();
});

document.getElementById('project-container').addEventListener('click', e => {
  if (e.target.classList.contains('delete-btn')) {
    deleteTask(e.target.dataset.projId, e.target.dataset.taskId);
  }
});

const resetInputs = () => {
  titleInput.value = '';
  descripInput.value = '';
  dateInput.value = '';
  priorityInput.value = 'low';
};

const displayProjectsAndTasks = () => {
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    displayProject(project.name, i);
    console.log(project.tasks);
    const projTasks = project.tasks;
    for (let j = 0; j < projTasks.length; j++) {
      const task = projTasks[j];
      displayTask(task.title, task.description, task.dueDate, task.priority, i, j);
    }
  }/*
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    displayTask(task.title, task.description, task.dueDate, task.priority, i);
  }*/
};

const deleteTask = (projId, taskId) => {
  projects[projId].removeTask(taskId);
  // tasks.splice(index, 1);
  clearProjects();
  displayProjectsAndTasks();
};