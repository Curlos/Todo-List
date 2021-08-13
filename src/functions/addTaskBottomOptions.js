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

module.exports = {
  getAddTaskBottomOptions,
};
