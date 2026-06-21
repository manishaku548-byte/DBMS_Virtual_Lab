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

window.onclick = (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
};
