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
        title: "StarChem Industrial Facility",
        location: "Waterfront District",
        description: "Chemical processing plant with advanced safety systems.",
        status: "Completed"
      },
      4: {
        title: "StarChem Industrial Facility",
        location: "Waterfront District",
        description: "Chemical processing plant with advanced safety systems.",
        status: "Completed"
      },
      5: {
        title: "StarChem Industrial Facility",
        location: "Waterfront District",
        description: "Chemical processing plant with advanced safety systems.",
        status: "Completed"
      },
      6: {
        title: "StarChem Industrial Facility",
        location: "Waterfront District",
        description: "Chemical processing plant with advanced safety systems.",
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
          <ul>
            <li><strong>Area:</strong> ${project.area}</li>
            <li><strong>Duration:</strong> ${project.duration}</li>
            <li><strong>Status:</strong> ${project.status}</li>
          </ul>
        `;
        modal.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
  