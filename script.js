/* Jyestha Foods – Simple interactions */

(function () {
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelectorAll('.nav-link');

  // Header scroll effect
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close mobile nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  function updateActiveLink() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
})();
