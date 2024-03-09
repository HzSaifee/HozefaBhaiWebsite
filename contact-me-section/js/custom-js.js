$(window).on("scroll", function () {
    if ($(window).scrollTop() > document.getElementById("text_slogan")?.offsetTop - 11) {
        document.getElementById("navbar_top").classList.add("header-fixed");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        document.getElementById("navbar_top").classList.remove("header-fixed");
    }
});

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbar-collapse-toggle')
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, { toggle: false })
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if ($(".navbar-toggler-icon").is(":visible")) {
            bsCollapse.toggle()
        }
        else;
    })
})

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(153).fadeOut("slow");

});