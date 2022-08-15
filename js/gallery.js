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


if(laptop.matches)
{
    window.addEventListener("scroll",function(){

        document.getElementById("bottom").classList.toggle("active",scrollY>600);


        document.getElementById("card1").classList.toggle("active",scrollY>350);
        document.getElementById("card2").classList.toggle("active",scrollY>370);
        document.getElementById("card3").classList.toggle("active",scrollY>520);
        document.getElementById("card4").classList.toggle("active",scrollY>550);
        document.getElementById("card5").classList.toggle("active",scrollY>580);
        document.getElementById("card6").classList.toggle("active",scrollY>750);
        document.getElementById("card7").classList.toggle("active",scrollY>950);
        document.getElementById("card8").classList.toggle("active",scrollY>1000);
        document.getElementById("card9").classList.toggle("active",scrollY>950);
        document.getElementById("card10").classList.toggle("active",scrollY>1500);
        document.getElementById("card11").classList.toggle("active",scrollY>1200);
        document.getElementById("card12").classList.toggle("active",scrollY>1250);
        document.getElementById("card13").classList.toggle("active",scrollY>1650);
        document.getElementById("card14").classList.toggle("active",scrollY>1500);
        document.getElementById("card15").classList.toggle("active",scrollY>1550);
        document.getElementById("card16").classList.toggle("active",scrollY>1900);
        document.getElementById("card17").classList.toggle("active",scrollY>1900);
        document.getElementById("card18").classList.toggle("active",scrollY>1950);
    })
}
else if(pc.matches)
{
    window.addEventListener("scroll",function(){

        document.getElementById("bottom").classList.toggle("active",scrollY>500);


        document.getElementById("card1").classList.toggle("active",scrollY>250);
        document.getElementById("card2").classList.toggle("active",scrollY>270);
        document.getElementById("card3").classList.toggle("active",scrollY>450);
        document.getElementById("card4").classList.toggle("active",scrollY>450);
        document.getElementById("card5").classList.toggle("active",scrollY>470);
        document.getElementById("card6").classList.toggle("active",scrollY>600);
        document.getElementById("card7").classList.toggle("active",scrollY>650);
        document.getElementById("card8").classList.toggle("active",scrollY>700);
        document.getElementById("card9").classList.toggle("active",scrollY>750);
        document.getElementById("card10").classList.toggle("active",scrollY>1500);
        document.getElementById("card11").classList.toggle("active",scrollY>1200);
        document.getElementById("card12").classList.toggle("active",scrollY>1250);
        document.getElementById("card13").classList.toggle("active",scrollY>1650);
        document.getElementById("card14").classList.toggle("active",scrollY>1500);
        document.getElementById("card15").classList.toggle("active",scrollY>1550);
        document.getElementById("card16").classList.toggle("active",scrollY>1900);
        document.getElementById("card17").classList.toggle("active",scrollY>1900);
        document.getElementById("card18").classList.toggle("active",scrollY>1950);
    })
}