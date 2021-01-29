// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".why-us-swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1.15,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".why-us-swiper .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },

    992: {
      slidesPerView: 1.6,
    },
  },
});
