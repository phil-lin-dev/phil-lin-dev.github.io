// ============================================
//  Philip Lin — Portfolio interactions
// ============================================

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav__links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
// Close menu after clicking a link (mobile)
navLinks.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  })
);

// Scroll-reveal animations
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}
