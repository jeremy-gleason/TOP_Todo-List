const root = document.getElementById('root');

const loadPage = () => {
  loadHeader();
  loadMain();
  addBtnHandlers();
};

const loadHeader = () => {
  const pageHeader = document.createElement('header');
  const pageH1 = document.createElement('h1');
  pageH1.textContent = 'TaskBoard';
  pageHeader.appendChild(pageH1);
  root.appendChild(pageHeader);
};

const loadMain = () => {
  const pageMain = document.createElement('main');
  const formDiv = document.createElement('div');
  formDiv.id = 'form-div';
  root.appendChild(pageMain);
  pageMain.appendChild(formDiv);

  const taskDiv = document.createElement('div');
  taskDiv.id = 'new-task';
  const taskBtn = document.createElement('button');
  taskBtn.id = 'new-task-btn';
  taskBtn.textContent = 'New Task';
  formDiv.appendChild(taskDiv);
  taskDiv.appendChild(taskBtn);
  loadTaskForm(taskDiv);

  const projDiv = document.createElement('div');
  projDiv.id = 'new-project';
  const projBtn = document.createElement('button');
  projBtn.id = 'new-project-btn';
  projBtn.textContent = 'New Project';
  formDiv.appendChild(projDiv);
  projDiv.appendChild(projBtn);
  loadProjectForm(projDiv);

  const projContainer = document.createElement('div');
  projContainer.id = 'project-container';
  /*projContainer.innerHTML = `
    <div data-index="0">
      <h2>Default Project</h2>
    </div>`;*/
  pageMain.appendChild(projContainer);
};

const loadTaskForm = (parent) => {
  const taskForm = document.createElement('form');
  taskForm.id = 'new-task-form';
  taskForm.classList.add('hidden');
  parent.appendChild(taskForm);

  taskForm.innerHTML = `
    <div>
      <label for="title">Title</label>
      <input type="text" id="title">
    </div>
    <div>
      <label for="descrip">Description</label>
      <input type="text" id="descrip">
    </div>
    <div>
      <label for="due-date">Due Date</label>
      <input type="date" id="due-date">
    </div>
    <div>
      <label for="project-select">Project</label>
      <select name="project" id="project-select">
      </select>
    </div>
    <div>
      <label for="priority">Priority</label>
      <select name="priority" id="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    <div class="form-row">
      <button id="submit-task">Create</button>
      <button id="clear-task">Clear</button>
    </div>`;
};

const loadProjectForm = (parent) => {
  const projForm = document.createElement('form');
  projForm.id = 'new-project-form';
  projForm.classList.add('hidden');
  parent.appendChild(projForm);

  projForm.innerHTML = `
    <div>
      <label for="proj-name">Name</label>
      <input type="text" id="proj-name">
    </div>
    <button id="submit-project">Create</button>
    <button id="clear-project">Clear</button>`;
};

const addBtnHandlers = () => {
  const newTaskForm = document.getElementById('new-task-form');
  const newProjectForm = document.getElementById('new-project-form');

  document.getElementById('new-task-btn').addEventListener('click', e => {
    toggleForm(newTaskForm);
    hideForm(newProjectForm);
  });

  document.getElementById('new-project-btn').addEventListener('click', e => {
    toggleForm(newProjectForm);
    hideForm(newTaskForm);
  });
};

const toggleForm = (form) => {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
  } else {
    form.classList.add('hidden');
  }
};

const hideForm = (form) => {
  form.classList.add('hidden');
};

export { loadPage };