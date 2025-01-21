const NavButton = document.getElementById("nav-button");
const NavMenu = document.getElementById("nav-menu");

NavButton.addEventListener("click", () => {
  NavMenu.classList.toggle("active");
})

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smooth scrolling animation
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
