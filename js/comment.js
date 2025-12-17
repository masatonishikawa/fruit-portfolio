const stars = document.querySelectorAll('.rating-level');
const labels = document.querySelectorAll('.rating label');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = Number(star.value);

    labels.forEach((label, index) => {
      if (index < value) {
        label.textContent = '★';
      } else {
        label.textContent = '☆';
      }
    });
  });
});