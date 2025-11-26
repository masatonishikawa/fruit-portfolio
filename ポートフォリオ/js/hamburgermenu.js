'use strict';

const menuBtn = document.getElementById('menu-btn');
const menuPanel = document.getElementById('menu-panel');


function openMenu() {
  menuPanel.style.display = 'block';
  document.addEventListener('click', outsideClickHandler);
}

function closeMenu() {
  menuPanel.style.display = 'none';
  document.removeEventListener('click', outsideClickHandler);
}

function outsideClickHandler(e) {
  if (menuPanel.contains(e.target) || menuBtn.contains(e.target)) {
    return;
  }
  closeMenu();
}

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  if (menuPanel.style.display === 'block') {
    closeMenu();
  } else {
    openMenu();
  }
});