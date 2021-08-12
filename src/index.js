const taskItemList = document.querySelector('.taskItemList')
const taskInput = document.querySelector('.taskInput')
const addTaskButton = document.querySelector('.addTaskButton')
const modal = document.querySelector('.modal')

const allTasks = []
const taskID = 0
class TodoItem {

    constructor(name, complete=false, description='', dueDate='', listType='', priority='') {
        this.name = name
        this.complete = complete
        this.description = description
        this.dueDate = dueDate
        this.listType = listType
        this.priority = priority
    }

    setName = (name) => {
        this.name = name
    }

    setDescription = (description) => {
        this.description = description
    }

    setDueDate = (dueDate) => {
        this.dueDate = dueDate
    }

    setListType = (listType) => {
        this.listType = listType
    }

    setPriority = (priority) => {
        this.priority = priority
    }

    toggleComplete = () => {
        this.complete = !complete
    }

    getName = () => this.name
    getDescription = () => this.description
    getDueDate = () => this.dateDue
    getListType = () => this.listType
    getPriority = () => this.priority
    isComplete = () => this.complete
}

const editTodoItem = () => {

}

// Logic for adding task
const addTask = (event) => {
    event.preventDefault()
    //displayAddTaskForm()
    const taskName = taskInput.value
    const taskItem = new TodoItem(taskName, false)
    allTasks.push(taskItem)

    displayNewTask(taskName)
    taskInput.value = ''

    displayAllTasks()
    console.log(allTasks)
}

const displayAddTaskForm = () => {
    const addTaskForm = document.createElement('div')
    addTaskForm.classList.add('addTaskForm')

    const formChildElems = document.createElement('div')
    formChildElems.classList.add('formChildElems')

    const taskNameInput = document.createElement('input')
    taskNameInput.setAttribute('type', 'text')
    taskNameInput.setAttribute('id', 'taskNameInput')
    taskNameInput.setAttribute('placeholder', 'Task name')
    taskNameInput.classList.add('taskNameInput')
    taskNameInput.classList.add('taskInput')

    const taskDescriptionInput = document.createElement('input')
    taskDescriptionInput.setAttribute('type', 'text')
    taskDescriptionInput.setAttribute('id', 'taskDescriptionInput')
    taskDescriptionInput.setAttribute('placeholder', 'Description')

    formChildElems.append(taskNameInput)
    formChildElems.append(taskDescriptionInput)
    addTaskForm.append(formChildElems)

}

/*

</div class="addTaskForm">
    <div class="formChildElems">
        <input type="text" id="taskNameInput" class="taskNameInput taskInput" placeholder="Task name">
        <br/>
        <input type="text" id="taskDescriptionInput" class="taskDescriptionInput" placeholder="Description">
    </div>
<div>

*/

// DOM manipulation for displaying a newly added task
const displayNewTask = (taskName) => {
    const newTaskElem = document.createElement('div')
    const taskNameText = document.createTextNode(taskName)

    const checkBoxInput = document.createElement('input')
    checkBoxInput.setAttribute('type', 'checkbox')
    checkBoxInput.addEventListener('click', toggleCompleteTask)

    const editIcon = document.createElement('i')
    editIcon.classList.add('fas')
    editIcon.classList.add('fa-edit')

    const taskLeftSide = document.createElement('span')
    taskLeftSide.classList.add('taskLeftSide')

    const taskRightSide = document.createElement('span')
    taskRightSide.classList.add('taskRightSide')

    taskLeftSide.append(checkBoxInput)
    taskLeftSide.append(taskNameText)
    taskRightSide.append(editIcon)

    newTaskElem.classList.add('taskItem')
    newTaskElem.append(taskLeftSide)
    newTaskElem.append(taskRightSide)

    newTaskElem.addEventListener('click', toggleModal)
    taskItemList.append(newTaskElem)

}

const toggleCompleteTask = (event) => {
    console.log(event.target.parentElement)
}

const displayCompleteTask = () => {

}

const displayAllTasks = () => {
    for (let task of allTasks) {
        console.log(task.getName())
        console.log(task)
    }
}

const generateTestTasks = () => {
    const testTasks = ['display tasks from tasks array', 'style task when checked completed', 'Let users edit tasks to change their name', 'Let users edit tasks to change their priority']

    for (let testTask of testTasks) {
        const taskItem = new TodoItem(testTask)
        allTasks.push(taskItem)
        displayNewTask(testTask)
        allTasks.push(taskItem)
    }
}

const toggleModal = () => {
    modal.classList.toggle('show-modal')
    console.log('hello wrold')
}

const windowOnClick = (event) => {
    if (event.target === modal) {
        toggleModal()
    } 
}

const simpleTask = new TodoItem('title', false)
console.log(simpleTask.getName())
simpleTask.setName('newName bois')
console.log(simpleTask.getName())
console.log(simpleTask.isComplete())

console.log(simpleTask)

taskInput.addEventListener('submit', addTask)
addTaskButton.addEventListener('click', addTask)
window.addEventListener('click', windowOnClick)

generateTestTasks()