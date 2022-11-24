const companyDescription = document.querySelector('.company__box');
const descriptionToggle = document.querySelector('.company__button');


const toggleDescription = () => {
  companyDescription.setAttribute('data-company', 'is-closed');
  descriptionToggle.addEventListener('click', () => {
    const value = companyDescription.getAttribute('data-company');
    if (value === 'is-closed') {
      companyDescription.setAttribute('data-company', 'is-opened');
    }
    if (value === 'is-opened') {
      companyDescription.setAttribute('data-company', 'is-closed');
    }
  });
};

export {
  toggleDescription
};
