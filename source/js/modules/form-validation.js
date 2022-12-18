const form = document.querySelector('[data-form]');
const userName = form.querySelector('[name=username]');
const userPhone = form.querySelector('[phone=userphone]');

const letters = /^[а-яА-ЯёЁa-zA-Z]+$/;
const phoneNumbers = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/;

const checkNameValidity = () => {
  form.addEventListener('submit', (evt) => {
    if (userName.value.match(letters)) {
      return true;
    } else {
      evt.preventDefault();
      userName.focus();
      alert('В поле Имя можно вводить только буквы');
      return false;
    }
  });
};

const checkPhoneValidity = () => {
  form.addEventListener('submit', (evt) => {
    if (userPhone.value.match(phoneNumbers)) {
      return true;
    } else {
      evt.preventDefault();
      userPhone.focus();
      alert('В поле Телефон можно вводить только цифры');
      return false;
    }
  });
};

export {
  checkNameValidity,
  checkPhoneValidity
};
