const box = document.querySelector('.box');

body.addEventListener('mouseover', () => {
  body.style.transform = 'rotateX(180deg) rotateY(180deg) rotateZ(180deg)';
});

body.addEventListener('mouseout', () => {
  body.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
});