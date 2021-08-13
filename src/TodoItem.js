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

export default TodoItem;
