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

export { taskFactory, projectFactory, restoreProjMethods };