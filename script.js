window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var textColor = document.getElementsByClassName("nav-link");
  var i;
  for (i = 0; i < textColor.length; i++) {
    textColor[i].classList.toggle("text-dark", window.scrollY > 0);
  }

  navbar.classList.toggle("bg-light", window.scrollY > 0);
  navbar.classList.toggle("navbar-light", window.scrollY > 0);
  navbar.classList.toggle("shadow", window.scrollY > 0);
  navbar.classList.remove("navbar-dark");
  if (window.scrollY == 0) {
    navbar.classList.toggle("navbar-dark");
  }
});
