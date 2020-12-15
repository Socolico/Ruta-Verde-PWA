ScrollReveal({
  duration : 600,
  reset    : true
});

ScrollReveal().reveal(".h1", {delay : 500});
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

const btn = document.getElementById("btn");
btn.addEventListener("click", function() {

  let errores  = [];
  let nombre   = document.getElementById("nombre").value.trim();
  let email    = document.getElementById("email").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let mensaje  = document.getElementById("msj").value.trim();
  if(nombre === "") {
    errores.push("Debe ingresar su nombre");
  }
  if(email === "") {
    errores.push("Debe ingresar su email");
  }
  if(telefono === "") {
    errores.push("Debe ingresar un numero de telefono");
  } else if(isNaN(telefono)) {
    errores.push("El número de telefono debe contener sólo números");
  }
  if(mensaje === "") {
    errores.push("Debe ingresar su mensaje");
  }
  if(errores.length === 0) {
    Swal.fire({
      icon               : 'success',
      title              : '<h2 class="h2">Mensaje enviado exitosamente</h2>',
      html               : '<p class="texto-secundario">Ya puede cerrar esta ventana y continuar navegando</p>',
      confirmButtonText  : 'Ok!',
      confirmButtonColor : '#e68f1a'
    })
  } else {
    Swal.fire({
      icon               : 'error',
      title              : '<h2 class="h2">Se hallaron algunos errores</h2>',
      html               : '<p class="texto-secundario">'+errores.join(' - ')+'</p>',
      confirmButtonText  : 'Entendido!',
      confirmButtonColor : '#e68f1a'
    });
  }
});

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