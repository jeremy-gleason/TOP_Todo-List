/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AppLogic.js":
/*!*************************!*\
  !*** ./src/AppLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectFactory: () => (/* binding */ projectFactory),
/* harmony export */   restoreProjMethods: () => (/* binding */ restoreProjMethods),
/* harmony export */   taskFactory: () => (/* binding */ taskFactory)
/* harmony export */ });
const taskFactory = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
}

const projectFactory = (name) => {
  const tasks = [];
  const addTask = (task) => {
    tasks.push(task);
  }
  const removeTask = (taskId) => {
    tasks.splice(taskId, 1);
  }
  return { name, tasks, addTask, removeTask };
}

const restoreProjMethods = (project) => {
  project.addTask = (function(task) {
    this.tasks.push(task);
  }).bind(project);
  project.removeTask = (function(taskId) {
    this.tasks.splice(taskId, 1);
  });
};



/***/ }),

/***/ "./src/Page.js":
/*!*********************!*\
  !*** ./src/Page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
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



/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFromStorage: () => (/* binding */ loadFromStorage),
/* harmony export */   saveToStorage: () => (/* binding */ saveToStorage)
/* harmony export */ });
const loadFromStorage = (itemKey) => {
  if (localStorage[itemKey]) {
    return JSON.parse(localStorage.getItem(itemKey));
  } else {
    return [];
  }
};

const saveToStorage = (itemKey, itemVal) => {
  localStorage.setItem(itemKey, JSON.stringify(itemVal));
};



/***/ }),

/***/ "./src/UserInterface.js":
/*!******************************!*\
  !*** ./src/UserInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearProjects: () => (/* binding */ clearProjects),
/* harmony export */   displayProject: () => (/* binding */ displayProject),
/* harmony export */   displayTask: () => (/* binding */ displayTask),
/* harmony export */   updateProjSelect: () => (/* binding */ updateProjSelect)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./src/Page.js");
/* harmony import */ var _AppLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLogic */ "./src/AppLogic.js");
/* harmony import */ var _UserInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserInterface */ "./src/UserInterface.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");





(0,_Page__WEBPACK_IMPORTED_MODULE_0__.loadPage)();

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
    (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.displayProject)(project.name, i);
    const projTasks = project.tasks;
    for (let j = 0; j < projTasks.length; j++) {
      const task = projTasks[j];
      (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.displayTask)(task.title, task.description, task.dueDate, task.priority, i, j);
    }
  }
};

const deleteTask = (projId, taskId) => {
  projects[projId].removeTask(taskId);
  (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.clearProjects)();
  displayProjectsAndTasks();
  (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.saveToStorage)("projects", projects);
};

const projects = (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.loadFromStorage)("projects");

if (projects.length === 0) {
  projects.push((0,_AppLogic__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('Default Project'));
} else {
  for (const proj of projects) {
    (0,_AppLogic__WEBPACK_IMPORTED_MODULE_1__.restoreProjMethods)(proj);
  }
}

console.log(projects);

(0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.updateProjSelect)(projects.map(proj => proj.name));
displayProjectsAndTasks();

document.getElementById('submit-task').addEventListener('click', e => {
  e.preventDefault();
  projects[projectSelect.value].addTask((0,_AppLogic__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(titleInput.value, descripInput.value, dateInput.value, priorityInput.value));
  resetInputs();
  (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.clearProjects)();
  displayProjectsAndTasks();
  (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.saveToStorage)("projects", projects);
});

document.getElementById('clear-task').addEventListener('click', e => {
  e.preventDefault();
  resetInputs();
});

document.getElementById('submit-project').addEventListener('click', e => {
  e.preventDefault();
  if (projNameInput.value) {
    projects.push((0,_AppLogic__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(projNameInput.value));
    projNameInput.value = '';
    (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.clearProjects)();
    displayProjectsAndTasks();
    (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.updateProjSelect)(projects.map(pr => pr.name));
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksNkRBQWtCO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUEsZ0VBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0Msc0RBQVc7QUFDbkQ7QUFDQSxFQUFFLDZEQUFhO0FBQ2Y7QUFDQSxFQUFFLHVEQUFhO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5REFBYztBQUNoQztBQUNBLElBQUksNkRBQWE7QUFDakI7QUFDQSxJQUFJLGdFQUFnQjtBQUNwQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9BcHBMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XG59XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgfVxuICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgIHRhc2tzLnNwbGljZSh0YXNrSWQsIDEpO1xuICB9XG4gIHJldHVybiB7IG5hbWUsIHRhc2tzLCBhZGRUYXNrLCByZW1vdmVUYXNrIH07XG59XG5cbmNvbnN0IHJlc3RvcmVQcm9qTWV0aG9kcyA9IChwcm9qZWN0KSA9PiB7XG4gIHByb2plY3QuYWRkVGFzayA9IChmdW5jdGlvbih0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9KS5iaW5kKHByb2plY3QpO1xuICBwcm9qZWN0LnJlbW92ZVRhc2sgPSAoZnVuY3Rpb24odGFza0lkKSB7XG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGFza0lkLCAxKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyB0YXNrRmFjdG9yeSwgcHJvamVjdEZhY3RvcnksIHJlc3RvcmVQcm9qTWV0aG9kcyB9OyIsImNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgbG9hZEhlYWRlcigpO1xuICBsb2FkTWFpbigpO1xuICBhZGRCdG5IYW5kbGVycygpO1xufTtcblxuY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBwYWdlSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBwYWdlSDEudGV4dENvbnRlbnQgPSAnVGFza0JvYXJkJztcbiAgcGFnZUhlYWRlci5hcHBlbmRDaGlsZChwYWdlSDEpO1xuICByb290LmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xufTtcblxuY29uc3QgbG9hZE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1EaXYuaWQgPSAnZm9ybS1kaXYnO1xuICByb290LmFwcGVuZENoaWxkKHBhZ2VNYWluKTtcbiAgcGFnZU1haW4uYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5cbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRGl2LmlkID0gJ25ldy10YXNrJztcbiAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0YXNrQnRuLmlkID0gJ25ldy10YXNrLWJ0bic7XG4gIHRhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICBmb3JtRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tCdG4pO1xuICBsb2FkVGFza0Zvcm0odGFza0Rpdik7XG5cbiAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qRGl2LmlkID0gJ25ldy1wcm9qZWN0JztcbiAgY29uc3QgcHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qQnRuLmlkID0gJ25ldy1wcm9qZWN0LWJ0bic7XG4gIHByb2pCdG4udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICBmb3JtRGl2LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICBwcm9qRGl2LmFwcGVuZENoaWxkKHByb2pCdG4pO1xuICBsb2FkUHJvamVjdEZvcm0ocHJvakRpdik7XG5cbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qQ29udGFpbmVyLmlkID0gJ3Byb2plY3QtY29udGFpbmVyJztcbiAgLypwcm9qQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGRhdGEtaW5kZXg9XCIwXCI+XG4gICAgICA8aDI+RGVmYXVsdCBQcm9qZWN0PC9oMj5cbiAgICA8L2Rpdj5gOyovXG4gIHBhZ2VNYWluLmFwcGVuZENoaWxkKHByb2pDb250YWluZXIpO1xufTtcblxuY29uc3QgbG9hZFRhc2tGb3JtID0gKHBhcmVudCkgPT4ge1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdGFza0Zvcm0uaWQgPSAnbmV3LXRhc2stZm9ybSc7XG4gIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gIHRhc2tGb3JtLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZS1kYXRlXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LXNlbGVjdFwiPlByb2plY3Q8L2xhYmVsPlxuICAgICAgPHNlbGVjdCBuYW1lPVwicHJvamVjdFwiIGlkPVwicHJvamVjdC1zZWxlY3RcIj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICA8YnV0dG9uIGlkPVwic3VibWl0LXRhc2tcIj5DcmVhdGU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gaWQ9XCJjbGVhci10YXNrXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RGb3JtID0gKHBhcmVudCkgPT4ge1xuICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgcHJvakZvcm0uaWQgPSAnbmV3LXByb2plY3QtZm9ybSc7XG4gIHByb2pGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvakZvcm0pO1xuXG4gIHByb2pGb3JtLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cInByb2otbmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qLW5hbWVcIj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGlkPVwic3VibWl0LXByb2plY3RcIj5DcmVhdGU8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGlkPVwiY2xlYXItcHJvamVjdFwiPkNsZWFyPC9idXR0b24+YDtcbn07XG5cbmNvbnN0IGFkZEJ0bkhhbmRsZXJzID0gKCkgPT4ge1xuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1mb3JtJyk7XG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWZvcm0nKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICB0b2dnbGVGb3JtKG5ld1Rhc2tGb3JtKTtcbiAgICBoaWRlRm9ybShuZXdQcm9qZWN0Rm9ybSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIHRvZ2dsZUZvcm0obmV3UHJvamVjdEZvcm0pO1xuICAgIGhpZGVGb3JtKG5ld1Rhc2tGb3JtKTtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVGb3JtID0gKGZvcm0pID0+IHtcbiAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxufTtcblxuY29uc3QgaGlkZUZvcm0gPSAoZm9ybSkgPT4ge1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufTtcblxuZXhwb3J0IHsgbG9hZFBhZ2UgfTsiLCJjb25zdCBsb2FkRnJvbVN0b3JhZ2UgPSAoaXRlbUtleSkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlW2l0ZW1LZXldKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbUtleSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3Qgc2F2ZVRvU3RvcmFnZSA9IChpdGVtS2V5LCBpdGVtVmFsKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW1LZXksIEpTT04uc3RyaW5naWZ5KGl0ZW1WYWwpKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRGcm9tU3RvcmFnZSwgc2F2ZVRvU3RvcmFnZSB9OyIsIi8vIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKTtcblxuY29uc3QgZGlzcGxheVByb2plY3QgPSAobmFtZSwgaW5kZXgpID0+IHtcbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2pEaXYuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwcm9qRGl2LmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvakRpdik7XG59O1xuXG5jb25zdCBkaXNwbGF5VGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qSWQsIHRhc2tJZCkgPT4ge1xuICBjb25zdCBwYXJlbnRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7cHJvaklkfSddYCk7XG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKGAke3ByaW9yaXR5fS1wcmlvcml0eWApO1xuICB0YXNrRGl2LmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY29uc3QgdGFza0Rlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tEZXNjcmlwLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tEdWUudGV4dENvbnRlbnQgPSBgRHVlOiAke2R1ZURhdGV9YDtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVsZXRlQnRuLnR5cGUgPSAnaW1hZ2UnO1xuICBkZWxldGVCdG4uZGF0YXNldC5wcm9qSWQgPSBwcm9qSWQ7XG4gIGRlbGV0ZUJ0bi5kYXRhc2V0LnRhc2tJZCA9IHRhc2tJZDtcbiAgZGVsZXRlQnRuLnNyYyA9ICdkZWxldGUuc3ZnJztcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICBwYXJlbnRQcm9qLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xufTtcblxuY29uc3QgY2xlYXJQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICB3aGlsZSAocHJvakNvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBwcm9qQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2pDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZVByb2pTZWxlY3QgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgcHJvalNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXNlbGVjdCcpO1xuICB3aGlsZSAocHJvalNlbGVjdC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBwcm9qU2VsZWN0LnJlbW92ZUNoaWxkKHByb2pTZWxlY3QuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2pPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwcm9qT3B0aW9uLnZhbHVlID0gaTtcbiAgICBwcm9qT3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV07XG4gICAgcHJvalNlbGVjdC5hcHBlbmRDaGlsZChwcm9qT3B0aW9uKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3QsIGRpc3BsYXlUYXNrLCBjbGVhclByb2plY3RzLCB1cGRhdGVQcm9qU2VsZWN0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gXCIuL1BhZ2VcIjtcbmltcG9ydCB7IHRhc2tGYWN0b3J5LCBwcm9qZWN0RmFjdG9yeSwgcmVzdG9yZVByb2pNZXRob2RzIH0gZnJvbSBcIi4vQXBwTG9naWNcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5VGFzaywgY2xlYXJQcm9qZWN0cywgdXBkYXRlUHJvalNlbGVjdCB9IGZyb20gXCIuL1VzZXJJbnRlcmZhY2VcIjtcbmltcG9ydCB7IGxvYWRGcm9tU3RvcmFnZSwgc2F2ZVRvU3RvcmFnZSB9IGZyb20gXCIuL1N0b3JhZ2VcIjtcblxubG9hZFBhZ2UoKTtcblxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGVzY3JpcElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXAnKTtcbmNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXNlbGVjdCcpO1xuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuY29uc3QgcHJvak5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qLW5hbWUnKTtcblxuY29uc3QgcmVzZXRJbnB1dHMgPSAoKSA9PiB7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgZGVzY3JpcElucHV0LnZhbHVlID0gJyc7XG4gIGRhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICBwcmlvcml0eUlucHV0LnZhbHVlID0gJ2xvdyc7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHNBbmRUYXNrcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0Lm5hbWUsIGkpO1xuICAgIGNvbnN0IHByb2pUYXNrcyA9IHByb2plY3QudGFza3M7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qVGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBwcm9qVGFza3Nbal07XG4gICAgICBkaXNwbGF5VGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHksIGksIGopO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IChwcm9qSWQsIHRhc2tJZCkgPT4ge1xuICBwcm9qZWN0c1twcm9qSWRdLnJlbW92ZVRhc2sodGFza0lkKTtcbiAgY2xlYXJQcm9qZWN0cygpO1xuICBkaXNwbGF5UHJvamVjdHNBbmRUYXNrcygpO1xuICBzYXZlVG9TdG9yYWdlKFwicHJvamVjdHNcIiwgcHJvamVjdHMpO1xufTtcblxuY29uc3QgcHJvamVjdHMgPSBsb2FkRnJvbVN0b3JhZ2UoXCJwcm9qZWN0c1wiKTtcblxuaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KCdEZWZhdWx0IFByb2plY3QnKSk7XG59IGVsc2Uge1xuICBmb3IgKGNvbnN0IHByb2ogb2YgcHJvamVjdHMpIHtcbiAgICByZXN0b3JlUHJvak1ldGhvZHMocHJvaik7XG4gIH1cbn1cblxuY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG51cGRhdGVQcm9qU2VsZWN0KHByb2plY3RzLm1hcChwcm9qID0+IHByb2oubmFtZSkpO1xuZGlzcGxheVByb2plY3RzQW5kVGFza3MoKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0c1twcm9qZWN0U2VsZWN0LnZhbHVlXS5hZGRUYXNrKHRhc2tGYWN0b3J5KHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXBJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LnZhbHVlKSk7XG4gIHJlc2V0SW5wdXRzKCk7XG4gIGNsZWFyUHJvamVjdHMoKTtcbiAgZGlzcGxheVByb2plY3RzQW5kVGFza3MoKTtcbiAgc2F2ZVRvU3RvcmFnZShcInByb2plY3RzXCIsIHByb2plY3RzKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcmVzZXRJbnB1dHMoKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChwcm9qTmFtZUlucHV0LnZhbHVlKSB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0RmFjdG9yeShwcm9qTmFtZUlucHV0LnZhbHVlKSk7XG4gICAgcHJvak5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICBkaXNwbGF5UHJvamVjdHNBbmRUYXNrcygpO1xuICAgIHVwZGF0ZVByb2pTZWxlY3QocHJvamVjdHMubWFwKHByID0+IHByLm5hbWUpKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qTmFtZUlucHV0LnZhbHVlID0gJyc7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWJ0bicpKSB7XG4gICAgZGVsZXRlVGFzayhlLnRhcmdldC5kYXRhc2V0LnByb2pJZCwgZS50YXJnZXQuZGF0YXNldC50YXNrSWQpO1xuICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=