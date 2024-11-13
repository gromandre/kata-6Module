// Функция для обновления translateX на основе ширины экрана
function updateBurgerMenuPosition() {
  const burgerMenu = document.querySelector('.burger-menu')
  const windowWidth = window.innerWidth

  // Проверяем, что ширина окна больше или равна 1440px
  if (windowWidth >= 1440) {
    // Находим середину экрана и вычитаем 100px
    const middleOfScreen = windowWidth / 2
    const translateXValue = middleOfScreen - 722 // Вычитаем 100px от центра

    // Применяем стиль translateX с вычисленным значением
    burgerMenu.style.transform = `translateX(${translateXValue}px)`
  } else {
    // Если ширина окна меньше 1440px, убираем трансформацию
    burgerMenu.style.transform = 'translateX(0)'
  }
}

// Инициализация при загрузке страницы
updateBurgerMenuPosition()

// Обработчик события при изменении размера окна
window.addEventListener('resize', updateBurgerMenuPosition)
