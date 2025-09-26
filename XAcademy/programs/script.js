// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function(){
  document.getElementById('menu').classList.toggle('active');
});

// Modal logic for program details
const modal = document.getElementById('programModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

const details = {
  stem: {
    title: 'STEM Education',
    body: 'Explore coding, robotics, physics demos, and engineering design challenges that turn theory into hands-on discovery.'
  },
  arts: {
    title: 'Arts & Creativity',
    body: 'From painting and digital art to theatre and music ensembles, students express themselves and build creative confidence.'
  },
  language: {
    title: 'Language Learning',
    body: 'Interactive language labs, conversation clubs, and cultural days help learners become confident global citizens.'
  },
  sports: {
    title: 'Sports & Wellness',
    body: 'Team sports, movement workshops, and nutrition sessions encourage healthy, active lifestyles.'
  },
  early: {
    title: 'Early Years (KidsBay)',
    body: 'Play-based early learning focused on curiosity, sensory exploration, and foundational social skills.'
  },
  summer: {
    title: 'Summer Camps',
    body: 'Week-long themed camps in STEM, arts, and adventure keep learning fun during the holidays.'
  }
};

document.querySelectorAll('.program-card').forEach(card => {
  card.querySelector('.more-btn').addEventListener('click', () => {
    const key = card.getAttribute('data-program');
    modalTitle.textContent = details[key].title;
    modalBody.textContent = details[key].body;
    modal.classList.add('show');
  });
});

closeModal.addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });

