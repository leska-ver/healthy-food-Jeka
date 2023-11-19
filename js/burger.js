document.addEventListener('DOMContentLoaded', () => {
  //Проверка ошибок console.log()



  /*Клик БУРГЕР. Без библиотеки jQuery.*/
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');

  burger.addEventListener('click', function () {
    burger.classList.add('open');

    menu.classList.toggle('is-active');

    if (menu.classList.contains('is-active')) {
      // menu.style.transition = 'transform .7s ease-in-out';
      menu.style.transition = 'opacity .7s ease-in-out';
    }
  });
  menu.addEventListener('transitionend', function () {
    if (!menu.classList.contains('is-active')) {
      menu.style.transition = '';
      burger.classList.remove('open');
    }
  });



});  