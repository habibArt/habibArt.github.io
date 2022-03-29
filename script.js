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

// animation web
function scrolled() {
  var services = document.getElementById("services");
  var projects = document.getElementsByClassName("fadein");
  var elementVisible = 300;
  var elementVisible2 = 10;
  var windowHeight = window.innerHeight;
  var elementTop = services.getBoundingClientRect().top;

  if (elementTop < windowHeight - elementVisible) {
    services.classList.add("active");
  } else {
    services.classList.remove("active");
  }

  for (let i = 0; i < projects.length; i++) {
    var elemenTopProject = projects[i].getBoundingClientRect().top;
    if (elemenTopProject < windowHeight - elementVisible2) {
      projects[i].classList.add("active");
    } else {
      projects[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", scrolled);
