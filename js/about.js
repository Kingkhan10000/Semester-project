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

var laptop = matchMedia("(max-height:800px)")
var mobile = window.matchMedia("(max-width:720px)")
var pc = window.matchMedia("(max-width:1280px) and (min-height:800px) and (max-height:1025px)")

if (pc.matches) {
    window.addEventListener("scroll", function () {

        // for section 1
        document.getElementById("s1card").classList.toggle("active", scrollY > 180);
        document.getElementById("carddata").classList.toggle("active", scrollY > 185);
        document.getElementById("cardlast1").classList.toggle("active", scrollY > 190);
        document.getElementById("cardlast2").classList.toggle("active", scrollY > 195);

        // for section 2
        document.getElementById("s2heading").classList.toggle("active", scrollY > 650);
        document.getElementById("s2para").classList.toggle("active", scrollY > 750);

        // for section 3
        document.getElementById("card1").classList.toggle("active", scrollY > 1070);
        document.getElementById("card2").classList.toggle("active", scrollY > 1070);
        document.getElementById("card3").classList.toggle("active", scrollY > 1070);
        document.getElementById("card4").classList.toggle("active", scrollY > 1070);

        // for section 4
        document.getElementById("s4heading").classList.toggle("active", scrollY > 2290);
        document.getElementById("s4content").classList.toggle("active", scrollY > 2300);
        document.getElementById("s4para").classList.toggle("active", scrollY > 2250);

        //for section5
        document.getElementById("s5card1").classList.toggle("active", scrollY > 3150);
        document.getElementById("s5card3").classList.toggle("active", scrollY > 3150);


    })

}
else if (laptop.matches) {

    window.addEventListener("scroll", function () {

        // for section 1
        document.getElementById("s1card").classList.toggle("active", scrollY > 180);
        document.getElementById("carddata").classList.toggle("active", scrollY > 180);
        document.getElementById("cardlast1").classList.toggle("active", scrollY > 180);
        document.getElementById("cardlast2").classList.toggle("active", scrollY > 180);

        // for section 2
        document.getElementById("s2heading").classList.toggle("active", scrollY > 650);
        document.getElementById("s2para").classList.toggle("active", scrollY > 750);

        // for section 3
        document.getElementById("card1").classList.toggle("active", scrollY > 1070);
        document.getElementById("card2").classList.toggle("active", scrollY > 1070);
        document.getElementById("card3").classList.toggle("active", scrollY > 1070);
        document.getElementById("card4").classList.toggle("active", scrollY > 1070);

        // for section 4
        document.getElementById("s4heading").classList.toggle("active", scrollY > 2290);
        document.getElementById("s4content").classList.toggle("active", scrollY > 2300);
        document.getElementById("s4para").classList.toggle("active", scrollY > 2250);

        //for section5
        document.getElementById("s5card1").classList.toggle("active", scrollY > 3150);
        document.getElementById("s5card3").classList.toggle("active", scrollY > 3150);


    })
}