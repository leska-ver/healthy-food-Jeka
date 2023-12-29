document.addEventListener('DOMContentLoaded', () => {
  //Проверка ошибок console.log()



  /* Инициализируем AOS для анимациия при прокрутке страницы */
  AOS.init({
    duration: 1200
  });




  // -- Initialize Swiper --
  const swiperAbout = document.querySelector(".about") //Для обёртки if
  if (swiperAbout) { //Обёртка if. Спасение Gulp-а от null в браузере
    const swiperDesktop = new Swiper(".mySwiper-desktop", {
      // Дополнительные параметры
      direction: 'horizontal',
      loop: false,

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

      //slidesPerView: 'auto',
      slidesPerGroup: 2, //Одна картинка - один шаг
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
      speed: 3000, //Интервал ожидания

      autoplay: {
        delay: 5000, //Интервал ожидания
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
      speed: 3000, //Интервал ожидания

      autoplay: {
        delay: 5000, //Интервал ожидания
        disableOnInteraction: false,
      }
    });
  }; //Обёртка if 



  // Модальное окно в картинках social__foto
  const body = document.querySelector('body')

  // Открытие модального окна, если в url указан его id
  openModalHash()

  function openModalHash() {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      const modal = document.querySelector(`#${hash}`)
      if (modal) {
        modal.classList.add('_show');
        bodyLock(true)
        closeWhenClickingOnBg(`#${hash} .modal__content`, modal);
      }
    }
  }

  // Закрытие модальных окон при клике по крестику
  closeModalWhenClickingOnCross()

  function closeModalWhenClickingOnCross() {
    const modalElems = document.querySelectorAll('.modal')
    for (let i = 0; i < modalElems.length; i++) {
      const modal = modalElems[i];
      const closeThisModal = modal.querySelector('.modal__close')
      closeThisModal.addEventListener('click', () => {
        modal.classList.remove('_show')
        bodyLock(false)
        resetHash()
      })
    }
  }

  // Закрытие модальных окон при нажатии по клавише ESC
  closeModalWhenClickingOnESC()
  function closeModalWhenClickingOnESC() {
    const modalElems = document.querySelectorAll('.modal')
    for (let i = 0; i < modalElems.length; i++) {
      const modal = modalElems[i];
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          modal.classList.remove('_show')
          bodyLock(false)
          resetHash()
        }
      })
    }
  }

  // Сброс id модального окна в url
  function resetHash() {
    const windowTop = window.pageYOffset
    window.location.hash = ''
    window.scrollTo(0, windowTop)
  }

  // Открытие модальных окон
  openModal()

  function openModal() {
    const btnsOpenModal = document.querySelectorAll('[data-modal-open]');

    for (let i = 0; i < btnsOpenModal.length; i++) {
      const btn = btnsOpenModal[i];

      btn.addEventListener('click', (e) => {
        const dataBtn = btn.dataset.modalOpen;
        const modalThatOpens = document.querySelector(`#${dataBtn}`)
        btn.classList.add('modal-show');
        modalThatOpens.classList.add('_show');
        bodyLock(true)
        closeWhenClickingOnBg(`#${dataBtn} .modal__content`, modalThatOpens);
        window.location.hash = dataBtn
      });
    }
  }

  // Изменение скролла у body
  function bodyLock(con) {
    if (con == true) {
      body.classList.add('_lock');
    } else if (con == false) {
      body.classList.remove('_lock');
    }
  }

  // Закрытие модального окна при клике по заднему фону
  function closeWhenClickingOnBg(itemArray, itemParent, classShow = '_show') {
    document.addEventListener('click', (e) => {
      let itemElems = document.querySelectorAll(itemArray)

      for (let i = 0; i < itemElems.length; i++) {
        const item = itemElems[i];
        const target = e.target,
          itsItem = target == item || item.contains(target),
          itemIsShow = item.classList.contains(classShow);

        if (itemParent) {
          const itsItemParent = target == itemParent || itemParent.contains(target),
            itemParentIsShow = itemParent.classList.contains(classShow);
          if (!itsItem && itsItemParent && itemParentIsShow) {
            itemParent.classList.remove(classShow);
            if (body.classList.contains('_lock')) {
              bodyLock(false)
            }
            if (window.location.hash === '#' + itemParent.getAttribute('id')) {
              resetHash()
            }
          }
        } else {
          if (!itsItem && itemIsShow) {
            item.classList.remove(classShow);
            if (body.classList.contains('_lock')) {
              bodyLock(false)
            }
            if (window.location.hash === '#' + itemParent.getAttribute('id')) {
              resetHash()
            }
          }
        }

      }
    })
  }


  // Плавный скролл по якорям. В любое место можно кинуть.
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
    });
  };



});