document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector(".header")
    let lastScroll = window.pageYOffset;
    let ticking = false;

    function onScroll() {
        const currentScroll = window.pageYOffset;
        const isMobile = window.innerWidth <= 768;
        
        // Add or remove scrolled class based on scroll position
        if (currentScroll > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Header show/hide on scroll - works on both mobile and desktop
        if (currentScroll > lastScroll && currentScroll > 80) {
            // Scrolling down - hide header
            header.classList.add("header-hidden");
        } else {
            // Scrolling up - show header
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
    
    window.addEventListener("resize", () => {
        // On resize, show header if at top of page
        if (window.pageYOffset <= 80) {
            header.classList.remove("header-hidden");
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

    // Add hover effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
