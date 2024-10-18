function clearContent() {
  const content = document.querySelector('#content'); // Make sure to select content here
  content.innerHTML = ''; // Clears only the content area
}

export function loadAboutTab() {
  clearContent();
  const aboutContent = document.createElement('div');
  aboutContent.className = 'about-container';
  content.appendChild(aboutContent);

  const aboutTitle = document.createElement('h1');
  aboutTitle.className = 'about-title';
  aboutTitle.textContent = 'About Us';
  aboutContent.appendChild(aboutTitle);
}
