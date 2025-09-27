document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.querySelector('.header')
  let lastScroll = window.pageYOffset
  let ticking = false

  function onScroll() {
    const currentScroll = window.pageYOffset
    if (currentScroll > 50) header.classList.add('scrolled')
    else header.classList.remove('scrolled')

    if (currentScroll > lastScroll && currentScroll > 80) header.classList.add('header-hidden')
    else header.classList.remove('header-hidden')

    lastScroll = currentScroll
    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll)
      ticking = true
    }
  })

  // Mobile menu toggle (unified with Home)
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
  const mainNav = document.querySelector('.main-nav')

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active')
      mobileMenuToggle.classList.toggle('active')
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
})

function openGoogleMapsDirections() {
  const destination = 'Wadi Al Rabie Village, El Motamayz District, Administrative Building 2, Apartment 103, 6 October, Giza, Egypt'
  const encodedDestination = encodeURIComponent(destination)
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`, '_blank')
}

// =========================
// Contact form submission
// =========================
const form = document.getElementById("contact-form")
const status = document.getElementById("form-status")

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault() // stop page redirect
    const data = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      })

      if (response.ok) {
        status.textContent = "Message Sent! Thank you."
        form.reset()
      } else {
        status.textContent = "Oops! Something went wrong."
      }
    } catch (error) {
      status.textContent = " Network error. Try again later."
    }
  })
}
