var lastScrollTop = 0;
var navbar = document.querySelector(".nav");

window.addEventListener("scroll", function () {

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});