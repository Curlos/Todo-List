const modal = document.querySelector('.modal');

const toggleModal = () => {
  modal.classList.toggle('show-modal');
  console.log('hello wrold');
};

const windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};

module.exports = {
  toggleModal,
  windowOnClick,
};
