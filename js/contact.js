var body = document.getElementById("body");
var preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
    // preloader.style.left = "-100%";
    preloader.style.opacity = "0";
    preloader.style.zIndex = "-1";
    preloader.style.transition = "1s";
    preloader.style.transitionDelay = "1s";
    body.style.transitionDelay = "1s";
    body.style.transition = "1s";
    body.style.overflow = "initial";
})

var laptop = matchMedia("(max-height:800px)")
var mobile = window.matchMedia("(max-width:720px)")
var pc = window.matchMedia("(max-width:1280px) and (min-height:800px) and (max-height:1025px)")
