if (document.querySelector(".accordion")) {
  document.querySelectorAll(".accordion__header").forEach(function (el) {
    el.addEventListener("click", function () {
      this.closest(".accordion").classList.toggle("accordion--active");

      if (this.closest(".accordion").classList.contains("accordion--active")) {
        this.closest(".accordion").querySelector(".accordion__body").style.maxHeight =
          this.closest(".accordion").querySelector(".accordion__body").scrollHeight + 40 + "px";
      } else {
        this.closest(".accordion").querySelector(".accordion__body").style.maxHeight = null;
        this.closest(".accordion").querySelector(".accordion__body").style.paddingBottom = null;
      }
    });
  });
}
