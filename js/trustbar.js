/* =====================================================
   VIS Networks — Trust-bar marquee
   Whichever logo is closest to the centre lights up in
   full colour; the rest stay greyscale.
   ===================================================== */
(function () {
  const track = document.getElementById('trustTrack');
  if (!track) return;
  const wrap = track.parentElement; // .ai-marquee
  const imgs = Array.prototype.slice.call(track.querySelectorAll('img'));
  if (!imgs.length) return;

  let raf = null, active = null;

  function tick() {
    const r = wrap.getBoundingClientRect();
    const centre = r.left + r.width / 2;
    let best = null, bestDist = Infinity;
    for (let i = 0; i < imgs.length; i++) {
      const ir = imgs[i].getBoundingClientRect();
      const d = Math.abs((ir.left + ir.width / 2) - centre);
      if (d < bestDist) { bestDist = d; best = imgs[i]; }
    }
    if (best !== active) {
      if (active) active.classList.remove('is-active');
      best.classList.add('is-active');
      active = best;
    }
    raf = requestAnimationFrame(tick);
  }

  function start() { cancelAnimationFrame(raf); tick(); }
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) cancelAnimationFrame(raf); else start();
  });
  start();
})();
