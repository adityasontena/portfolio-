const progressBar = document.querySelector('.scroll-progress span');
const revealItems = document.querySelectorAll('[data-reveal]');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const portrait = document.querySelector('[data-parallax]');

const updateProgress = () => {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0}%`;
};

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(item);
});

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('pointermove', (event) => {
  if (!portrait || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 700) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 7;
  const y = (event.clientY / window.innerHeight - 0.5) * 7;
  portrait.style.transform = `rotate(${4 + x * 0.35}deg) translate(${x}px, ${y}px)`;
});

window.addEventListener('pointerout', (event) => {
  if (event.relatedTarget || !portrait) return;
  portrait.style.transform = 'rotate(4deg)';
});
