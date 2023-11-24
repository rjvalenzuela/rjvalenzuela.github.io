// Create a CSS class for the 3D transition
const transitionClass = `
  .my-element {
    transition: transform 1s;
    transform-style: preserve-3d;
  }
`;

// Add the CSS class to the element you want to apply the 3D transition to
const element = document.querySelector('.my-element');
element.classList.add('my-element');
