// css files
import "../css/reset.css";
import "bootstrap/dist/css/bootstrap-grid.css"
import "../css/main.css";

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-list');
const navbarLink = document.querySelectorAll('.link');

navbarLink.forEach(element => element.addEventListener('click', navbarLinkClick))

navbarToggler.addEventListener('click', navbarMobile);

window.onresize = function (event) {
  const navbar = document.getElementById('navbar');
  if (window.innerWidth < 767) {
    navbar.classList.remove('vertical-nav');
    navbar.classList.add('navbar');
  } else {
    navbar.classList.remove('navbar');
    navbar.classList.add('vertical-nav');
  }
};


window.onscroll = function () {
  const section = document.querySelectorAll(".section");
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  for (i in sections) {
    if (sections[i] <= scrollPosition + 1) {
      document.querySelector('.active').setAttribute('class', ' ');
      document.querySelector('a[href*=' + i + ']').classList.add('active');
    }
  }
};

function navbarMobile() {
  navbarToggler.classList.toggle('open-navbar-toggler');
  navbarMenu.classList.toggle('open');
}

function navbarLinkClick(event) {
  smoothScroll(event);

  if (navbarMenu.classList.contains('open')) {
    navbarToggler.click();
  }
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

