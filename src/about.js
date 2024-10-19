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

  const aboutDescription = document.createElement('p');
  aboutDescription.className = 'about-description';
  aboutDescription.textContent =
    "Welcome to Owen's Scrumptious Bar! A pleasant, yet so delicious restaurant for family's, couples and even the elderly! We have TONS of food choices for anyone (including picky eaters) and our amazing team here will be more than happy to answer any questions and even help you decide what to get!";
  aboutContent.appendChild(aboutDescription);

  const aboutNumberOneTitle = document.createElement('h2');
  aboutNumberOneTitle.className = 'about-number-one-title';
  aboutNumberOneTitle.textContent = 'Store Director';
  aboutContent.appendChild(aboutNumberOneTitle);

  const aboutNumberOne = document.createElement('p');
  aboutNumberOne.className = 'about-number-one';
  aboutNumberOne.textContent = '696-969-6969';
  aboutContent.appendChild(aboutNumberOne);

  const aboutNumberTwoTitle = document.createElement('h2');
  aboutNumberTwoTitle.className = 'about-number-two-title';
  aboutNumberTwoTitle.textContent = 'Head Chef';
  aboutContent.appendChild(aboutNumberTwoTitle);

  const aboutNumberTwo = document.createElement('p');
  aboutNumberTwo.className = 'about-number-two';
  aboutNumberTwo.textContent = '420-420-6969';
  aboutContent.appendChild(aboutNumberTwo);

  const aboutNumberThreeTitle = document.createElement('h2');
  aboutNumberThreeTitle.className = 'about-number-three-title';
  aboutNumberThreeTitle.textContent = 'General Customer Service';
  aboutContent.appendChild(aboutNumberThreeTitle);

  const aboutNumberThree = document.createElement('p');
  aboutNumberThree.className = 'about-number-three';
  aboutNumberThree.textContent = '123-456-6969';
  aboutContent.appendChild(aboutNumberThree);
}
