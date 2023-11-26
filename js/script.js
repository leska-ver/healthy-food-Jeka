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

  

  // Модальное окно//
  const btns = document.querySelectorAll('.social__foto_js');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modals = document.querySelectorAll('.modal');
  
  // отключить включение прокрутки BODY
  const disableScroll = function disableScroll() {
    document.body.classList.add('disable-scroll');
  };
  const enableScroll = function enableScroll() {
    document.body.classList.remove('disable-scroll');
  };
  // -//- отключить включение прокрутки BODY -//-

  
  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');
      const currentModal = document.querySelector(`[data-target="${path}"]`);
      const closeBtn = currentModal.querySelector('.modal__js-close');
      
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    
      currentModal.classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');

      //Для modal__js-close 
      closeBtn.focus();
        disableScroll();//?
    });
  }); 

  // Реакция нажима в любом месте(выключатель окна) не удалять
  modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);
    
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    }
  });

  //Реакция нажима на Х(выключатель окна)
  modals.forEach((el) => {
    const closeBtn = el.querySelector('.modal__js-close');

    closeBtn.addEventListener('click', function () {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    });
  });

  enableScroll();//?


  
}); 