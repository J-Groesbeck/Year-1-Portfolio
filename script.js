let mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", function() {
  var wScroll = window.scrollY;
  var intro = document.querySelector(".introduction");
  intro.style.transform = "translateX(-" + wScroll / 8 + "%)";
});

window.addEventListener("scroll", function() {
  var wScroll = window.scrollY;
  var intro = document.querySelector(".introduction2");
  intro.style.transform = "translateX(" + wScroll / 8 + "%)";
});

window.addEventListener("scroll", function() {
  var wScroll = window.scrollY;
  var intro = document.querySelector(".introduction3");
  intro.style.transform = "translateX(-" + wScroll / 8 + "%)";
});

window.addEventListener("scroll", function() {
  var wScroll = window.scrollY;
  var intro = document.querySelector(".introduction4");
  intro.style.transform = "translateX(" + wScroll / 8 + "%)";
});

window.addEventListener("scroll", function() {
  var wScroll = window.scrollY;
  var intro = document.querySelector(".introduction5");
  intro.style.transform = "translateX(-" + wScroll / 8 + "%)";
});