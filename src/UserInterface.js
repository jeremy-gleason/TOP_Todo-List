// const taskContainer = document.getElementById('task-container');

const displayProject = (name, index) => {
  const projContainer = document.getElementById('project-container');
  const projDiv = document.createElement('div');
  projDiv.dataset.index = index;
  const projTitle = document.createElement('h2');
  projTitle.textContent = name;
  projDiv.appendChild(projTitle);
  projContainer.appendChild(projDiv);
};

const displayTask = (title, description, dueDate, priority, projId, taskId) => {
  const parentProj = document.querySelector(`[data-index='${projId}']`);
  const taskDiv = document.createElement('div');
  taskDiv.classList.add(`${priority}-priority`);
  taskDiv.dataset.taskId = taskId;
  const taskTitle = document.createElement('h3');
  taskTitle.textContent = title;
  const taskDescrip = document.createElement('p');
  taskDescrip.textContent = description;
  const taskDue = document.createElement('p');
  taskDue.textContent = `Due: ${dueDate}`;
  const deleteBtn = document.createElement('input');
  deleteBtn.type = 'image';
  deleteBtn.dataset.projId = projId;
  deleteBtn.dataset.taskId = taskId;
  deleteBtn.src = 'delete.svg';
  deleteBtn.classList.add('delete-btn');
  taskDiv.appendChild(taskTitle);
  taskDiv.appendChild(taskDescrip);
  taskDiv.appendChild(taskDue);
  taskDiv.appendChild(deleteBtn);
  parentProj.appendChild(taskDiv);
};

const clearProjects = () => {
  const projContainer = document.getElementById('project-container');
  while (projContainer.hasChildNodes()) {
    projContainer.removeChild(projContainer.firstChild);
  }
};

const updateProjSelect = (projects) => {
  const projSelect = document.getElementById('project-select');
  while (projSelect.hasChildNodes()) {
    projSelect.removeChild(projSelect.firstChild);
  }
  for (let i = 0; i < projects.length; i++) {
    const projOption = document.createElement('option');
    projOption.value = i;
    projOption.textContent = projects[i];
    projSelect.appendChild(projOption);
  }
};

export { displayProject, displayTask, clearProjects, updateProjSelect };