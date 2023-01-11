const form = document.querySelector('[data-form]');
const userName = form.querySelector('[name="user-name"]');

const checkNameValidity = () => {

  checkNameValidity.prototype = {

    invalidities: [],

    checkValidity(userName) {
      if (!userName.value.match(/^[а-яА-ЯёЁa-zA-Z]+$/)) {
        this.addInvalidity('В поле "Имя" можно вводить только буквы');
      }
    },

    addInvalidity(message) {
      this.invalidities.push(message);
    },

    getInvalidities() {
      return this.invalidities.join('. \n');
    },
  };

  form.addEventListener('submit', (evt) => {
    for (let i = 0; i < userName.length; i++) {

      const input = userName[i];

      if (input.checkValidity() === false) {
        const inputValidation = new checkNameValidity();
        inputValidation.checkValidity(input);
        const validityMessage = inputValidation.getInvalidities();
        input.setValidation(validityMessage);
      }
    }
  });
};

export {
  checkNameValidity
};
