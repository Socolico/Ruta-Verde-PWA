ScrollReveal({
  duration : 600,
  reset    : true
});

ScrollReveal().reveal(".h2", {delay : 300});

const menuSlide = function() {

  const burger       = document.querySelector(".burger");
  const burgerLinea1 = document.querySelector(".burger__linea1");
  const burgerLinea2 = document.querySelector(".burger__linea2");
  const burgerMenu   = document.querySelector(".burger__menu");
  burger.addEventListener("click", function() {
    burgerLinea1.classList.toggle("burger__linea-active");
    burgerLinea2.classList.toggle("burger__linea-active");
    burgerMenu.classList.toggle("burger__menu-active");
  });
};

menuSlide();

new Splide("#slider-nosotros", {
  autoplay    : true,
  breakpoints : {
    768 : {
      heightRatio : 0.7
    },
    576 : {
      heightRatio : 1
    }
  },
  cover       : true,
  heightRatio : 0.3,
  type        : "loop"
}).mount();

new Splide(".slider-footer", {
  arrows      : false,
  autoplay    : true,
  breakpoints : {
    768 : {
      perPage : 3
    },
    576 : {
      perPage : 2
    }
  },
  interval    : 2500,
  perPage     : 4,
  perMove     : 2,
  pagination  : false,
  type        : "loop"
}).mount();