import 'modern-normalize';
import './sass/main.scss';
// import './js/listeners';

const refs = {
  mobileMenu: document.querySelector('[data-menu]'),
  burgerMenu: document.querySelector('.header__burger'),
};

refs.burgerMenu.addEventListener('click', onBurgerToggle);

function onBurgerToggle() {
  const expanded =
    refs.burgerMenu.getAttribute('aria-expanded') === 'true' || false;

  refs.burgerMenu.classList.toggle('is-open');
  refs.burgerMenu.setAttribute('aria-expanded', !expanded);

  refs.mobileMenu.classList.toggle('is-open');
}
