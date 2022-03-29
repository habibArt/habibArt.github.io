console.log("connected");

//  create Javascript Functions To Target the Elements_
function reveal() {
  var reveals = document.querySelectorAll(".reaveal");
  for (var i = 0; i < reveals.length; i++) {
    var WindowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 80;
    if (elementTop < WindowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

reveal();

window.addEventListener("scroll", reveal);
