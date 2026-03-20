(function () {
  const STORAGE_KEY = 'ce-lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'de';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-de][data-en]').forEach(el => {
      el.textContent = lang === 'de' ? el.getAttribute('data-de') : el.getAttribute('data-en');
    });
    document.querySelectorAll('[data-de-placeholder][data-en-placeholder]').forEach(el => {
      el.placeholder = lang === 'de' ? el.getAttribute('data-de-placeholder') : el.getAttribute('data-en-placeholder');
    });

    const btn = document.querySelector('.lang-toggle');
    if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';

    const titles = {
      'index.html':     { de: 'Claude Eisensaurier — Fotografie',  en: 'Claude Eisensaurier — Photography' },
      'about.html':     { de: 'Claude Eisensaurier — Über mich',   en: 'Claude Eisensaurier — About' },
      'portfolio.html': { de: 'Claude Eisensaurier — Portfolio',   en: 'Claude Eisensaurier — Portfolio' },
      'contact.html':   { de: 'Claude Eisensaurier — Kontakt',     en: 'Claude Eisensaurier — Contact' },
    };
    const page = location.pathname.split('/').pop() || 'index.html';
    if (titles[page]) document.title = titles[page][lang];
  }

  window.toggleLang = function () { applyLang(currentLang === 'de' ? 'en' : 'de'); };

  document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));
})();
