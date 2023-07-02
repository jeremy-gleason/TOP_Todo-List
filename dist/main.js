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
      <label for="name">Name</label>
      <input type="text" id="name">
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

/***/ "./src/UserInterface.js":
/*!******************************!*\
  !*** ./src/UserInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearProjects: () => (/* binding */ clearProjects),
/* harmony export */   displayProject: () => (/* binding */ displayProject),
/* harmony export */   displayTask: () => (/* binding */ displayTask)
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




(0,_Page__WEBPACK_IMPORTED_MODULE_0__.loadPage)();

const tasks = [];
const projects = [];

const titleInput = document.getElementById('title');
const descripInput = document.getElementById('descrip');
const dateInput = document.getElementById('due-date');
const priorityInput = document.getElementById('priority');

const defaultProject = (0,_AppLogic__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('Default Project');
projects.push(defaultProject);

document.getElementById('submit-task').addEventListener('click', e => {
  e.preventDefault();
  tasks.push((0,_AppLogic__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(titleInput.value, descripInput.value, dateInput.value, priorityInput.value));
  console.log('Tasks: ', tasks);
  defaultProject.addTask(tasks[tasks.length - 1]);
  resetInputs();
  (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.clearProjects)();
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
    (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.displayProject)(project.name, i);
    console.log(project.tasks);
    const projTasks = project.tasks;
    for (let j = 0; j < projTasks.length; j++) {
      const task = projTasks[j];
      (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.displayTask)(task.title, task.description, task.dueDate, task.priority, i, j);
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
  (0,_UserInterface__WEBPACK_IMPORTED_MODULE_2__.clearProjects)();
  displayProjectsAndTasks();
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTRELE9BQU87QUFDbkU7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDdUI7QUFDb0I7O0FBRTdFLCtDQUFROztBQUVSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHlEQUFjO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHNEQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQWE7QUFDZjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBLElBQUksOERBQWM7QUFDbEI7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQSxNQUFNLDJEQUFXO0FBQ2pCO0FBQ0EsR0FBRztBQUNILGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFhO0FBQ2Y7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0FwcExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9QYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Vc2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcbn1cblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9XG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFza0lkKSA9PiB7XG4gICAgdGFza3Muc3BsaWNlKHRhc2tJZCwgMSk7XG4gIH1cbiAgcmV0dXJuIHsgbmFtZSwgdGFza3MsIGFkZFRhc2ssIHJlbW92ZVRhc2sgfTtcbn1cblxuZXhwb3J0IHsgdGFza0ZhY3RvcnksIHByb2plY3RGYWN0b3J5IH07IiwiY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICBsb2FkSGVhZGVyKCk7XG4gIGxvYWRNYWluKCk7XG4gIGFkZEJ0bkhhbmRsZXJzKCk7XG59O1xuXG5jb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHBhZ2VIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHBhZ2VIMS50ZXh0Q29udGVudCA9ICdUYXNrQm9hcmQnO1xuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKHBhZ2VIMSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG59O1xuXG5jb25zdCBsb2FkTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgcGFnZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybURpdi5pZCA9ICdmb3JtLWRpdic7XG4gIHJvb3QuYXBwZW5kQ2hpbGQocGFnZU1haW4pO1xuICBwYWdlTWFpbi5hcHBlbmRDaGlsZChmb3JtRGl2KTtcblxuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tEaXYuaWQgPSAnbmV3LXRhc2snO1xuICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRhc2tCdG4uaWQgPSAnbmV3LXRhc2stYnRuJztcbiAgdGFza0J0bi50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0J0bik7XG4gIGxvYWRUYXNrRm9ybSh0YXNrRGl2KTtcblxuICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2pEaXYuaWQgPSAnbmV3LXByb2plY3QnO1xuICBjb25zdCBwcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2pCdG4uaWQgPSAnbmV3LXByb2plY3QtYnRuJztcbiAgcHJvakJ0bi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gIHByb2pEaXYuYXBwZW5kQ2hpbGQocHJvakJ0bik7XG4gIGxvYWRQcm9qZWN0Rm9ybShwcm9qRGl2KTtcblxuICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2pDb250YWluZXIuaWQgPSAncHJvamVjdC1jb250YWluZXInO1xuICBwYWdlTWFpbi5hcHBlbmRDaGlsZChwcm9qQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGxvYWRUYXNrRm9ybSA9IChwYXJlbnQpID0+IHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHRhc2tGb3JtLmlkID0gJ25ldy10YXNrLWZvcm0nO1xuICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICB0YXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXBcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXBcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWUtZGF0ZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICA8YnV0dG9uIGlkPVwic3VibWl0LXRhc2tcIj5DcmVhdGU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gaWQ9XCJjbGVhci10YXNrXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RGb3JtID0gKHBhcmVudCkgPT4ge1xuICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgcHJvakZvcm0uaWQgPSAnbmV3LXByb2plY3QtZm9ybSc7XG4gIHByb2pGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvakZvcm0pO1xuXG4gIHByb2pGb3JtLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gaWQ9XCJzdWJtaXQtcHJvamVjdFwiPkNyZWF0ZTwvYnV0dG9uPlxuICAgIDxidXR0b24gaWQ9XCJjbGVhci1wcm9qZWN0XCI+Q2xlYXI8L2J1dHRvbj5gO1xufTtcblxuY29uc3QgYWRkQnRuSGFuZGxlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrLWZvcm0nKTtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtZm9ybScpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIHRvZ2dsZUZvcm0obmV3VGFza0Zvcm0pO1xuICAgIGhpZGVGb3JtKG5ld1Byb2plY3RGb3JtKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgdG9nZ2xlRm9ybShuZXdQcm9qZWN0Rm9ybSk7XG4gICAgaGlkZUZvcm0obmV3VGFza0Zvcm0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUZvcm0gPSAoZm9ybSkgPT4ge1xuICBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9XG59O1xuXG5jb25zdCBoaWRlRm9ybSA9IChmb3JtKSA9PiB7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgeyBsb2FkUGFnZSB9OyIsIi8vIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKTtcblxuY29uc3QgZGlzcGxheVByb2plY3QgPSAobmFtZSwgaW5kZXgpID0+IHtcbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2pEaXYuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwcm9qRGl2LmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvakRpdik7XG59O1xuXG5jb25zdCBkaXNwbGF5VGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qSWQsIHRhc2tJZCkgPT4ge1xuICBjb25zdCBwYXJlbnRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7cHJvaklkfSddYCk7XG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKGAke3ByaW9yaXR5fS1wcmlvcml0eWApO1xuICB0YXNrRGl2LmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY29uc3QgdGFza0Rlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tEZXNjcmlwLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tEdWUudGV4dENvbnRlbnQgPSBgRHVlOiAke2R1ZURhdGV9YDtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVsZXRlQnRuLnR5cGUgPSAnaW1hZ2UnO1xuICBkZWxldGVCdG4uZGF0YXNldC5wcm9qSWQgPSBwcm9qSWQ7XG4gIGRlbGV0ZUJ0bi5kYXRhc2V0LnRhc2tJZCA9IHRhc2tJZDtcbiAgZGVsZXRlQnRuLnNyYyA9ICdkZWxldGUuc3ZnJztcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICBwYXJlbnRQcm9qLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xufTtcblxuY29uc3QgY2xlYXJQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICB3aGlsZSAocHJvakNvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBwcm9qQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2pDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5VGFzaywgY2xlYXJQcm9qZWN0cyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tIFwiLi9QYWdlXCI7XG5pbXBvcnQgeyB0YXNrRmFjdG9yeSwgcHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9BcHBMb2dpY1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QsIGRpc3BsYXlUYXNrLCBjbGVhclByb2plY3RzIH0gZnJvbSBcIi4vVXNlckludGVyZmFjZVwiO1xuXG5sb2FkUGFnZSgpO1xuXG5jb25zdCB0YXNrcyA9IFtdO1xuY29uc3QgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuY29uc3QgZGVzY3JpcElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXAnKTtcbmNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdEZWZhdWx0IFByb2plY3QnKTtcbnByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRhc2tzLnB1c2godGFza0ZhY3RvcnkodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcElucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUpKTtcbiAgY29uc29sZS5sb2coJ1Rhc2tzOiAnLCB0YXNrcyk7XG4gIGRlZmF1bHRQcm9qZWN0LmFkZFRhc2sodGFza3NbdGFza3MubGVuZ3RoIC0gMV0pO1xuICByZXNldElucHV0cygpO1xuICBjbGVhclByb2plY3RzKCk7XG4gIGRpc3BsYXlQcm9qZWN0c0FuZFRhc2tzKCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHJlc2V0SW5wdXRzKCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWJ0bicpKSB7XG4gICAgZGVsZXRlVGFzayhlLnRhcmdldC5kYXRhc2V0LnByb2pJZCwgZS50YXJnZXQuZGF0YXNldC50YXNrSWQpO1xuICB9XG59KTtcblxuY29uc3QgcmVzZXRJbnB1dHMgPSAoKSA9PiB7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgZGVzY3JpcElucHV0LnZhbHVlID0gJyc7XG4gIGRhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICBwcmlvcml0eUlucHV0LnZhbHVlID0gJ2xvdyc7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHNBbmRUYXNrcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0Lm5hbWUsIGkpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza3MpO1xuICAgIGNvbnN0IHByb2pUYXNrcyA9IHByb2plY3QudGFza3M7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qVGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBwcm9qVGFza3Nbal07XG4gICAgICBkaXNwbGF5VGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHksIGksIGopO1xuICAgIH1cbiAgfS8qXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrID0gdGFza3NbaV07XG4gICAgZGlzcGxheVRhc2sodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5LCBpKTtcbiAgfSovXG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gKHByb2pJZCwgdGFza0lkKSA9PiB7XG4gIHByb2plY3RzW3Byb2pJZF0ucmVtb3ZlVGFzayh0YXNrSWQpO1xuICAvLyB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICBjbGVhclByb2plY3RzKCk7XG4gIGRpc3BsYXlQcm9qZWN0c0FuZFRhc2tzKCk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==