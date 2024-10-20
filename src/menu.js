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
      {
        name: 'Shrimp',
        description:
          'Straight out of the fryer shrimp, with lemmon pepper seasoning.',
      },
      {
        name: 'Arroz Con Pollo',
        description:
          'Your choice of meat (Chicken or Steak) drenched in queso cheese with peas and rice.',
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
      {
        name: 'Coca Cola',
        description:
          'Almost as perfect as a mcdonalds coke, but still perfectly fresh.',
      },
      {
        name: 'Mtn Dew',
        description:
          'The best green soda in the town, fresh out the freezer with a slushy like texture.',
      },
      {
        name: 'Your Alcohol Choice',
        description:
          'We carry almost all major alcoholic/beer brands. Ask us if we have your favorite and we will provide for you!',
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
      {
        name: 'Chocolate Cake',
        description:
          'A creamy, but soft, delicious chocolatey cake with chocolate frosting.',
      },
      {
        name: 'Banana Bread',
        description:
          'Non-crunchy banana bread. Soft all around with non-cruncy banana chunks inside. Tastes just like your middle schools banana bread.',
      },
      {
        name: 'Cookies',
        description:
          'A batch of 4 (or more of your choice) fresh chocolate chip cookies.',
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
