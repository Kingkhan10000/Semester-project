var body = document.getElementById("body");
var preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
    // preloader.style.left = "-100%";
    preloader.style.opacity = "0";
    preloader.style.zIndex = "-1";
    preloader.style.transition = "1s";
    preloader.style.transitionDelay = "1s";
    body.style.transition = "1s";
    body.style.overflow = "initial";
})


var pc = window.matchMedia("(max-width:1280px) and (min-height:800px) and (max-height:1025px)");
var laptop = matchMedia("(max-height:800px)")
if (pc.matches) {
    window.addEventListener("scroll", function () {
        document.getElementById("img").classList.toggle("active", scrollY > 270);
        document.getElementById("rightfirst").classList.toggle("active", scrollY > 300);
        document.getElementById("mainhead").classList.toggle("active", scrollY > 290);
        document.getElementById("head1").classList.toggle("active", scrollY > 300);
        document.getElementById("head2").classList.toggle("active", scrollY > 320);
        document.getElementById("head3").classList.toggle("active", scrollY > 350);

        document.getElementById("date1").classList.toggle("active", scrollY > 350);
        document.getElementById("date2").classList.toggle("active", scrollY > 350);
        document.getElementById("date3").classList.toggle("active", scrollY > 350);


        //slide down for blog mini cards

        document.getElementById("blogcard1").classList.toggle("active", scrollY > 700);
        document.getElementById("blogcard2").classList.toggle("active", scrollY > 730);
        document.getElementById("blogcard3").classList.toggle("active", scrollY > 1400);
        document.getElementById("blogcard4").classList.toggle("active", scrollY > 1400);
    })
}
else if (laptop.matches) {
    window.addEventListener("scroll", function () {
        document.getElementById("img").classList.toggle("active", scrollY > 270);
        document.getElementById("rightfirst").classList.toggle("active", scrollY > 300);
        document.getElementById("mainhead").classList.toggle("active", scrollY > 290);
        document.getElementById("head1").classList.toggle("active", scrollY > 300);
        document.getElementById("head2").classList.toggle("active", scrollY > 320);
        document.getElementById("head3").classList.toggle("active", scrollY > 350);

        document.getElementById("date1").classList.toggle("active", scrollY > 350);
        document.getElementById("date2").classList.toggle("active", scrollY > 350);
        document.getElementById("date3").classList.toggle("active", scrollY > 350);


        //slide down for blog mini cards

        document.getElementById("blogcard1").classList.toggle("active", scrollY > 800);
        document.getElementById("blogcard2").classList.toggle("active", scrollY > 830);
        document.getElementById("blogcard3").classList.toggle("active", scrollY > 1450);
        document.getElementById("blogcard4").classList.toggle("active", scrollY > 1400);
    })
}