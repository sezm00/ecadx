document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = modal.querySelector(".close");
  
    // Example project details (fill in full descriptions)
    const projectDetails = {
      1: {
        title: "Ghabour BAJAJ Automotive",
        location: "6th October City",
        description: "A complete industrial facility in 6th October City. Includes factory buildings, offices, and specialized automotive workspaces.",
        status: "Completed"
      },
      2: {
        title: "StarChem Industrial Facility",
        location: "Waterfront District",
        description: "Chemical processing plant with advanced safety systems.",
        status: "Completed"
      },
      3: {
        title: "Beverly Hills Private Villa",
        location: "Beverly Hills",
        description: "A luxury residential villa in Beverly Hills, Sheikh Zayed. We handled complete architectural design and turnkey construction, delivering a high-end family home with premium finishes.",
        status: "Completed"
      },
      4: {
        title: "Ourika Compound Design Services",
        location: "Industrial Zone",
        description: "Design enhancement for Developer X’s flagship project in Sheikh Zayed. We provided 2D plan optimization and 3D visualization for select villas in this Moroccan-inspired compound.",
        status: "Completed"
      },
      5: {
        title: "Muse El Midan",
        location: "Medical District",
        description: "Revolutionary circular retail hub in New Cairo with 50+ premium brands (2025)",
        status: "Completed"
      },
      6: {
        title: "Bianchi Sahe",
        location: "Industrial Zone",
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
          <p>${project.description}</p>
          <p><strong>Status:</strong> ${project.status}</p>
        `;
        modal.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
  