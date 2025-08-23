document.addEventListener("DOMContentLoaded", () => {
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
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mainNav = document.querySelector(".main-nav")

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active")
      mobileMenuToggle.classList.toggle("active")
    })
  }
});

// Timeline: animate on scroll
(function() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach((item) => observer.observe(item));
})();

// Advanced alternating timeline: animate on scroll
(function() {
  const milestones = document.querySelectorAll('.timeline-advanced .milestone');
  if (!milestones.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  milestones.forEach((el) => observer.observe(el));
})();
