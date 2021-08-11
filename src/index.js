const taskItemList = document.querySelector('.taskItemList')
const taskInput = document.querySelector('.taskInput')
const addTaskButton = document.querySelector('.addTaskButton')

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
    const taskName = taskInput.value
    console.log(taskName)
    displayNewTask(taskName)
    taskInput.value = ''

    allTasks.push()
}

// DOM manipulation for displaying a newly added task
const displayNewTask = (taskName) => {
    const newTaskElem = document.createElement('div')
    const taskNameText = document.createTextNode(taskName)

    newTaskElem.classList.add('taskItem')
    newTaskElem.append(taskNameText)
    taskItemList.append(newTaskElem)

    console.log(taskItemList)
}

const simpleTask = new TodoItem('title', false)
console.log(simpleTask.getName())
simpleTask.setName('newName bois')
console.log(simpleTask.getName())
console.log(simpleTask.isComplete())

console.log(simpleTask)

taskInput.addEventListener('submit', addTask)
addTaskButton.addEventListener('click', addTask)

console.log('Add task')