const siteSections = document.querySelector('.site-sections');
const siteSectionsToggle = siteSections.querySelector('.site-sections__toggle');
const contacts = document.querySelector('.contacts');
const contactsToggle = siteSections.querySelector('.contacts__toggle');

const toggleSiteSections = () => {
  siteSectionsToggle.addEventListener('click', () => {
    siteSections.setAttribute('data-site-sections', 'is-opened');
  });
  /*
  const value = siteSections.getAttribute('data-site-sections');

  siteSectionsToggle.addEventListener('click', () => {
    if (value === 'is-closed') {
      siteSections.setAttribute('data-site-sections', 'is-opened');
    }
    if (value === 'is-opened') {
      siteSections.setAttribute('data-site-sections', 'is-closed');
    }
  });*/
/*
  if (value === 'is-closed') {
    siteSectionsToggle.addEventListener('click', () => {
      siteSections.removeAttribute('data-site-sections', 'is-closed');
      siteSections.setAttribute('data-site-sections', 'is-opened');
    });
  }
  if (value === 'is-opened') {
    siteSectionsToggle.addEventListener('click', () => {
      siteSections.removeAttribute('data-site-sections', 'is-opened');
      siteSections.setAttribute('data-site-sections', 'is-closed');
    });
  }*/
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
