import TodoItem from './classes/TodoItem';
import { toggleModal, windowOnClick } from './functions/modal';
import { displayAddTaskForm } from './addTaskForm';

/* eslint-disable no-restricted-syntax */
const taskItemList = document.querySelector('.taskItemList');
const taskInput = document.querySelector('.taskInput');
const displayFormButtons = document.querySelectorAll('.displayFormButton');
const addTaskRedButtons = document.querySelectorAll('.addTaskRedButton');
const cancelAddTaskButtons = document.querySelectorAll('.cancelAddTask');

const allTasks = [];
const taskID = 0;

const editTodoItem = () => {

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

const toggleElemVisibility = (elem) => {
  elem.classList.toggle('hidden');
};

for (const button of displayFormButtons) {
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
