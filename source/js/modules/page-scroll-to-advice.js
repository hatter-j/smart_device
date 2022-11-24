const promoButton = document.querySelector('.promo__button');
const adviceSection = document.querySelector('.advice');

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
