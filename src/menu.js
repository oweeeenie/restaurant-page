function clearContent() {
  const content = document.querySelector('#content'); // Make sure to select content here
  content.innerHTML = ''; // Clears only the content area
}

export function loadMenuTab() {
  clearContent();
  const menuContent = document.createElement('div');
  menuContent.className = 'menu-container';
  content.appendChild(menuContent);

  const clippedEntree = document.createElement('div');
  clippedEntree.className = 'clipped-entree';
  clippedEntree.textContent = 'ENTREES';
  menuContent.appendChild(clippedEntree);

  const clippedDrinks = document.createElement('div');
  clippedDrinks.className = 'clipped-drinks';
  clippedDrinks.textContent = 'DRINKS';
  menuContent.appendChild(clippedDrinks);

  const clippedDeserts = document.createElement('div');
  clippedDeserts.className = 'clipped-deserts';
  clippedDeserts.textContent = 'DESERTS';
  menuContent.appendChild(clippedDeserts);

  const clippedContainerDrinks = document.createElement('div');
  clippedContainerDrinks.className = 'clipped-container-drinks';
  menuContent.appendChild(clippedContainerDrinks);

  const clippedContainerEntrees = document.createElement('div');
  clippedContainerEntrees.className = 'clipped-container-entrees';
  menuContent.appendChild(clippedContainerEntrees);

  const clippedContainerDeserts = document.createElement('div');
  clippedContainerDeserts.className = 'clipped-container-deserts';
  menuContent.appendChild(clippedContainerDeserts);
}
