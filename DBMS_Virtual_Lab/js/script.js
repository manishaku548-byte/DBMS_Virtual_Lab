/* ============================================================
   DBMS Virtual Laboratory - Shared Navigation Script
   Handles the hamburger menu / modal navigation on every page
   ============================================================ */

const menuToggle = document.getElementById('menuToggle');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

if (menuToggle && modalOverlay) {
  menuToggle.onclick = () => {
    modalOverlay.style.display = 'flex';
  };
}

if (closeModal && modalOverlay) {
  closeModal.onclick = () => {
    modalOverlay.style.display = 'none';
  };
}

if (modalOverlay) {
  window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalOverlay.style.display = 'none';
    }
  });
}

console.log('DBMS Virtual Lab Loaded Successfully');
