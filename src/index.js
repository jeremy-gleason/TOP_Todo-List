import { loadPage } from "./Page";
import { taskFactory, projectFactory, restoreProjMethods } from "./AppLogic";
import { displayProject, displayTask, clearProjects, updateProjSelect } from "./UserInterface";
import { loadFromStorage, saveToStorage } from "./Storage";

loadPage();

const titleInput = document.getElementById('title');
const descripInput = document.getElementById('descrip');
const dateInput = document.getElementById('due-date');
const projectSelect = document.getElementById('project-select');
const priorityInput = document.getElementById('priority');
const projNameInput = document.getElementById('proj-name');

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
    const projTasks = project.tasks;
    for (let j = 0; j < projTasks.length; j++) {
      const task = projTasks[j];
      displayTask(task.title, task.description, task.dueDate, task.priority, i, j);
    }
  }
};

const deleteTask = (projId, taskId) => {
  projects[projId].removeTask(taskId);
  clearProjects();
  displayProjectsAndTasks();
  saveToStorage("projects", projects);
};

const projects = loadFromStorage("projects");

if (projects.length === 0) {
  projects.push(projectFactory('Default Project'));
} else {
  for (const proj of projects) {
    restoreProjMethods(proj);
  }
}

console.log(projects);

updateProjSelect(projects.map(proj => proj.name));
displayProjectsAndTasks();

document.getElementById('submit-task').addEventListener('click', e => {
  e.preventDefault();
  projects[projectSelect.value].addTask(taskFactory(titleInput.value, descripInput.value, dateInput.value, priorityInput.value));
  resetInputs();
  clearProjects();
  displayProjectsAndTasks();
  saveToStorage("projects", projects);
});

document.getElementById('clear-task').addEventListener('click', e => {
  e.preventDefault();
  resetInputs();
});

document.getElementById('submit-project').addEventListener('click', e => {
  e.preventDefault();
  if (projNameInput.value) {
    projects.push(projectFactory(projNameInput.value));
    projNameInput.value = '';
    clearProjects();
    displayProjectsAndTasks();
    updateProjSelect(projects.map(pr => pr.name));
  }
});

document.getElementById('clear-project').addEventListener('click', e => {
  e.preventDefault();
  projNameInput.value = '';
});

document.getElementById('project-container').addEventListener('click', e => {
  if (e.target.classList.contains('delete-btn')) {
    deleteTask(e.target.dataset.projId, e.target.dataset.taskId);
  }
});