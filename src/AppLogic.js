const taskFactory = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
}

const projectFactory = (name) => {
  const tasks = [];
  const addTask = (task) => {
    tasks.push(task);
  }
  return { name, tasks, addTask };
}

export { taskFactory, projectFactory };