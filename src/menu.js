function clearContent() {
  const content = document.querySelector('#content'); // Make sure to select content here
  content.innerHTML = ''; // Clears only the content area
}

export function loadMenuTab() {
  clearContent();
  const menuContent = document.createElement('div');
  menuContent.textContent = 'This is just a placeholder';
  content.appendChild(menuContent);
}
//remove some of this for sure when done w/ about.
