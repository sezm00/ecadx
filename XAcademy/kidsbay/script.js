document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Cursor image test
    const cursorImage = new Image();
    cursorImage.src = '../../img/pencil.png';
    cursorImage.onerror = () => {
      console.error('❌ Cursor image not found. Check path.');
    };
    cursorImage.onload = () => {
      console.log('✅ Cursor image loaded successfully.');
    };
  
    // Force cursor globally as backup
    document.body.style.cursor = 'url("../../img/pencil.png") 4 28, auto';
  });
  