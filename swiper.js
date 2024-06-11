// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1.2,
//     spaceBetween: 10,
//     freeMode: true,
//     loop:true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     }
//   });

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 3,
  spaceBetween: 15,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints:{
    340:{
      slidesPerView: 1.2,
      spaceBetween: 10
    },
    640:{
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024:{
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
});