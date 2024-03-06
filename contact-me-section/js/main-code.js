$(window).on("scroll", function() {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar_top").classList.add("header-fixed");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        document.getElementById("navbar_top").classList.remove("header-fixed");
    }
});
// replace if code with this later $(window).scrollTop() > document.getElementById("about")?.offsetTop-62