const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar ul');

navbarToggler.addEventListener('click', navbarMobile);

function navbarMobile() {
  navbarToggler.classList.toggle('open-navbar-toggler');
  navbarMenu.classList.toggle('open');
}