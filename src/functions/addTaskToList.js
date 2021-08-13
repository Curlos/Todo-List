import TodoItem from '../classes/TodoItem';
import { toggleModal } from './modal';
import { toggleCompleteTask } from './handleComplete';

const taskItemList = document.querySelector('.taskItemList');

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

module.exports = {
  addTask,
  displayNewTask,
};
