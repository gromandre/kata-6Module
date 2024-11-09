import Swiper from 'swiper'

let swiper

function initSwiper() {
  const pagination = document.querySelector('.swiper-pagination')

  // Проверяем, существует ли уже экземпляр Swiper и уничтожаем его, если он есть
  if (swiper) {
    swiper.destroy(true, true)
    if (pagination) pagination.style.display = 'none' //убираем пагинацию
  }

  // Инициализируем Swiper только на экранах менее 768 пикселей
  if (window.innerWidth < 768) {
    swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    if (pagination) pagination.style.display = 'block' //добавляем пагинацию
  }
}

// Проверка при загрузке страницы
initSwiper()

// Проверка при изменении размера окна
window.addEventListener('resize', initSwiper)
