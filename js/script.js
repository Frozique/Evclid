let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  }

)

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
});

let searchBtn = document.querySelector('.search__btn');
let search = document.querySelector('.header__search');
let searchExit = document.querySelector('.search__btn-exit');

searchBtn.addEventListener('click',

  function () {
    search.classList.toggle('header__search--active');
  }

)

searchExit.addEventListener('click',

  function () {
    search.classList.remove('header__search--active');
  }

)

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },

  parallax: true,
  speed: 600,
  noSwiping: true,
  noSwipingClass: ('swiper-no-swiping'),

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active')
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

  });
});

new Accordion('.accordion');
