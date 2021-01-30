// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".news-swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1.07,
  //   centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".news-swiper .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },

    768: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
