ScrollReveal({
  duration : 600,
  reset    : true
});

ScrollReveal().reveal(".h1", {delay : 500});
ScrollReveal().reveal("#banner-inicio > p", {delay : 1000});
ScrollReveal().reveal(".h2", {delay : 300});
ScrollReveal().reveal("#reseña > p", {delay : 600});
ScrollReveal().reveal("#servicios__cards", {delay : 600});
ScrollReveal().reveal("#testimonial__cards", {delay : 600});

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

new Splide("#servicios__cards", {
  breakpoints : {
    768 : {
      perPage : 2
    },
    576 : {
      perPage : 1
    }
  },
  cover       : true,
  gap         : "3em",
  height      : "300px",
  perPage     : 3,
  perMove     : 1,
  pagination  : false,
  type        : "loop"
}).mount();

new Splide("#testimonial__cards", {
  arrows      : false,
  autoplay    : true,
  breakpoints : {
    576 : {
      perPage : 1
    }
  },
  gap         : "3em",
  interval    : 7000,
  perPage     : 2,
  pagination  : false,
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