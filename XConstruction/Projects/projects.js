document.addEventListener("DOMContentLoaded", function() {
    // Header scroll effect
    const header = document.querySelector(".header");
    let lastScroll = window.pageYOffset;
    let ticking = false;

    function onScroll() {
        const currentScroll = window.pageYOffset;
        const isMobile = window.innerWidth <= 768;

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

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
            mobileMenuToggle.classList.toggle("active");
        });
    }

    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = modal.querySelector(".close");
  
    // Example project details (fill in full descriptions)
    const projectDetails = {
      1: {
        title: "Ghabour BAJAJ Automotive",
        location: "6th October City",
        mapsLink: "https://www.google.com/maps?q=6th+October+City",
        description: "A complete industrial facility in 6th October City. Includes factory buildings, offices, and specialized automotive workspaces.",
        status: "Completed"
      },
      2: {
        title: "StarChem Industrial Facility",
        location: "Industrial Zone",
        mapsLink: "https://www.google.com/maps?q=Industrial+Zone,+6th+October+City",
        description: "Chemical processing plant with advanced safety systems.",
        status: "Completed"
      },
      3: {
        title: "Beverly Hills Private Villa",
        location: "Sheikh Zayed",
        mapsLink: "https://www.google.com/maps?q=Beverly+Hills,+Sheikh+Zayed",
        description: "A luxury residential villa in Beverly Hills, Sheikh Zayed. We handled complete architectural design and turnkey construction, delivering a high-end family home with premium finishes.",
        status: "Completed"
      },
      4: {
        title: "Ourika Compound Design Services",
        location: "Sheikh Zayed",
        mapsLink: "https://www.google.com/maps?q=Sheikh+Zayed,+Giza,+Egypt",
        description: "Design enhancement for Developer X’s flagship project in Sheikh Zayed. We provided 2D plan optimization and 3D visualization for select villas in this Moroccan-inspired compound.",
        status: "Completed"
      },
      5: {
        title: "Muse El Midan",
        location: "New Cairo",
        mapsLink: "https://www.google.com/maps?q=New+Cairo,+Egypt",
        description: "Revolutionary circular retail hub in New Cairo with 50+ premium brands (2025)",
        status: "Completed"
      },
      6: {
        title: "Bianchi Sahel",
        location: "North Coast",
        mapsLink: "https://www.google.com/maps?q=Bianchi+Sahel,+North+Coast,+Egypt",
        description: "North Coast sales office transformation preserving 1980s architectural character (2024)",
        status: "Completed"
      }
    };
    
  
    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.project;
        const project = projectDetails[id];
        modalBody.innerHTML = `
          <h2>${project.title}</h2>
          
          <p><strong>Location:</strong> ${project.location}</p>
          <p>
            <a href="${project.mapsLink}" target="_blank" rel="noopener noreferrer" class="map-link">
              View on Google Maps
            </a>
          </p>

          <p><strong>Status:</strong> ${project.status}</p>
          <p>${project.description}</p>
        `;

        modal.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
  