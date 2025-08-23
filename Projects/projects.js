document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector(".header")
    let lastScroll = window.pageYOffset;
    let ticking = false;

    function onScroll() {
        const currentScroll = window.pageYOffset;
        
        // Add or remove scrolled class based on scroll position
        if (currentScroll > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Add or remove header-hidden class based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 80) {
            // Scrolling down
            header.classList.add("header-hidden");
        } else {
            // Scrolling up
            header.classList.remove("header-hidden");
        }
        
        lastScroll = currentScroll;
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    });

    // Mobile menu toggle (unified with Home)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Add hover effect to project images
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
});
