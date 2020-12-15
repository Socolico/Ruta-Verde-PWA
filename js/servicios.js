ScrollReveal({
  duration : 600,
  reset    : true
});

ScrollReveal().reveal(".h1", {delay : 500});
ScrollReveal().reveal(".h2", {delay : 300});
ScrollReveal().reveal(".info > p", {delay : 600});
ScrollReveal().reveal(".recomendacion", {delay : 600});
ScrollReveal().reveal(".grid > li", {delay : 600});

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

!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,'script','weatherwidget-io-js');

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