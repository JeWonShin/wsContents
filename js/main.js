document.addEventListener('DOMContentLoaded', function () {
  // 모바일 햄버거 메뉴
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('hidden');
    });
  }

  // 플로팅 가맹 문의 버튼 (가맹 문의 페이지에서는 숨김)
  if (!window.location.pathname.endsWith('contact.html')) {
    const fab = document.createElement('a');
    fab.href = 'contact.html';
    fab.innerHTML = '가맹 문의';
    fab.style.cssText = [
      'position:fixed', 'bottom:24px', 'right:20px', 'z-index:999',
      'background:#8B2331', 'color:#fff', 'font-weight:700', 'font-size:13px',
      'padding:12px 18px', 'border-radius:50px',
      'box-shadow:0 4px 16px rgba(139,35,49,0.45)',
      'text-decoration:none', 'display:flex', 'align-items:center', 'gap:6px',
      'transition:background 0.2s, transform 0.15s',
    ].join(';');
    fab.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>가맹 문의';
    fab.onmouseover = () => { fab.style.background = '#6b1a24'; fab.style.transform = 'scale(1.04)'; };
    fab.onmouseout  = () => { fab.style.background = '#8B2331'; fab.style.transform = 'scale(1)'; };
    document.body.appendChild(fab);
  }
});
