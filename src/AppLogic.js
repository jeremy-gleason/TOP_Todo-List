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

export { taskFactory, projectFactory };