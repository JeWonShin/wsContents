document.addEventListener('DOMContentLoaded', function () {
  // 모바일 햄버거 메뉴
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('hidden');
    });
  }

  // 모바일 하단 퀵바 (가맹 문의 페이지에서는 숨김)
  if (!window.location.pathname.endsWith('contact.html')) {
    const style = document.createElement('style');
    style.textContent = '#qs-bar{display:none}@media(max-width:767px){#qs-bar{display:flex}body{padding-bottom:56px}}';
    document.head.appendChild(style);

    const bar = document.createElement('div');
    bar.id = 'qs-bar';
    bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:999;height:56px;box-shadow:0 -2px 10px rgba(0,0,0,0.18)';

    const callBtn = document.createElement('a');
    callBtn.href = 'tel:031-665-0607';
    callBtn.style.cssText = 'flex:1;display:flex;align-items:center;justify-content:center;gap:7px;background:#1f2937;color:#fff;font-weight:700;font-size:14px;text-decoration:none;letter-spacing:-0.2px';
    callBtn.innerHTML = '<svg width="17" height="17" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>전화 상담';

    const inquiryBtn = document.createElement('a');
    inquiryBtn.href = 'contact.html';
    inquiryBtn.style.cssText = 'flex:1;display:flex;align-items:center;justify-content:center;gap:7px;background:#8B2331;color:#fff;font-weight:700;font-size:14px;text-decoration:none;letter-spacing:-0.2px';
    inquiryBtn.innerHTML = '<svg width="17" height="17" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>가맹 문의';

    bar.appendChild(callBtn);
    bar.appendChild(inquiryBtn);
    document.body.appendChild(bar);
  }
});
