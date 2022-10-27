const body = document.querySelector('.body');
const menuBody = document.querySelector('.menu');
const burgerMenu = document.querySelector('.header__burger');
const mobileBack = document.querySelector('.dropdown-list__mobile-back');
const menuCloseButton = document.querySelector('.menu__button-close');

const initialMenu = () => {
	document.querySelector('.menu__sub-list').classList.remove('transformation');
	document.querySelector('.menu').querySelector('.menu__list').classList.remove('transformation');
}

burgerMenu.addEventListener('click', () => {
  menuBody.classList.add('menu_open');
  body.classList.add('body_scroll');
  initialMenu();
});

menuCloseButton.addEventListener('click', () => {
  menuBody.classList.remove('menu_open');
  body.classList.remove('body_scroll');
});

menuBody.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu__link-dropdown')) {
    e.preventDefault;
    e.target.closest('.menu__list').classList.add('transformation');
		e.target.closest('.menu__item').querySelector('.menu__sub-list').classList.add('transformation');
    body.classList.add('body_scroll');
  }

  if (e.target.classList.contains('dropdown-list__back-button')) {
    e.target.closest('.menu__sub-list').classList.remove('transformation');
    e.target.closest('.menu').querySelector('.menu__list').classList.remove('transformation');
    body.classList.remove('body_scroll');
  }

  if (e.target.classList.contains('menu__link') && !e.target.classList.contains('menu__link-dropdown')) {
		e.preventDefault();
		menuBody.classList.remove('menu_open');
    body.classList.remove('body_scroll');
	}
})