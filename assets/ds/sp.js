/* Supermercado Popular — comportamentos v1 (sem dependências, roda via file://) */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Revelar ao rolar: [data-reveal], atraso opcional via style="--d:120ms"
  var els = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Troca de palavra: <span class="sp-swap" data-words="fresco|perto|de casa"><span class="sp-swap__word">fresco</span></span>
  document.querySelectorAll('.sp-swap[data-words]').forEach(function (el) {
    var words = el.dataset.words.split('|'), i = 0, w = el.querySelector('.sp-swap__word');
    if (reduce || words.length < 2) return;
    setInterval(function () {
      el.classList.remove('is-swapping'); void el.offsetWidth; el.classList.add('is-swapping');
      setTimeout(function () { i = (i + 1) % words.length; w.textContent = words[i]; }, 250);
    }, 2400);
  });

  // Cestinha: sorri ao entrar na tela
  document.querySelectorAll('.sp-smile[data-smile-on-view]').forEach(function (el) {
    if (!('IntersectionObserver' in window)) return;
    new IntersectionObserver(function (entries, o) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        el.classList.add('is-happy'); setTimeout(function () { el.classList.remove('is-happy'); }, 800); o.disconnect();
      });
    }, { threshold: 0.6 }).observe(el);
  });

  // Faixa rolante: duplica o conteúdo para o loop contínuo
  document.querySelectorAll('.sp-marquee__track').forEach(function (t) {
    if (t.dataset.cloned) return; t.dataset.cloned = '1';
    t.innerHTML += t.innerHTML;
  });
})();
