import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let swiper = null

function initSwiper() {
  const pagination = document.querySelector('.swiper-pagination')

  // Проверяем, существует ли уже экземпляр Swiper и уничтожаем его, если он есть
  if (swiper) {
    // Проверка, существует ли экземпляр Swiper
    swiper.destroy()
    swiper = null // Сброс состояния
    console.log('Удалил свайпер')
  }

  // Инициализируем Swiper только на экранах менее 768 пикселей
  if (window.innerWidth < 768) {
    swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      modules: [Pagination],
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}

// Проверка при загрузке страницы
initSwiper()

// Проверка при изменении размера окна
window.addEventListener('resize', initSwiper)
