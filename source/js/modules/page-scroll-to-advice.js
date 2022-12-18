const promoButton = document.querySelector('[data-promo-button]');
const adviceSection = document.querySelector('[data-advice]');

const scrollToAdvice = () => {
  promoButton.addEventListener('click', () => {
    adviceSection.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  });
};

export {
  scrollToAdvice
};
