// script.js

// Change navbar background color when scrolling
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// Change color of menu items on hover (already handled by CSS, no JS required here)
