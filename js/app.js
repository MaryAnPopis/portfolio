// css files
import "../css/reset.css";
import "bootstrap/dist/css/bootstrap-grid.css"
import "../css/main.css";

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar ul');

navbarToggler.addEventListener('click', navbarMobile);

function navbarMobile() {
  navbarToggler.classList.toggle('open-navbar-toggler');
  navbarMenu.classList.toggle('open');
}