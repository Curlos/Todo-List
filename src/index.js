/* eslint-disable no-restricted-syntax */
const taskItemList = document.querySelector('.taskItemList');
const taskInput = document.querySelector('.taskInput');
const displayFormButtons = document.querySelectorAll('.displayFormButton');
const addTaskRedButtons = document.querySelectorAll('.addTaskRedButton');
const cancelAddTaskButtons = document.querySelectorAll('.cancelAddTask');
const modal = document.querySelector('.modal');

const allTasks = [];
const taskID = 0;
class TodoItem {
  constructor(name, complete = false, description = '', dueDate = '', listType = '', priority = '') {
    this.name = name;
    this.complete = complete;
    this.description = description;
    this.dueDate = dueDate;
    this.listType = listType;
    this.priority = priority;
  }

    setName = (name) => {
      this.name = name;
    }

    setDescription = (description) => {
      this.description = description;
    }

    setDueDate = (dueDate) => {
      this.dueDate = dueDate;
    }

    setListType = (listType) => {
      this.listType = listType;
    }

    setPriority = (priority) => {
      this.priority = priority;
    }

    toggleComplete = () => {
      this.complete = !complete;
    }

    getName = () => this.name

    getDescription = () => this.description

    getDueDate = () => this.dateDue

    getListType = () => this.listType

    getPriority = () => this.priority

    isComplete = () => this.complete
}

const editTodoItem = () => {

};

// Logic for adding task
const addTask = (event) => {
  event.preventDefault();
  // displayAddTaskForm()
  const taskName = taskInput.value;
  const taskItem = new TodoItem(taskName, false);
  allTasks.push(taskItem);

  displayNewTask(taskName);
  taskInput.value = '';

  displayAllTasks();
  console.log(allTasks);
  displayAddTaskForm();
};

const cancelAddTask = (event) => {
  const cancelAddTaskButton = event.target;

  const addTaskForm = cancelAddTaskButton.parentElement.parentElement.parentElement;

  const addTaskFormButton = document.querySelector('.addTaskFormButton');

  console.log(addTaskFormButton);

  toggleElemVisibility(addTaskForm);
  toggleElemVisibility(addTaskFormButton);
};

// DOM manipulation for displaying a newly added task
const displayNewTask = (taskName) => {
  const newTaskElem = document.createElement('div');
  const taskNameText = document.createTextNode(taskName);

  const checkBoxInput = document.createElement('input');
  checkBoxInput.setAttribute('type', 'checkbox');
  checkBoxInput.addEventListener('click', toggleCompleteTask);

  const editIcon = document.createElement('i');
  editIcon.classList.add('fas');
  editIcon.classList.add('fa-edit');

  const taskLeftSide = document.createElement('span');
  taskLeftSide.classList.add('taskLeftSide');

  const taskRightSide = document.createElement('span');
  taskRightSide.classList.add('taskRightSide');

  taskLeftSide.append(checkBoxInput);
  taskLeftSide.append(taskNameText);
  taskRightSide.append(editIcon);

  newTaskElem.classList.add('taskItem');
  newTaskElem.append(taskLeftSide);
  newTaskElem.append(taskRightSide);

  newTaskElem.addEventListener('click', toggleModal);
  taskItemList.append(newTaskElem);
};

const toggleCompleteTask = (event) => {
  console.log(event.target.parentElement);
};

const displayCompleteTask = () => {

};

const displayAllTasks = () => {
  for (const task of allTasks) {
    console.log(task.getName());
    console.log(task);
  }
};

const generateTestTasks = () => {
  const testTasks = ['display tasks from tasks array', 'style task when checked completed', 'Let users edit tasks to change their name', 'Let users edit tasks to change their priority'];

  for (const testTask of testTasks) {
    const taskItem = new TodoItem(testTask);
    allTasks.push(taskItem);
    displayNewTask(testTask);
    allTasks.push(taskItem);
  }
};

const getAddTaskBottomOptions = () => {
  const addTaskBottomOptions = document.createElement('span');
  const addTaskLeftOptions = document.createElement('span');
  const addTaskRightOptions = document.createElement('span');
  const datePickerButton = document.createElement('button');
  const listTypeButton = document.createElement('button');
  const faTag = document.createElement('i');
  const faFlag = document.createElement('i');
  const faClock = document.createElement('i');

  addTaskBottomOptions.classList.add('addTaskBottomOptions');
  addTaskLeftOptions.classList.add('addTaskLeftOptions');

  datePickerButton.classList.add('datePickerButton');
  datePickerButton.textContent = 'Today';

  listTypeButton.classList.add('listTypeButton');
  listTypeButton.textContent = 'Inbox';

  addTaskLeftOptions.append(datePickerButton);
  addTaskLeftOptions.append(listTypeButton);

  addTaskRightOptions.classList.add('addTaskRightOptions');
  faTag.classList.add('fas', 'fa-tag');
  faFlag.classList.add('fas', 'fa-flag');
  faClock.classList.add('fas', 'fa-clock');

  addTaskRightOptions.append(faTag);
  addTaskRightOptions.append(faFlag);
  addTaskRightOptions.append(faClock);

  addTaskBottomOptions.append(addTaskLeftOptions);
  addTaskBottomOptions.append(addTaskRightOptions);

  return addTaskBottomOptions;
};

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

const toggleElemVisibility = (elem) => {
  elem.classList.toggle('hidden');
};

const displayAddTaskForm = (event) => {
  event.preventDefault();
  const button = event.target;
  const addTaskFormButton = button.parentElement;
  toggleElemVisibility(addTaskFormButton);

  const addTaskForm = document.querySelector('.addTaskForm');
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
};

const toggleModal = () => {
  modal.classList.toggle('show-modal');
  console.log('hello wrold');
};

const windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};

for (button of displayFormButtons) {
  button.addEventListener('click', displayAddTaskForm);
}

const simpleTask = new TodoItem('title', false);
console.log(simpleTask.getName());
simpleTask.setName('newName bois');
console.log(simpleTask.getName());
console.log(simpleTask.isComplete());

console.log(simpleTask);

taskInput.addEventListener('submit', addTask);
window.addEventListener('click', windowOnClick);

generateTestTasks();

console.log(allTasks);
