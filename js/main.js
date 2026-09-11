// ===== Language Toggle =====
function toggleLang() {
  document.body.classList.toggle('ar');
  const isAr = document.body.classList.contains('ar');
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  localStorage.setItem('lumenon-lang', isAr ? 'ar' : 'en');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-label', isAr ? 'Switch to English' : 'التبديل إلى العربية');
  });
}

// Load saved language
(function() {
  const saved = localStorage.getItem('lumenon-lang');
  if (saved === 'ar') {
    document.body.classList.add('ar');
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }
})();

// ===== Fade-in on scroll =====
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ===== Active nav link =====
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) link.classList.add('active');
  });

  // ===== Contact form =====
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const isAr = document.body.classList.contains('ar');
      alert(isAr
        ? '✅ شكراً لك! تم استلام رسالتك وسنتواصل معك قريباً.'
        : '✅ Thank you! Your message has been received.');
      form.reset();
    });
  }
});