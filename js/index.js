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

var desktop  = window.matchMedia("(min-width:1280px)")

if(desktop.matches)
{
    // ticket form scroll
    window.addEventListener("scroll", function () {
        var form = document.getElementById("ticketform");
        form.classList.toggle("active", scrollY > 550)

        //ticket header for laptop
        document.getElementById("ticketheader").classList.toggle("active", scrollY > 550);

        //ticket form cards for laptops

        document.getElementById("ticketcard1").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard2").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard3").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard4").classList.toggle("active", scrollY > 560);

    }
    )


    // experience scroll for laptop start
    window.addEventListener("scroll", function () {

        //top left section
        document.getElementById("elstarterh2").classList.toggle("active", scrollY > 500);
        document.getElementById("elstarterh1").classList.toggle("active", scrollY > 600);
        document.getElementById("elstarterpara").classList.toggle("active", scrollY > 650);

        //boxes section
        document.getElementById("abox1").classList.toggle("active", scrollY > 800);
        document.getElementById("abox2").classList.toggle("active", scrollY > 800);
        document.getElementById("abox3").classList.toggle("active", scrollY > 800);
        document.getElementById("abox4").classList.toggle("active", scrollY > 800);

    })

    // experience scroll for laptop ends


    //attraction cards for laptop starts
    window.addEventListener("scroll", function () {
        document.getElementById("card1").classList.toggle("active", scrollY > 2000);
        document.getElementById("card2").classList.toggle("active", scrollY > 2000);
        document.getElementById("card3").classList.toggle("active", scrollY > 2000);
        document.getElementById("card4").classList.toggle("active", scrollY > 2000);
    })
    //attraction cards for laptop ends
}

else if (laptop.matches) {

    // ticket form scroll
    window.addEventListener("scroll", function () {
        var form = document.getElementById("ticketform");
        form.classList.toggle("active", scrollY > 550)

        //ticket header for laptop
        document.getElementById("ticketheader").classList.toggle("active", scrollY > 550);

        //ticket form cards for laptops

        document.getElementById("ticketcard1").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard2").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard3").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard4").classList.toggle("active", scrollY > 560);

    }
    )


    // experience scroll for laptop start
    window.addEventListener("scroll", function () {

        //top left section
        document.getElementById("elstarterh2").classList.toggle("active", scrollY > 500);
        document.getElementById("elstarterh1").classList.toggle("active", scrollY > 600);
        document.getElementById("elstarterpara").classList.toggle("active", scrollY > 650);

        //boxes section
        document.getElementById("abox1").classList.toggle("active", scrollY > 800);
        document.getElementById("abox2").classList.toggle("active", scrollY > 800);
        document.getElementById("abox3").classList.toggle("active", scrollY > 800);
        document.getElementById("abox4").classList.toggle("active", scrollY > 800);

    })

    // experience scroll for laptop ends


    //attraction cards for laptop starts
    window.addEventListener("scroll", function () {
        document.getElementById("card1").classList.toggle("active", scrollY > 2000);
        document.getElementById("card2").classList.toggle("active", scrollY > 2000);
        document.getElementById("card3").classList.toggle("active", scrollY > 2000);
        document.getElementById("card4").classList.toggle("active", scrollY > 2000);
    })
    //attraction cards for laptop ends

    // navbar fixed changes starts
    // window.addEventListener("scroll", function () {
    // document.getElementById("nav").classList.toggle("active", scrollY > 100, scrollY < 200)
    // document.getElementById("nav").classList.remove("active", )
    // })
    // navbar fixed changes ends


}

else if (pc.matches) {


    // ticket form sroll start
    window.addEventListener("scroll", function () {
        var form = document.getElementById("ticketform");
        form.classList.toggle("active", scrollY > 250)

        //ticekt header for pc
        document.getElementById("ticketheader").classList.toggle("active", scrollY > 260);


        //ticket form cards for pc
        document.getElementById("ticketcard1").classList.toggle("active", scrollY > 260);
        document.getElementById("ticketcard2").classList.toggle("active", scrollY > 260);
        document.getElementById("ticketcard3").classList.toggle("active", scrollY > 260);
        document.getElementById("ticketcard4").classList.toggle("active", scrollY > 260);
    }
    )

    // ticekt form scroll ends


    // experience scroll for pc start
    window.addEventListener("scroll", function () {

        //top left section
        document.getElementById("elstarterh2").classList.toggle("active", scrollY > 500);
        document.getElementById("elstarterh1").classList.toggle("active", scrollY > 600);
        document.getElementById("elstarterpara").classList.toggle("active", scrollY > 650);

        //boxes section
        document.getElementById("abox1").classList.toggle("active", scrollY > 800);
        document.getElementById("abox2").classList.toggle("active", scrollY > 800);
        document.getElementById("abox3").classList.toggle("active", scrollY > 800);
        document.getElementById("abox4").classList.toggle("active", scrollY > 800);

    })
    // experience scroll for pc ends


    //attraction scroll for pc start 

    window.addEventListener("scroll", function () {
        document.getElementById("card1").classList.toggle("active", scrollY > 2100);
        document.getElementById("card2").classList.toggle("active", scrollY > 2100);
        document.getElementById("card3").classList.toggle("active", scrollY > 2100);
        document.getElementById("card4").classList.toggle("active", scrollY > 2100);
    })

    //attraction scroll for pc  end


    // navbar changes
    // window.addEventListener("scroll", function () {
    // document.getElementById("nav").classList.toggle("active", scrollY > 100, scrollY < 200)
    // document.getElementById("nav").classList.remove("active", )
    // })

}

// window.addEventListener("load", function () {
//     document.getElementById("preloader").classList.add("active");
//     document.getElementById("main").classList.add("active");
// })





// var name = document.getElementById("name");
// if(name.value=="")
// {
//     var empty = name.value.trim();
//     name.value = empty;
// }



// for pages link menu start
function openmenupages() {
    document.getElementById("pages").classList.add("active");
}
function closemenupages() {
    document.getElementById("pages").classList.remove("active");
}
// for pages link menu end


//for    ticket btn

function leave() {
    // document.getElementById("navticketbtn").style.border = "none";
}

    //for nav ticket btn