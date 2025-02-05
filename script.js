function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
};