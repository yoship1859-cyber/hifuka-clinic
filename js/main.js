// スマホ用ハンバーガーメニューの開閉
const header = document.querySelector('.wrapper header');
const menuToggle = document.querySelector('.menu-toggle');

function setMenuOpen(open) {
  header.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(!header.classList.contains('is-open'));
});

// ページ内リンクを押したら閉じる
document.querySelectorAll('.global-menu a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

// Escキーで閉じる
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenuOpen(false);
});
