// Custom JavaScript code can go here

// Example: Initializing a Bootstrap Carousel
$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000
    });
});


window.addEventListener('scroll', function() {
    var logo = document.querySelector('.navbar-brand img');
    if (window.pageYOffset > 100) { // Adjust the 100 value as needed
        logo.style.height = '40px'; // Smaller size when scrolled down
    } else {
        logo.style.height = '100px'; // Larger size when at the top of the page
    }
});
