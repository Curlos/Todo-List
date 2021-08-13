import { toggleElemVisibility } from './toggleElemVisibility';
import { addTask } from './addTaskToList';

const getAddTaskButtons = () => {
  const addTaskButtons = document.createElement('span');
  const addTaskRedButton = document.createElement('button');
  const cancelAddTaskButton = document.createElement('button');

  addTaskButtons.classList.add('addTaskButtons');
  addTaskRedButton.classList.add('addTaskRedButton');
  cancelAddTaskButton.classList.add('cancelAddTask');

  addTaskRedButton.textContent = 'Add task';
  cancelAddTaskButton.textContent = 'Cancel';

  addTaskRedButton.addEventListener('click', addTask);
  cancelAddTaskButton.addEventListener('click', cancelAddTask);

  addTaskButtons.append(addTaskRedButton);
  addTaskButtons.append(cancelAddTaskButton);

  return addTaskButtons;
};

const cancelAddTask = (event) => {
  const cancelAddTaskButton = event.target;

  const addTaskForm = cancelAddTaskButton.parentElement.parentElement.parentElement;

  const addTaskFormButton = document.querySelector('.addTaskFormButton');

  console.log(addTaskFormButton);

  toggleElemVisibility(addTaskForm);
  toggleElemVisibility(addTaskFormButton);
};

module.exports = {
  getAddTaskButtons,
};
