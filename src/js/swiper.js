import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let swipers = [] // массив для хранения всех экземпляров Swiper

function initSwipers() {
  const swiperElements = document.querySelectorAll('.swiper') // ищем все элементы с классом 'swiper'

  // Уничтожаем все существующие Swiper-экземпляры
  swipers.forEach((swiperInstance) => {
    if (swiperInstance && typeof swiperInstance.destroy === 'function') {
      swiperInstance.destroy(true, true)
    }
  })

  // Очищаем массив после уничтожения экземпляров
  swipers = []

  // Инициализируем Swiper только на экранах менее 768 пикселей
  if (window.innerWidth < 768) {
    swiperElements.forEach((swiperElement, index) => {
      const newSwiper = new Swiper(swiperElement, {
        slidesPerView: 'auto',
        modules: [Pagination],
        loop: true,
        pagination: {
          el: swiperElement.querySelector('.swiper-pagination'),
          clickable: true
        }
      })

      // Добавляем новый экземпляр Swiper в массив
      swipers.push(newSwiper)
    })
  }
}

// Проверка при загрузке страницы
initSwipers()

// Проверка при изменении размера окна
window.addEventListener('resize', initSwipers)
