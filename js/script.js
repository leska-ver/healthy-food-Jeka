document.addEventListener('DOMContentLoaded', () => {
  //Проверка ошибок console.log()



  /* Инициализируем AOS для анимациия при прокрутке страницы */
  AOS.init({
    duration: 1200
  });




  // -- Initialize Swiper --
  const swiperAbout = document.querySelector(".about")//Для обёртки if
  if (swiperAbout) {//Обёртка if. Спасение Gulp-а от null в браузере
    const swiperDesktop = new Swiper(".mySwiper-desktop", {  
      // Дополнительные параметры
      direction: 'horizontal',
      loop: false,

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

      //slidesPerView: 'auto',
      slidesPerGroup: 2,//Одна картинка - один шаг
      spaceBetween: 12,

      //Кнопки навигации
      navigation: {
        nextEl: '.about__btn_next',
        prevEl: '.about__btn_prev',
        disabledClass: 'about__btn_disabled',
      },

      breakpoints: {
        686: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
    
        1225: {
          slidesPerView: 2,
          spaceBetween: 35,
        },
      },

      //Бесконечное листание страниц
      speed: 3000,//Интервал ожидания

      autoplay: {
        delay: 5000,//Интервал ожидания
        disableOnInteraction: false,      
      }

    });


    const swiperMobili = new Swiper(".mySwiper-mobili", {
      effect: "flip",
      grabCursor: true,
      navigation: {
        nextEl: ".about__btn_next",
        prevEl: ".about__btn_prev",
        disabledClass: 'about__btn_disabled',
      },

      //Бесконечное листание страниц
      speed: 3000,//Интервал ожидания

      autoplay: {
        delay: 5000,//Интервал ожидания
        disableOnInteraction: false,      
      }
    });
  };//Обёртка if 

  


  
}); 