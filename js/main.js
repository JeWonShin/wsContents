document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('hidden');
    });
  }
});
