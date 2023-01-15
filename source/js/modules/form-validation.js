const modalContainer = document.querySelector('[data-modal="feedback"]');
const userName = modalContainer.querySelector('[name="modal-user-name"]');
const userPhone = modalContainer.querySelector('[name="modal-user-phone"]');
const modalForm = modalContainer.querySelector('#modal-form');

const resetForm = () => {
  modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    userName.value = '';
    userPhone.value = '';
  });
};

const validateForm = () => {
  if (userName.value || userPhone.value) {
    modalForm.addEventListener('submit', function () {
      localStorage.setItem('modal-user-name', userName.value);
      localStorage.setItem('modal-user-phone', userPhone.value);
      modalForm.submit();
      resetForm();
    });
  }
};

export {
  validateForm
};
