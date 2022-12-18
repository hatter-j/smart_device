const siteSections = document.querySelector('[data-site-sections]');
const siteSectionsToggle = siteSections.querySelector('[data-site-sections-toggle]');

const contacts = document.querySelector('[data-contacts]');
const contactsToggle = contacts.querySelector('[data-contacts-toggle]');

const toggleAccordeon = () => {
  siteSections.setAttribute('data-site-sections', 'is-closed');
  contacts.setAttribute('data-contacts', 'is-closed');

  siteSectionsToggle.addEventListener('click', () => {
    const value = siteSections.getAttribute('data-site-sections');
    if (value === 'is-closed') {
      siteSections.setAttribute('data-site-sections', 'is-opened');
      contacts.setAttribute('data-contacts', 'is-closed');
    }
    if (value === 'is-opened') {
      siteSections.setAttribute('data-site-sections', 'is-closed');
      contacts.setAttribute('data-contacts', 'is-opened');
    }
  });

  contactsToggle.addEventListener('click', () => {
    const value = contacts.getAttribute('data-contacts');
    if (value === 'is-closed') {
      contacts.setAttribute('data-contacts', 'is-opened');
      siteSections.setAttribute('data-site-sections', 'is-closed');
    }
    if (value === 'is-opened') {
      contacts.setAttribute('data-contacts', 'is-closed');
      siteSections.setAttribute('data-site-sections', 'is-opened');
    }
  });
};

export {
  toggleAccordeon
};
