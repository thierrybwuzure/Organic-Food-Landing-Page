// Get Elements

const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');
const navLinks = document.querySelectorAll('.nav-link');

// Close Menu When Clicking A Nav Link

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false;
    });
});

// Close Menu When Clicking Outside

document.addEventListener('click', (e) => {
    // If click is not on hamburger, nav, or menu-toggle label, close menu
    if (!e.target.closest('#nav-bar') &&
        !e.target.closest('.hamburger') &&
        !e.target.closest('#menu-toggle')) {
        menuToggle.checked = false;
    }
});

