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

  const foodItems = {
    entrees: [
      {
        name: 'Steak',
        description: 'Juicy and tender, cooked just how you need it to be.',
      },
      {
        name: 'Chicken',
        description:
          'Fresh breasts, thighs, or legs cooked to a delicious amount of crisp.',
      },
      {
        name: 'Pasta',
        description: 'Freshly made pasta in a rich marinara sauce.',
      },
    ],
    drinks: [
      {
        name: 'Red Wine',
        description: 'Rich flavor, full bodied wine.',
      },
      {
        name: 'Water',
        description: 'Our purified water only as fresh as they come.',
      },
    ],
    deserts: [
      {
        name: 'Cheesecake',
        description: 'Rich and creamy cheesecake.',
      },
      {
        name: 'Brownies',
        description: 'Baked straight out of the oven and soft.',
      },
    ],
  };
  appendFoodItems(clippedContainerEntrees, foodItems.entrees);
  appendFoodItems(clippedContainerDrinks, foodItems.drinks);
  appendFoodItems(clippedContainerDeserts, foodItems.deserts);
}

function appendFoodItems(container, items) {
  items.forEach((item) => {
    const itemHeader = document.createElement('h2');
    itemHeader.textContent = item.name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;

    container.appendChild(itemHeader);
    container.appendChild(itemDescription);
  });
}
