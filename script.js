// script.js
// Simple interactivity: mobile nav toggle, form handling, and subtle reveal animations

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
});

// Contact form handling (no backend) — demonstrates simple validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
  // Open user's mail client as a fallback for demo purposes
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(message + '\n\n--\n' + name + ' (' + email + ')');
  window.location.href = `mailto:yadavman541526@gmail.com?subject=${subject}&body=${body}`;
});

// IntersectionObserver to reveal sections as they enter viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('section, .card, .skill-card').forEach(el => {
  el.classList.add('pre-reveal');
  observer.observe(el);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
