/* =====================================================
   VIS Networks — Shared JavaScript
   - Injects the separate header & footer partials
   - Handles nav highlighting, mobile menu, scroll reveal
   ===================================================== */

document.addEventListener('DOMContentLoaded', init);

function init() {
  injectPartials();
  setupHeader();
  setupReveal();
  setYear();
}

/* Inject the separate header/footer partials (loaded from
   partials/header.js and partials/footer.js) into their
   placeholders. Works over file:// — no server required. */
function injectPartials() {
  const map = {
    header: window.VIS_HEADER,
    footer: window.VIS_FOOTER,
  };
  document.querySelectorAll('[data-include]').forEach(slot => {
    const html = map[slot.getAttribute('data-include')];
    if (html) slot.innerHTML = html;
  });
}

function setupHeader() {
  const header = document.getElementById('siteHeader');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', (e) => {
        const parent = a.parentElement;
        // On mobile, a dropdown parent acts as an accordion toggle (don't navigate / don't close)
        if (parent.classList.contains('nav-dropdown') && window.innerWidth <= 940) {
          e.preventDefault();
          parent.classList.toggle('open');
          return;
        }
        toggle.classList.remove('open');
        menu.classList.remove('open');
      })
    );
  }

  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // active link based on body[data-page]
  const page = document.body.getAttribute('data-page');
  if (page) {
    const link = document.querySelector(`.nav-link[data-nav="${page}"]`);
    if (link) link.classList.add('active');
  }
}

function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}
