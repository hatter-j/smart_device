const companyDescription = document.querySelector('[data-company]');
const descriptionToggle = document.querySelector('[data-company-button]');


const toggleDescription = () => {
  companyDescription.setAttribute('data-company', 'is-closed');
  descriptionToggle.addEventListener('click', () => {
    const value = companyDescription.getAttribute('data-company');
    if (value === 'is-closed') {
      companyDescription.setAttribute('data-company', 'is-opened');
      descriptionToggle.textContent = 'Свернуть';
    }
    if (value === 'is-opened') {
      companyDescription.setAttribute('data-company', 'is-closed');
      descriptionToggle.textContent = 'Подробнее';
    }
  });
};

export {
  toggleDescription
};
