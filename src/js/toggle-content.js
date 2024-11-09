//Скрытие контента с логотипами
const content = document.querySelector('.swiper')
// Получаем все кнопки с классом 'brands__button-show-all'
const buttons = document.querySelectorAll('.button-show-all')

// Сохранение оригинального текста кнопки в data-атрибут при инициализации
buttons.forEach((button) => {
  // Если data-original-text еще не установлен, сохраняем исходный текст
  if (!button.hasAttribute('data-original-text')) {
    button.setAttribute('data-original-text', button.textContent)
  }

  button.addEventListener('click', () => toggleContent(button))
})

// Функция для сворачивания/разворачивания контента
function toggleContent(button) {
  // Используем data-target, чтобы найти соответствующий контейнер
  const containerId = button.getAttribute('data-target')
  const container = document.getElementById(containerId)

  // Переключаем классы folded/expanded для контейнера
  container.classList.toggle('folded')
  container.classList.toggle('expanded')

  // Меняем текст кнопки в зависимости от состояния
  if (container.classList.contains('expanded')) {
    button.textContent = 'Скрыть'
    button.classList.add('rotated')
  } else {
    // Восстанавливаем текст кнопки из data-original-text
    button.textContent = button.getAttribute('data-original-text')
    button.classList.remove('rotated')
  }
}
