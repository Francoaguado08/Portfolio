 $(document).ready(function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const menuHamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".navbar");

  menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
  });

  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-menu");
    });
  });

  new TypeIt(".typeIt", {
    strings: ["¡Bienvenido a mi Portafolio!", "¡Bienvenido a mi Portafolio!"],
    speed: 90,
    deleteSpeed: null,
    lifeLike: true,
    cursor: true,
    breakLines: false,
    loop: true,
  }).go();

  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("cvModal");
  const openBtn = document.getElementById("openCvModal");
  const closeBtn = document.querySelector(".close");

  openBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});
