 // Custom Cursor
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .craft-card, .play-item, .film-card, .artist-card, .art-tile').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px'; cursor.style.height = '20px';
      cursorRing.style.width = '52px'; cursorRing.style.height = '52px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px'; cursor.style.height = '12px';
      cursorRing.style.width = '36px'; cursorRing.style.height = '36px';
    });
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.timeline-item, .play-item, .film-card, .artist-card').forEach(el => observer.observe(el));

  // Navbar scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.style.background = 'rgba(13,21,37,0.97)';
      nav.style.borderBottomColor = 'rgba(201,147,58,0.15)';
    } else {
      nav.style.background = 'linear-gradient(to bottom, rgba(13,21,37,0.95), transparent)';
      nav.style.borderBottomColor = 'rgba(201,147,58,0.1)';
    }
  });

  // Stagger film cards by index
  document.querySelectorAll('.film-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.08) + 's';
  });