export function loadAboutTab() {
  clearContent();
  const aboutContent = document.createElement('div');
  aboutContent.innerHTML = '<h2>About Us</h2>';
  content.appendChild(aboutContent);
}
