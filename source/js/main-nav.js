var navMain = document.querySelector('.main-nav');
var navMenu = document.querySelector('.page-header__menu');
var menuToggle = document.querySelector('.page-header__toggle');

var navMainClosed = document.querySelector('.main-nav--closed');

navMenu.classList.remove('page-header__menu--nojs')

menuToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMenu.classList.remove('page-header__menu--closed');
    navMain.classList.remove('main-nav--closed');
    navMenu.classList.add('page-header__menu--opened');
    navMain.classList.add('main-nav--opened');
  } else {
    navMenu.classList.remove('page-header__menu--opened');
    navMain.classList.remove('main-nav--opened');
    navMenu.classList.add('page-header__menu--closed');
    navMain.classList.add('main-nav--closed');
  }
})