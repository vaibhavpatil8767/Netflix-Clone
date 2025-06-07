document.querySelectorAll('.poster-container img').forEach((img, index) => {
  img.addEventListener('click', () => {
    alert(You clicked on Movie ${index + 1});
  });
});

document.querySelector('.btn-play').addEventListener('click', () => {
  alert("Playing the featured movie...");
});

document.querySelector('.btn-info').addEventListener('click', () => {
  alert("Showing more info...");
});