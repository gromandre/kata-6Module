// Элементы для мобильного меню
const openButton = document.querySelector('.header__button--burger-open')
const closeButton = document.querySelector('#button-close-menu')
const burgerMenu = document.querySelector('.burger-menu')
const body = document.body
const fill = document.querySelector('.backgroun-fill')

// Функция переключения меню
function toggleMenu(isOpen, elem) {
  elem.style.display = isOpen ? 'flex' : 'none'
  body.style.overflow = isOpen ? 'hidden' : 'auto'
  fill.style.display = isOpen ? 'block' : 'none'
}

// Открытие и закрытие мобильного меню
if (openButton) {
  openButton.addEventListener('click', () => toggleMenu(true, burgerMenu))
}
if (closeButton) {
  closeButton.addEventListener('click', () => toggleMenu(false, burgerMenu))
}

// Открытие формы обратной связи
const messageButtonsOpen = document.querySelectorAll(
  '.action-menu__button--message'
)
const feedback = document.querySelector('#feedback')
messageButtonsOpen.forEach((button) => {
  button.addEventListener('click', () => {
    toggleMenu(false, burgerMenu)
    toggleMenu(true, feedback)
  })
})

// Открытие формы обратного звонка
const callButtonsOpen = document.querySelectorAll('.action-menu__button--call')
const modalCall = document.querySelector('#modal-call')
callButtonsOpen.forEach((button) => {
  button.addEventListener('click', () => {
    toggleMenu(false, burgerMenu)
    toggleMenu(true, modalCall)
  })
})

// Закрытие формы обратной связи и обратного звонка

// Функция для закрытия форм и восстановления стиля хедера
function closeFormsAndRestoreHeader() {
  toggleMenu(false, feedback) // Закрытие формы обратной связи
  toggleMenu(false, modalCall) // Закрытие формы обратного звонка
  toggleMenu(false, burgerMenu)
}

const buttonsCloseFeedback = document.querySelectorAll(
  '.action-menu__button--close'
)
buttonsCloseFeedback.forEach((button) => {
  button.addEventListener('click', closeFormsAndRestoreHeader)
})

// Слушаем клик на main
fill.addEventListener('click', () => {
  closeFormsAndRestoreHeader()
  // closeFormsAndRestoreHeader()
  // if (modalCall.style.display === 'flex' || feedback.style.display === 'flex')
  //   closeFormsAndRestoreHeader()
})
