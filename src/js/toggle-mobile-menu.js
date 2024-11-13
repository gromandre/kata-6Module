const openButton = document.querySelector('.header__button--burger-open')
const closeButton = document.querySelector('.action-menu__button--close')
const burgerMenu = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const headerInner = document.querySelector('.header__inner')
const main = document.querySelector('.main')
const header = document.querySelector('.header') // Получаем элемент header

function toggleMenu(isOpen) {
  burgerMenu.style.display = isOpen ? 'flex' : 'none'
  body.style.overflow = isOpen ? 'hidden' : 'auto'
  headerInner.style.opacity = isOpen ? '0.03' : '1'
  main.style.opacity = isOpen ? '0.03' : '1'
  header.style.borderBottom = isOpen ? 'none' : '1px solid #d9fff5'
}

openButton.addEventListener('click', () => toggleMenu(true))
closeButton.addEventListener('click', () => toggleMenu(false))
