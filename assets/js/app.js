"use strict";

// Basic interactivity and scroll animations (IntersectionObserver)
(function(){
  // Mobile menu toggle
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));

  // Simple keyboard accessibility for modal-like lightbox if present
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      const lb = document.getElementById('lightbox');
      const lbImg = document.getElementById('lightboxImg');
      if (lb && !lb.classList.contains('hidden')) {
        lb.classList.add('hidden');
        lbImg.src = '';
      }
    }
  });
})();
