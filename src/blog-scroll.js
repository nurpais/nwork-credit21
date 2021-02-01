// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".blog-scroll", {
  // Optional parameters
  spaceBetween: 30,
  slidesPerView: "auto",
  //   freeMode: true,
  mousewheel: true,

  breakpoints: {
    768: {
      spaceBetween: 40,
    },
  },
});
