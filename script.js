// Dropdown menu
const menuBtn = document.getElementById('menuBtn');
const dropdownContent = document.getElementById('dropdownContent');
if (menuBtn && dropdownContent) {
  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
  });
  window.addEventListener('click', function (event) {
    if (!event.target.closest('.dropbtn')) {
      dropdownContent.classList.remove('show');
    }
  });
}

// Scroll reveal
(function initReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;
  if (prefersReduced) {
    revealEls.forEach(el => el.classList.add('reveal-active'));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-delay');
        if (delay) el.style.transitionDelay = `${parseInt(delay, 10)}ms`;
        el.classList.add('reveal-active');
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  revealEls.forEach(el => observer.observe(el));
})();


