
// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
  document.getElementById('menu').classList.toggle('active');
});

// Testimonial slider
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

testimonialDots.forEach(dot => {
  dot.addEventListener('click', function() {
    const slideIndex = this.getAttribute('data-slide');
    
    // Update active dot
    testimonialDots.forEach(d => d.classList.remove('active'));
    this.classList.add('active');
    
    // Update active slide
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialSlides[slideIndex].classList.add('active');
  });
});

// Auto slide testimonials
let currentSlide = 0;
function autoSlide() {
  currentSlide = (currentSlide + 1) % testimonialSlides.length;
  
  testimonialDots.forEach(d => d.classList.remove('active'));
  testimonialDots[currentSlide].classList.add('active');
  
  testimonialSlides.forEach(slide => slide.classList.remove('active'));
  testimonialSlides[currentSlide].classList.add('active');
}

setInterval(autoSlide, 5000);

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
    
    if (isVisible) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
