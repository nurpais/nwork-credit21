const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    // Purge css (remove unused CSS)
    purgecss({
      content: ["./**/*.html"],
      css: [], // css
      safelist: {
        standard: [/active$/, /swiper$/, /swiper/, /sticky$/, /pagination$/],
        deep: [/active$/, /swiper$/, /swiper/, /sticky$/, /pagination$/],
        greedy: [/active$/, /swiper$/, /swiper/, /sticky$/, /pagination$/],
      },
    }),

    // Autoprefixer
    require("autoprefixer"),

    // CSS compression
    require("cssnano")({
      preset: "default",
    }),
  ],
};
