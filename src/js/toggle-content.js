//Скрытие контента с логотипами
const content = document.querySelector('.swiper')
const button = document.querySelector('.brands__button-show-all')

function toggleContent() {
  let foldedBlockHeight = '170px' //Высота свернутого блока

  if (
    content.style.maxHeight &&
    content.style.maxHeight !== foldedBlockHeight
  ) {
    // Если max-height больше 160px, значит, контент развернут – сворачиваем его
    content.style.maxHeight = foldedBlockHeight
    button.textContent = 'Показать все'
    button.classList.remove('rotated')
  } else {
    // Если контент свернут, устанавливаем max-height равной полной высоте содержимого
    content.style.maxHeight = `${content.scrollHeight}px`
    button.textContent = 'Скрыть'
    button.classList.add('rotated')
  }
}

button.addEventListener('click', toggleContent)
