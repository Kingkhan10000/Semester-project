var body = document.getElementById("body");
var preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
    preloader.style.opacity = "0";
    preloader.style.zIndex = "-1";
    preloader.style.transition = "1s";
    preloader.style.transitionDelay = "1s";
    body.style.transitionDelay = "1s";
    body.style.transition = "1s";
    body.style.overflow = "initial";
})
// screens for responsive scripts
var laptop = matchMedia("(max-height:800px)") // for laptop screen
var mobile = window.matchMedia("(max-width:720px)") // for mobile screen
var pc = window.matchMedia("(max-width:1280px) and (min-height:800px) and (max-height:1025px)") // for personal computer
var desktop = window.matchMedia("(min-width:1280px)") // for larger screens
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// Home Section Starts
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
if (desktop.matches) {
    // ticket form scroll
    window.addEventListener("scroll", () => {
        var form = document.getElementById("ticketform");
        form.classList.toggle("active", scrollY > 550);
        //ticket header for laptop
        document.getElementById("ticketheader").classList.toggle("active", scrollY > 550);
        //ticket form cards for laptops
        document.getElementById("ticketcard1").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard2").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard3").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard4").classList.toggle("active", scrollY > 560);
        // experience scroll for laptop start
        //top left section
        document.getElementById("elstarterh2").classList.toggle("active", scrollY > 500);
        document.getElementById("elstarterh1").classList.toggle("active", scrollY > 600);
        document.getElementById("elstarterpara").classList.toggle("active", scrollY > 650);
        //boxes section
        document.getElementById("abox1").classList.toggle("active", scrollY > 800);
        document.getElementById("abox2").classList.toggle("active", scrollY > 800);
        document.getElementById("abox3").classList.toggle("active", scrollY > 800);
        document.getElementById("abox4").classList.toggle("active", scrollY > 800);
        // experience scroll for laptop ends
        //attraction cards for laptop starts
        document.getElementById("card1").classList.toggle("active", scrollY > 2000);
        document.getElementById("card2").classList.toggle("active", scrollY > 2000);
        document.getElementById("card3").classList.toggle("active", scrollY > 2000);
        document.getElementById("card4").classList.toggle("active", scrollY > 2000);
        //attraction cards for laptop ends
    })
}

else if (laptop.matches) {
    // ticket form scroll
    window.addEventListener("scroll", () => {
        var form = document.getElementById("ticketform");
        form.classList.toggle("active", scrollY > 550);
        //ticket header for laptop
        document.getElementById("ticketheader").classList.toggle("active", scrollY > 550);
        //ticket form cards for laptops
        document.getElementById("ticketcard1").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard2").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard3").classList.toggle("active", scrollY > 560);
        document.getElementById("ticketcard4").classList.toggle("active", scrollY > 560);
        // experience scroll for laptop start
        //top left section
        document.getElementById("elstarterh2").classList.toggle("active", scrollY > 500);
        document.getElementById("elstarterh1").classList.toggle("active", scrollY > 600);
        document.getElementById("elstarterpara").classList.toggle("active", scrollY > 650);
        //boxes section
        document.getElementById("abox1").classList.toggle("active", scrollY > 800);
        document.getElementById("abox2").classList.toggle("active", scrollY > 800);
        document.getElementById("abox3").classList.toggle("active", scrollY > 800);
        document.getElementById("abox4").classList.toggle("active", scrollY > 800);
        // experience scroll for laptop ends
        //attraction cards for laptop starts
        document.getElementById("card1").classList.toggle("active", scrollY > 2000);
        document.getElementById("card2").classList.toggle("active", scrollY > 2000);
        document.getElementById("card3").classList.toggle("active", scrollY > 2000);
        document.getElementById("card4").classList.toggle("active", scrollY > 2000);
        //attraction cards for laptop ends
    })
}
// ticket form scroll
else if (pc.matches) {
    // ticket form sroll start
    window.addEventListener("scroll", () => {
        var form = document.getElementById("ticketform");
        form.classList.toggle("active", scrollY > 250)
        //ticekt header for pc
        document.getElementById("ticketheader").classList.toggle("active", scrollY > 260);
        //ticket form cards for pc
        document.getElementById("ticketcard1").classList.toggle("active", scrollY > 260);
        document.getElementById("ticketcard2").classList.toggle("active", scrollY > 260);
        document.getElementById("ticketcard3").classList.toggle("active", scrollY > 260);
        document.getElementById("ticketcard4").classList.toggle("active", scrollY > 260);
        // experience scroll for pc start
        //top left section
        document.getElementById("elstarterh2").classList.toggle("active", scrollY > 500);
        document.getElementById("elstarterh1").classList.toggle("active", scrollY > 600);
        document.getElementById("elstarterpara").classList.toggle("active", scrollY > 650);
        //boxes section
        document.getElementById("abox1").classList.toggle("active", scrollY > 800);
        document.getElementById("abox2").classList.toggle("active", scrollY > 800);
        document.getElementById("abox3").classList.toggle("active", scrollY > 800);
        document.getElementById("abox4").classList.toggle("active", scrollY > 800);
        // experience scroll for pc ends
        //attraction scroll for pc start 
        document.getElementById("card1").classList.toggle("active", scrollY > 2100);
        document.getElementById("card2").classList.toggle("active", scrollY > 2100);
        document.getElementById("card3").classList.toggle("active", scrollY > 2100);
        document.getElementById("card4").classList.toggle("active", scrollY > 2100);
        //attraction scroll for pc ends 
    })
}
// ticekt form scroll ends
// for pages link menu start
function openmenupages() {
    document.getElementById("pages").classList.add("active");
}
function closemenupages() {
    document.getElementById("pages").classList.remove("active");
}
// for pages link menu end

// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// Home Section Ends
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// About Section Starts
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

if (pc.matches) {
    window.addEventListener("scroll", () => {
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
    window.addEventListener("scroll", () => {
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

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// About Section Ends
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// Gallery Section Starts
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
if (laptop.matches) {
    window.addEventListener("scroll", () => {
        document.getElementById("bottom").classList.toggle("active", scrollY > 600);
        document.getElementById("card1").classList.toggle("active", scrollY > 350);
        document.getElementById("card2").classList.toggle("active", scrollY > 370);
        document.getElementById("card3").classList.toggle("active", scrollY > 520);
        document.getElementById("card4").classList.toggle("active", scrollY > 550);
        document.getElementById("card5").classList.toggle("active", scrollY > 580);
        document.getElementById("card6").classList.toggle("active", scrollY > 750);
        document.getElementById("card7").classList.toggle("active", scrollY > 950);
        document.getElementById("card8").classList.toggle("active", scrollY > 1000);
        document.getElementById("card9").classList.toggle("active", scrollY > 950);
        document.getElementById("card10").classList.toggle("active", scrollY > 1500);
        document.getElementById("card11").classList.toggle("active", scrollY > 1200);
        document.getElementById("card12").classList.toggle("active", scrollY > 1250);
        document.getElementById("card13").classList.toggle("active", scrollY > 1650);
        document.getElementById("card14").classList.toggle("active", scrollY > 1500);
        document.getElementById("card15").classList.toggle("active", scrollY > 1550);
        document.getElementById("card16").classList.toggle("active", scrollY > 1900);
        document.getElementById("card17").classList.toggle("active", scrollY > 1900);
        document.getElementById("card18").classList.toggle("active", scrollY > 1950);
    })
}
else if (pc.matches) {
    window.addEventListener("scroll", () => {
        document.getElementById("bottom").classList.toggle("active", scrollY > 500);
        document.getElementById("card1").classList.toggle("active", scrollY > 250);
        document.getElementById("card2").classList.toggle("active", scrollY > 270);
        document.getElementById("card3").classList.toggle("active", scrollY > 450);
        document.getElementById("card4").classList.toggle("active", scrollY > 450);
        document.getElementById("card5").classList.toggle("active", scrollY > 470);
        document.getElementById("card6").classList.toggle("active", scrollY > 600);
        document.getElementById("card7").classList.toggle("active", scrollY > 650);
        document.getElementById("card8").classList.toggle("active", scrollY > 700);
        document.getElementById("card9").classList.toggle("active", scrollY > 750);
        document.getElementById("card10").classList.toggle("active", scrollY > 1500);
        document.getElementById("card11").classList.toggle("active", scrollY > 1200);
        document.getElementById("card12").classList.toggle("active", scrollY > 1250);
        document.getElementById("card13").classList.toggle("active", scrollY > 1650);
        document.getElementById("card14").classList.toggle("active", scrollY > 1500);
        document.getElementById("card15").classList.toggle("active", scrollY > 1550);
        document.getElementById("card16").classList.toggle("active", scrollY > 1900);
        document.getElementById("card17").classList.toggle("active", scrollY > 1900);
        document.getElementById("card18").classList.toggle("active", scrollY > 1950);
    })
}
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// Gallery Section Ends
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// Blog Section Starts
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
if (pc.matches) {
    window.addEventListener("scroll", () => {
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
    window.addEventListener("scroll", () => {
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
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// Blog Section Ends
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------