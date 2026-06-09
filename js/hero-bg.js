/* =====================================================
   VIS Networks — Hero "AI / technology" background
   Lightweight particle-network (constellation) animation
   drawn on a canvas behind the hero content. Works on both
   the light home hero and the dark interior page heroes
   (set data-tone="dark" on the canvas for the dark variant).
   ===================================================== */
(function () {
  const canvas = document.querySelector('.hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dark = canvas.dataset.tone === 'dark';

  // colour palette adapts to the hero background
  const NODE = dark ? '255,150,170' : '217,4,41';
  const LINE = dark ? '255,150,170' : '217,4,41';
  const nodeAlpha = dark ? 0.7 : 0.55;
  const lineAlpha = dark ? 0.22 : 0.18;

  let w = 0, h = 0, dpr = 1, particles = [], raf = null;
  const LINK_DIST = 134;

  function count() {
    return Math.min(72, Math.max(28, Math.round((w * h) / 16000)));
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seed() {
    particles = Array.from({ length: count() }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.7 + 1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          ctx.strokeStyle = 'rgba(' + LINE + ',' + (lineAlpha * (1 - d / LINK_DIST)).toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const p of particles) {
      ctx.fillStyle = 'rgba(' + NODE + ',' + nodeAlpha + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(draw);
  }

  function renderStatic() {
    cancelAnimationFrame(raf);
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      ctx.fillStyle = 'rgba(' + NODE + ',' + nodeAlpha + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function start() {
    resize();
    seed();
    cancelAnimationFrame(raf);
    if (reduce) renderStatic(); else draw();
  }

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(start, 200); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else if (!reduce) draw();
  });

  start();
})();
