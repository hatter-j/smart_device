const openModalBtn = document.querySelector('[data-modal="open-modal"]');
const modalContainer = document.querySelector('[data-modal="feedback"]');
const closeModalBtn = document.querySelector('[data-modal="close-modal"]');
const userName = document.getElementById('modal-user-name');
const body = document.getElementById('body');
const wrapper = document.getElementById('wrapper');

const INTERACTIVE_ELEMENTS = ['button', 'a', 'input', 'textarea', '[tabindex]'];
const interactiveElementsArr = wrapper.querySelectorAll(INTERACTIVE_ELEMENTS);

const toggleModal = () => modalContainer.classList.toggle('is-closed');

const openModal = () => {
  openModalBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    toggleModal();
    setTimeout(userName.focus(), 2000);
    body.classList.add('modal-opened');
    modalContainer.classList.add('is-active');
    interactiveElementsArr.forEach((element) => {
      element.setAttribute('tabindex', '-1');
    });
  });
};

const prepareToCloseModal = () => {
  toggleModal();
  body.classList.remove('modal-opened');
  modalContainer.classList.remove('is-active');
  interactiveElementsArr.forEach((element) => {
    element.setAttribute('tabindex', '1');
  });
};

const closeModal = () => {
  closeModalBtn.addEventListener('click', function () {
    prepareToCloseModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      prepareToCloseModal();
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
      prepareToCloseModal();
    }
  });
};

export {openModal, closeModal};
