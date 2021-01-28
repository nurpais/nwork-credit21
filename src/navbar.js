if (document.querySelector("#navbar-burger")) {
  let navbarBurger = document.querySelector("#navbar-burger");

  navbarBurger.addEventListener("click", function () {
    document.documentElement.classList.toggle("navbar--active");
  });

  window.addEventListener("scroll", function (e) {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 32) {
      document.documentElement.classList.add("navbar--sticky");
    } else {
      document.documentElement.classList.remove("navbar--sticky");
    }
  });
}
