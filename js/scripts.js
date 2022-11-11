const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');

burger?.addEventListener('click', () => {
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--visible');
});

const searchOpen = document.querySelector('.header__search');
const search =  document.querySelector('.header__window');
const searchClose = document.querySelector('.header__window-close');

searchOpen.addEventListener('click', () => {
  search.classList.add('header__window--open');
});

searchClose.addEventListener('click', () => {
  search.classList.remove('header__window--open');
});

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

  
let tabsBtn = document.querySelectorAll('.work__step__btn');  
let tabsItem = document.querySelectorAll('.work__information');
  
  tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
  
      tabsBtn.forEach(function(btn){
        btn.classList.remove('work__step__btn--active')
      });
      e.currentTarget.classList.add('work__step__btn--active');
  
      tabsItem.forEach(function(element){
        element.classList.remove('work__information--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('work__information--active');
    })    
  })
  

    let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false
  });


  
  
  
  