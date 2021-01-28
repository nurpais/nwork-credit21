if (document.querySelector("#navbar-burger")) {
  let navbarBurger = document.querySelector("#navbar-burger");

  navbarBurger.addEventListener("click", function () {
    document.documentElement.classList.toggle("navbar--active");
  });
}
