const siteSections = document.querySelector('.site-sections');
const siteSectionsToggle = siteSections.querySelector('.site-sections__toggle');
const contacts = document.querySelector('.contacts');
const contactsToggle = contacts.querySelector('.contacts__toggle');

const toggleSiteSections = () => {
  const value = siteSections.getAttribute('data-site-sections');

  siteSectionsToggle.addEventListener('click', () => {
    if (value === 'is-closed') {
      siteSections.removeAttribute('is-closed');
      siteSections.setAttribute('data-site-sections', 'is-opened');
    } else {
      siteSections.removeAttribute('is-opened');
      siteSections.setAttribute('data-site-sections', 'is-closed');
    }
  });
};

const toggleContacts = () => {
  contactsToggle.addEventListener('click', () => {
    contacts.setAttribute('data-contacts', 'is-opened');
  });
};

export {
  toggleSiteSections,
  toggleContacts
};
