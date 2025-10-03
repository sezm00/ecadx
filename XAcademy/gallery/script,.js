// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function(){
  document.getElementById('menu').classList.toggle('active');
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.masonry-item').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    lightboxImg.src = a.getAttribute('href');
    lightbox.classList.add('show');
  });
});

lightboxClose.addEventListener('click', ()=> lightbox.classList.remove('show'));
lightbox.addEventListener('click', (e)=> { if(e.target === lightbox) lightbox.classList.remove('show'); });

