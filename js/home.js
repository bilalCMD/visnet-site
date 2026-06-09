/* ===== Home page interactions: partner walls + trust marquee + reviews ===== */
(function () {
  const groups = {
    'uc-logos':         { folder: 'uc',         count: 16 },
    'network-logos':    { folder: 'network',    count: 11 },
    'audio-logos':      { folder: 'audio',      count: 16 },
    'automation-logos': { folder: 'automation', count: 2  },
  };

  const cell = (folder, i) =>
    `<div class="logo-cell"><img src="images/partners/${folder}/${i}.png" alt="Partner logo" loading="lazy"></div>`;

  // Build each partner wall (one logo each)
  Object.keys(groups).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const { folder, count } = groups[id];
    let set = '';
    for (let i = 1; i <= count; i++) set += cell(folder, i);
    el.innerHTML = set;
  });

  // Trust strip marquee (mix of logos, duplicated for a seamless loop)
  const trust = document.getElementById('trust-track');
  if (trust) {
    let set = '';
    for (let i = 1; i <= 16; i++) set += cell('uc', i);
    for (let i = 1; i <= 11; i++) set += cell('network', i);
    for (let i = 1; i <= 12; i++) set += cell('audio', i);
    trust.innerHTML = set.repeat(2);
  }

  // Review carousel
  const reviews = [
    { t: "I want to appreciate the exceptional support you provided recently. Your dedication, professionalism, and commitment to resolving my issue were truly outstanding. Your expertise, attentiveness, and ability to explain complex concepts clearly were truly impressive.", a: "Enterprise Customer" },
    { t: "It gives me immense pleasure in congratulating you for securing an important strategic win with VIACOM. You truly have been a strong pillar of support in demystifying all the challenges, delivering competitive differentiation and helping Avaya win strategic deals.", a: "Avaya Partner" },
    { t: "Thank you for your kind support in orchestrating the successful completion of the COX server configuration and testing. It is great that we could replicate the setup in minimal time.", a: "COX Project Team" }
  ];
  const textEl = document.getElementById('review-text');
  const authEl = document.getElementById('review-author');
  const dots = document.querySelectorAll('.review-dots button');
  let idx = 0, timer;

  function show(i) {
    idx = i;
    const card = document.querySelector('.review-card');
    if (card) { card.classList.remove('fade'); void card.offsetWidth; card.classList.add('fade'); }
    if (textEl) textEl.textContent = reviews[i].t;
    if (authEl) authEl.textContent = reviews[i].a;
    dots.forEach((d, k) => d.classList.toggle('active', k === i));
  }
  function next() { show((idx + 1) % reviews.length); }

  if (textEl && dots.length) {
    dots.forEach(d => d.addEventListener('click', () => {
      show(+d.dataset.r);
      clearInterval(timer);
      timer = setInterval(next, 5500);
    }));
    timer = setInterval(next, 5500);
  }
})();
