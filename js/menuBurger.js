const menuBtn = document.querySelector('.menu__btn');
const hamBurger = document.querySelector('.menu__btnBurger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.nav__menu');
const navItems = document.querySelectorAll('.nav__menuItem')

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamBurger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  }
  
  else {
    hamBurger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    
    showMenu = false;
  }
}