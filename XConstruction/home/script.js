document.addEventListener("DOMContentLoaded", () => {
  // Preload images first
  const preloadImages = () => {
    const images = [
      "../images/slide1.jpg",
      "../images/slide2.jpg",
      "../images/slide3.jpg",
      "../images/project1.jpg",
      "../images/project2.jpeg",
      "../images/project3.jpeg",
      "../images/Render1.jpg",
      "../images/rr2.jpeg",
      "../images/Bajaj.jpg",
      "../images/bhVilla.png"
    ]

    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }

  // Call preload function immediately
  preloadImages()

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
  
  // Also check on resize to handle orientation changes
  window.addEventListener("resize", () => {
    // On resize, show header if at top of page
    if (window.pageYOffset <= 80) {
      header.classList.remove("header-hidden");
    }
  });

  // Slideshow functionality
  const slides = document.querySelectorAll(".slide")
  const totalSlides = slides.length
  let currentSlide = 0
  let slideInterval
  const intervalTime = 4900 // 4.9 seconds

  // Update slide counter (custom)
  function updateSlideCounter() {
    const current = document.querySelector(".slide-counter-custom .current-slide")
    const total = document.querySelector(".slide-counter-custom .total-slides")
    if (current) current.textContent = String(currentSlide + 1).padStart(2, "0")
    if (total) total.textContent = String(totalSlides).padStart(2, "0")
  }

  // Show slide with animation
  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active")
    })
    slides[index].classList.add("active")
    currentSlide = index
    updateSlideCounter()
  }

  // Next slide with smooth transition
  function nextSlide() {
    let nextIndex = currentSlide + 1
    if (nextIndex >= totalSlides) {
      nextIndex = 0
    }
    showSlide(nextIndex)
  }

  // Previous slide with smooth transition
  function prevSlide() {
    let prevIndex = currentSlide - 1
    if (prevIndex < 0) {
      prevIndex = totalSlides - 1
    }
    showSlide(prevIndex)
  }

  // Start automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  // Stop automatic slideshow
  function stopSlideshow() {
    clearInterval(slideInterval)
  }

  // Navigation buttons (custom)
  const nextButton = document.querySelector(".nav-buttons-custom .nav-button.next")
  const prevButton = document.querySelector(".nav-buttons-custom .nav-button.prev")

  nextButton.addEventListener("click", () => {
    stopSlideshow()
    nextSlide()
    startSlideshow()
  })

  prevButton.addEventListener("click", () => {
    stopSlideshow()
    prevSlide()
    startSlideshow()
  })

  // Initialize slideshow
  showSlide(0)
  startSlideshow()

  // Pause slideshow on hover
  const sliderContainer = document.querySelector(".slider-container")
  sliderContainer.addEventListener("mouseenter", stopSlideshow)
  sliderContainer.addEventListener("mouseleave", startSlideshow)

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mainNav = document.querySelector(".main-nav")

  mobileMenuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active")
    mobileMenuToggle.classList.toggle("active")
  })

  // Services section hover effect
  const serviceItems = document.querySelectorAll(".service-item")
  const serviceBg = document.getElementById("service-bg")
  
  // Debug logging
  console.log("Service items found:", serviceItems.length)
  console.log("Service background element:", serviceBg)
  
  if (serviceItems.length > 0) {
    let lastHoveredService = serviceItems[0].getAttribute("data-bg") // Initialize with first service
    console.log("First service background:", lastHoveredService)

    // Initialize service background with first service image
    if (serviceBg && lastHoveredService) {
      serviceBg.style.backgroundImage = `url(${lastHoveredService})`
      serviceBg.style.opacity = "0.3"
      console.log("Service background initialized with:", lastHoveredService)
    }
  }

  serviceItems.forEach((item, index) => {
    const bgImage = item.getAttribute("data-bg")
    console.log(`Service ${index + 1} background:`, bgImage)
    
    item.addEventListener("mouseenter", () => {
      if (serviceBg && bgImage) {
        serviceBg.style.backgroundImage = `url(${bgImage})`
        serviceBg.style.opacity = "1"
        lastHoveredService = bgImage
        console.log("Service background changed to:", bgImage)
      }
    })

    item.addEventListener("click", (e) => {
      e.preventDefault()
      const serviceName = item.querySelector("h3").textContent.toLowerCase().replace(/\s+/g, "-")
      window.location.href = `../Services/services.html#${serviceName}`
    })
  })

  // Keep the last hovered service background visible
  const servicesContainer = document.querySelector(".services-container")
  servicesContainer.addEventListener("mouseleave", () => {
    if (serviceBg && lastHoveredService) {
      serviceBg.style.backgroundImage = `url(${lastHoveredService})`
      serviceBg.style.opacity = "0.3"
    }
  })

  // Ensure service background is visible on page load
  setTimeout(() => {
    if (serviceBg && serviceItems.length > 0) {
      const firstServiceBg = serviceItems[0].getAttribute("data-bg")
      if (firstServiceBg) {
        serviceBg.style.backgroundImage = `url(${firstServiceBg})`
        serviceBg.style.opacity = "0.3"
        console.log("Service background ensured visible:", firstServiceBg)
      }
    }
  }, 100)

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for fade-in animation
  document.querySelectorAll(".who-we-are, .newsroom, .our-services, .featured-projects").forEach((section) => {
    section.classList.add("fade-in-element")
    observer.observe(section)
  })

  // Projects section background effect
  const projectCards = document.querySelectorAll(".project-card")
  const projectsBg = document.getElementById("projects-bg")
  let lastProjectBg = "../images/Bajaj.jpg" // Initialize with first project

  // Set initial background
  if (projectsBg) {
    projectsBg.style.backgroundImage = `url(${lastProjectBg})`
  }

  projectCards.forEach((card) => {
    const bgImage = card.getAttribute("data-bg")

    card.addEventListener("mouseenter", () => {
      if (projectsBg && bgImage) {
        projectsBg.style.backgroundImage = `url(${bgImage})`
        projectsBg.style.opacity = "0.7"
        lastProjectBg = bgImage
      }
    })
  })

  // Keep last hovered background when mouse leaves the grid
  const projectsGrid = document.querySelector(".projects-grid")
  if (projectsGrid) {
    projectsGrid.addEventListener("mouseleave", () => {
      if (projectsBg) {
        projectsBg.style.backgroundImage = `url(${lastProjectBg})`
        projectsBg.style.opacity = "0.7"
      }
    })
  }
})