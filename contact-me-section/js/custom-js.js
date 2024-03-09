// $(window).on("scroll", function () {
//     if ($(window).scrollTop() > document.getElementById("text_slogan")?.offsetTop - 11) {
//         document.getElementById("navbar_top").classList.add("header-fixed");
//     } else {
//         //remove the background property so it comes transparent again (defined in your css)
//         document.getElementById("navbar_top").classList.remove("header-fixed");
//     }
// });

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

$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(153).fadeOut("slow");
});

let sections = document.querySelectorAll('section');
let navItemLinks = document.querySelectorAll('.navbar-nav li a');
$(window).on("scroll", function () {
    sections.forEach(section => {
        let top = $(window).scrollTop();
        let offset = section.offsetTop - 72;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top > offset && top < offset + height) {
            navItemLinks.forEach(link => {
                link.classList.remove('active');
                if (id == "cover_image") id = '';
                document.querySelector(`.navbar-nav li a[href$='#${id}']`).classList.add("active");
            })
        }
    })
});