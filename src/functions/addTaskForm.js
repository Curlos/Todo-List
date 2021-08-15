import { toggleElemVisibility } from './toggleElemVisibility';
import { getAddTaskBottomOptions } from './addTaskBottomOptions';
import { getAddTaskButtons } from './addTaskButtons';

const displayAddTaskForm = (event) => {
  event.preventDefault();
  console.log('hello wrodll afdjasdfas');
  const button = event.target;
  const addTaskFormButton = button.parentElement;
  toggleElemVisibility(addTaskFormButton);

  const placeholderTaskForm = document.querySelector('.placeholderTaskForm');

  const addTaskForm = document.createElement('div');
  const formChildElems = document.createElement('div');
  const taskNameInput = document.createElement('input');
  const taskDescriptionInput = document.createElement('input');
  const addTaskBottomOptions = getAddTaskBottomOptions();
  const addTaskButtons = getAddTaskButtons();

  addTaskForm.classList.add('addTaskForm');
  formChildElems.classList.add('formChildElems');

  taskNameInput.setAttribute('type', 'text');
  taskNameInput.setAttribute('id', 'taskNameInput');
  taskNameInput.setAttribute('placeholder', 'Task name');
  taskNameInput.classList.add('taskNameInput');
  taskNameInput.classList.add('taskInput');

  taskDescriptionInput.setAttribute('type', 'text');
  taskDescriptionInput.setAttribute('id', 'taskDescriptionInput');
  taskDescriptionInput.setAttribute('placeholder', 'Description');

  formChildElems.append(taskNameInput);
  formChildElems.append(taskDescriptionInput);
  formChildElems.append(addTaskBottomOptions);
  formChildElems.append(addTaskButtons);
  addTaskForm.append(formChildElems);
  placeholderTaskForm.append(addTaskForm);
};

module.exports = {
  displayAddTaskForm,
};
