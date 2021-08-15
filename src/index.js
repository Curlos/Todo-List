/* eslint-disable import/prefer-default-export */
import TodoItem from './classes/TodoItem';
import { toggleModal, windowOnClick } from './functions/modal';
import { displayAddTaskForm } from './addTaskForm';
import { toggleCompleteTask } from './functions/handleComplete';
import { toggleElemVisibility } from './functions/toggleElemVisibility';
import { cancelAddTask }

/* eslint-disable no-restricted-syntax */
const taskItemList = document.querySelector('.taskItemList');
const taskInput = document.querySelector('.taskInput');
const displayFormButtons = document.querySelectorAll('.displayFormButton');
const addTaskRedButtons = document.querySelectorAll('.addTaskRedButton');
const cancelAddTaskButtons = document.querySelectorAll('.cancelAddTask');

const allTasks = [];
const taskID = 0;

const displayAllTasks = () => {
  for (const task of allTasks) {
    console.log(task.getName());
    console.log(task);
  }
};

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

// Logic for adding task
export const addTask = (event) => {
  console.log('hello');
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

const editTodoItem = () => {

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

for (const button of displayFormButtons) {
  button.addEventListener('click', displayAddTaskForm);
}

for (const button of addTaskRedButtons) {
  button.addEventListener('click', addTask)
}

for (const button of cancelAddTaskButtons) {
  button.addEventListener('click', cancelAddTask)
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
