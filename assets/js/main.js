/* ==========================================================================
   MADAHACK — main.js
   ========================================================================== */

(() => {
  'use strict';

  /* ----- Easter egg : console signature -------------------------------- */
  const banner = [
    '%c',
    '  __  __    _    ____    _    _   _    _    ____ _  __',
    ' |  \\/  |  / \\  |  _ \\  / \\  | | | |  / \\  / ___| |/ /',
    ' | |\\/| | / _ \\ | | | |/ _ \\ | |_| | / _ \\| |   | \' / ',
    ' | |  | |/ ___ \\| |_| / ___ \\|  _  |/ ___ \\ |___| . \\ ',
    ' |_|  |_/_/   \\_\\____/_/   \\_\\_| |_/_/   \\_\\____|_|\\_\\',
    '',
    '  HACK · DEFEND · SECURE',
    '  Cybersécurité made in Madagascar',
    '  contact@madahack.org',
    ''
  ].join('\n');

  console.log(banner, 'color:#007E3A;font-family:monospace;font-size:12px;');
  console.log(
    '%cCurieux(se) ? Le code est ouvert. Rejoignez-nous : contact@madahack.org',
    'color:#FC3D32;font-family:monospace;'
  );

  /* ----- Mobile burger menu -------------------------------------------- */
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    const toggleMenu = (open) => {
      const isOpen = typeof open === 'boolean' ? open : !burger.classList.contains('open');
      burger.classList.toggle('open', isOpen);
      navLinks.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    burger.addEventListener('click', () => toggleMenu());

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  /* ----- Nav background on scroll -------------------------------------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ----- Fade-in on scroll (IntersectionObserver) ---------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length > 0) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  /* ----- Contact form → mailto ---------------------------------------- */
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const topic = (data.get('topic') || 'Information générale').toString();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) {
        return;
      }

      const subject = `[MADAHACK] ${topic} — ${name}`;
      const body = [
        `Nom : ${name}`,
        `Email : ${email}`,
        `Sujet : ${topic}`,
        '',
        '--- Message ---',
        message,
        '',
        '— envoyé depuis madahack.org'
      ].join('\n');

      const mailto = `mailto:contact@madahack.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }

  /* ----- Konami-ish easter egg ---------------------------------------- */
  const sequence = ['h', 'a', 'c', 'k'];
  let progress = 0;
  document.addEventListener('keydown', (e) => {
    const key = (e.key || '').toLowerCase();
    if (key === sequence[progress]) {
      progress++;
      if (progress === sequence.length) {
        document.documentElement.style.transition = 'filter 400ms ease';
        document.documentElement.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => { document.documentElement.style.filter = ''; }, 1500);
        console.log('%c[unlocked] hack mode — gg', 'color:#FC3D32;font-weight:bold;');
        progress = 0;
      }
    } else {
      progress = key === sequence[0] ? 1 : 0;
    }
  });
})();
