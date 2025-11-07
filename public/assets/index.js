document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('overlay');

  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      overlay.classList.toggle('show');
    });
  }
});
