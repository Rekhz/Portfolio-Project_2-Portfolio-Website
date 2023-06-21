/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
//script for round cursor

document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", function(e) {
        var x = e.clientX;
        var y = e.clientY;

        cursor.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
    });

    document.addEventListener("mousedown", function() {
        cursor.classList.add("active");
    });

    document.addEventListener("mouseup", function() {
        cursor.classList.remove("active");
    });
});
