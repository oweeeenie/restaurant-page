/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAboutTab: () => (/* binding */ loadAboutTab)
/* harmony export */ });
function clearContent() {
  var content = document.querySelector('#content'); // Make sure to select content here
  content.innerHTML = ''; // Clears only the content area
}
function loadAboutTab() {
  clearContent();
  var aboutContent = document.createElement('div');
  aboutContent.className = 'about-container';
  content.appendChild(aboutContent);
  var aboutTitle = document.createElement('h1');
  aboutTitle.className = 'about-title';
  aboutTitle.textContent = 'About Us';
  aboutContent.appendChild(aboutTitle);
  var aboutDescription = document.createElement('p');
  aboutDescription.className = 'about-description';
  aboutDescription.textContent = "Welcome to Owen's Scrumptious Bar! A pleasant, yet so delicious restaurant for family's, couples and even the elderly! We have TONS of food choices for anyone (including picky eaters) and our amazing team here will be more than happy to answer any questions and even help you decide what to get!";
  aboutContent.appendChild(aboutDescription);
  var aboutNumberOneTitle = document.createElement('h2');
  aboutNumberOneTitle.className = 'about-number-one-title';
  aboutNumberOneTitle.textContent = 'Store Director';
  aboutContent.appendChild(aboutNumberOneTitle);
  var aboutNumberOne = document.createElement('p');
  aboutNumberOne.className = 'about-number-one';
  aboutNumberOne.textContent = '696-969-6969';
  aboutContent.appendChild(aboutNumberOne);
  var aboutNumberTwoTitle = document.createElement('h2');
  aboutNumberTwoTitle.className = 'about-number-two-title';
  aboutNumberTwoTitle.textContent = 'Head Chef';
  aboutContent.appendChild(aboutNumberTwoTitle);
  var aboutNumberTwo = document.createElement('p');
  aboutNumberTwo.className = 'about-number-two';
  aboutNumberTwo.textContent = '420-420-6969';
  aboutContent.appendChild(aboutNumberTwo);
  var aboutNumberThreeTitle = document.createElement('h2');
  aboutNumberThreeTitle.className = 'about-number-three-title';
  aboutNumberThreeTitle.textContent = 'General Customer Service';
  aboutContent.appendChild(aboutNumberThreeTitle);
  var aboutNumberThree = document.createElement('p');
  aboutNumberThree.className = 'about-number-three';
  aboutNumberThree.textContent = '123-456-6969';
  aboutContent.appendChild(aboutNumberThree);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenuTab: () => (/* binding */ loadMenuTab)
/* harmony export */ });
function clearContent() {
  var content = document.querySelector('#content'); // Make sure to select content here
  content.innerHTML = ''; // Clears only the content area
}
function loadMenuTab() {
  clearContent();
  var menuContent = document.createElement('div');
  menuContent.className = 'menu-container';
  content.appendChild(menuContent);
  var clippedEntree = document.createElement('div');
  clippedEntree.className = 'clipped-entree';
  clippedEntree.textContent = 'ENTREES';
  menuContent.appendChild(clippedEntree);
  var clippedDrinks = document.createElement('div');
  clippedDrinks.className = 'clipped-drinks';
  clippedDrinks.textContent = 'DRINKS';
  menuContent.appendChild(clippedDrinks);
  var clippedDeserts = document.createElement('div');
  clippedDeserts.className = 'clipped-deserts';
  clippedDeserts.textContent = 'DESERTS';
  menuContent.appendChild(clippedDeserts);
  var clippedContainerDrinks = document.createElement('div');
  clippedContainerDrinks.className = 'clipped-container-drinks';
  menuContent.appendChild(clippedContainerDrinks);
  var clippedContainerEntrees = document.createElement('div');
  clippedContainerEntrees.className = 'clipped-container-entrees';
  menuContent.appendChild(clippedContainerEntrees);
  var clippedContainerDeserts = document.createElement('div');
  clippedContainerDeserts.className = 'clipped-container-deserts';
  menuContent.appendChild(clippedContainerDeserts);
  var foodItems = {
    entrees: [{
      name: 'Steak',
      description: 'Juicy and tender, cooked just how you need it to be.'
    }, {
      name: 'Chicken',
      description: 'Fresh breasts, thighs, or legs cooked to a delicious amount of crisp.'
    }, {
      name: 'Pasta',
      description: 'Freshly made pasta in a rich marinara sauce.'
    }, {
      name: 'Shrimp',
      description: 'Straight out of the fryer shrimp, with lemmon pepper seasoning.'
    }, {
      name: 'Arroz Con Pollo',
      description: 'Your choice of meat (Chicken or Steak) drenched in queso cheese with peas and rice.'
    }],
    drinks: [{
      name: 'Red Wine',
      description: 'Rich flavor, full bodied wine.'
    }, {
      name: 'Water',
      description: 'Our purified water only as fresh as they come.'
    }, {
      name: 'Coca Cola',
      description: 'Almost as perfect as a mcdonalds coke, but still perfectly fresh.'
    }, {
      name: 'Mtn Dew',
      description: 'The best green soda in the town, fresh out the freezer with a slushy like texture.'
    }, {
      name: 'Your Alcohol Choice',
      description: 'We carry almost all major alcoholic/beer brands. Ask us if we have your favorite and we will provide for you!'
    }],
    deserts: [{
      name: 'Cheesecake',
      description: 'Rich and creamy cheesecake.'
    }, {
      name: 'Brownies',
      description: 'Baked straight out of the oven and soft.'
    }, {
      name: 'Chocolate Cake',
      description: 'A creamy, but soft, delicious chocolatey cake with chocolate frosting.'
    }, {
      name: 'Banana Bread',
      description: 'Non-crunchy banana bread. Soft all around with non-cruncy banana chunks inside. Tastes just like your middle schools banana bread.'
    }, {
      name: 'Cookies',
      description: 'A batch of 4 (or more of your choice) fresh chocolate chip cookies.'
    }]
  };
  appendFoodItems(clippedContainerEntrees, foodItems.entrees);
  appendFoodItems(clippedContainerDrinks, foodItems.drinks);
  appendFoodItems(clippedContainerDeserts, foodItems.deserts);
}
function appendFoodItems(container, items) {
  items.forEach(function (item) {
    var itemHeader = document.createElement('h2');
    itemHeader.textContent = item.name;
    var itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;
    container.appendChild(itemHeader);
    container.appendChild(itemDescription);
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

:root {
  --primary-color: #8f593a;
  --secondary-color: #eea47f;
  --third-color: white;
  --primary-font-size: 1.5rem;
}

button {
  cursor: pointer;
}

button:hover {
  color: var(--primary-color);
  border-bottom: 2px solid var(--secondary-color);
}

body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: -10;
}

footer {
  position: fixed;
  bottom: 0;
  background-color: var(--primary-color);
  text-align: center;
  width: 100%;
  color: var(--secondary-color);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
}

.nav-container {
  display: flex;
  gap: 10rem;
  padding-right: 10rem;
}

.tabs {
  border: none;
  background-color: transparent;
  font-size: var(--primary-font-size);
  color: var(--primary-color);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}

.title {
  color: var(--secondary-color);
  padding-left: 10rem;
  font-weight: bold;
  font-family: cursive;
  font-style: italic;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
}

.quote-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 25rem;
  margin-top: 7rem;
}

.quote {
  color: var(--primary-color);
  font-size: 6rem;
  width: 40rem;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-style: italic;
}

.quote-button {
  color: var(--primary-color);
  border: 2px solid var(--secondary-color);
  background-color: transparent;
  padding: 0.8rem;
  width: 13rem;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-style: italic;
  font-family: cursive;
  position: relative;
  right: 13.5rem;
}

/* ABOUT US TAB CSS --------------------------------------------- */
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25rem;
  margin-top: 7rem;
}

.about-title {
  color: var(--primary-color);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-style: italic;
  font-size: 5rem;
  font-family: cursive;
}

.about-description {
  color: var(--primary-color);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-family: cursive;
  border: 2px solid var(--secondary-color);
  font-size: 1.5rem;
  padding: 1rem;
  margin-top: 1.5rem;
  width: 60rem;
  min-height: 10rem;
}

.about-number-one-title {
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-style: italic;
  font-size: 3rem;
  font-family: cursive;
  color: var(--primary-color);
  margin-top: 1.5rem;
}

.about-number-one {
  color: var(--primary-color);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-family: cursive;
  border: 2px solid var(--secondary-color);
  font-size: 3rem;
  padding: 1rem;
  margin-top: 1.5rem;
  min-height: 4rem;
}

.about-number-two-title {
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-style: italic;
  font-size: 3rem;
  font-family: cursive;
  color: var(--primary-color);
  margin-top: 1.5rem;
}

.about-number-two {
  color: var(--primary-color);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-family: cursive;
  border: 2px solid var(--secondary-color);
  font-size: 3rem;
  padding: 1rem;
  margin-top: 1.5rem;
  min-height: 4rem;
}

.about-number-three-title {
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-style: italic;
  font-size: 3rem;
  font-family: cursive;
  color: var(--primary-color);
  margin-top: 1.5rem;
}

.about-number-three {
  color: var(--primary-color);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  font-family: cursive;
  border: 2px solid var(--secondary-color);
  font-size: 3rem;
  padding: 1rem;
  margin-top: 1.5rem;
  min-height: 4rem;
}

/* START OF MENU TAB */
.menu-container {
  width: 90rem;
  margin: 5rem;
  height: 64rem;
  display: flex;
  justify-content: space-around;
}

.clipped-container-drinks {
  border: 2px solid var(--primary-color);
  width: 20rem;
  height: 60rem;
  margin: 3rem;
  position: absolute;
  top: 14rem;
  border-top: transparent;
  padding: 1rem;
}

.clipped-container-entrees {
  border: 2px solid var(--primary-color);
  margin: 3rem;
  width: 20rem;
  height: 60rem;
  position: absolute;
  top: 14rem;
  left: 7rem;
  border-top: transparent;
  padding: 1rem;
}

.clipped-container-deserts {
  border: 2px solid var(--primary-color);
  width: 20rem;
  height: 60rem;
  margin: 3rem;
  position: absolute;
  top: 14rem;
  right: 67rem;
  padding: 1rem;
}

.clipped-deserts,
.clipped-entree,
.clipped-drinks {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-size: 1.5rem;
  font-style: italic;
  font-family: cursive;
  width: 20rem;
  margin: 3rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    40px 0,
    calc(100% - 40px) 0,
    100% 40px,
    100% 100%,
    calc(100% - 40px) 100%,
    40px 100%,
    0 100%,
    0 40px
  );
}

.clipped-container-entrees > h2 {
  color: var(--secondary-color);
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  font-family: cursive;
}

.clipped-container-entrees > p {
  color: var(--primary-color);
  font-family: cursive;
  font-size: 1.2rem;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}

.clipped-container-drinks > h2 {
  color: var(--secondary-color);
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  font-family: cursive;
}

.clipped-container-drinks > p {
  color: var(--primary-color);
  font-family: cursive;
  font-size: 1.2rem;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}

.clipped-container-deserts > h2 {
  color: var(--secondary-color);
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  font-family: cursive;
}

.clipped-container-deserts > p {
  color: var(--primary-color);
  font-family: cursive;
  font-size: 1.2rem;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n:root {\n  --primary-color: #8f593a;\n  --secondary-color: #eea47f;\n  --third-color: white;\n  --primary-font-size: 1.5rem;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:hover {\n  color: var(--primary-color);\n  border-bottom: 2px solid var(--secondary-color);\n}\n\nbody {\n  background-image: url(./images/background.jpg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  z-index: -10;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  background-color: var(--primary-color);\n  text-align: center;\n  width: 100%;\n  color: var(--secondary-color);\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n}\n\n.nav-container {\n  display: flex;\n  gap: 10rem;\n  padding-right: 10rem;\n}\n\n.tabs {\n  border: none;\n  background-color: transparent;\n  font-size: var(--primary-font-size);\n  color: var(--primary-color);\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n}\n\n.title {\n  color: var(--secondary-color);\n  padding-left: 10rem;\n  font-weight: bold;\n  font-family: cursive;\n  font-style: italic;\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);\n}\n\n.quote-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-right: 25rem;\n  margin-top: 7rem;\n}\n\n.quote {\n  color: var(--primary-color);\n  font-size: 6rem;\n  width: 40rem;\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n  font-style: italic;\n}\n\n.quote-button {\n  color: var(--primary-color);\n  border: 2px solid var(--secondary-color);\n  background-color: transparent;\n  padding: 0.8rem;\n  width: 13rem;\n  margin-top: 2.5rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-style: italic;\n  font-family: cursive;\n  position: relative;\n  right: 13.5rem;\n}\n\n/* ABOUT US TAB CSS --------------------------------------------- */\n.about-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 25rem;\n  margin-top: 7rem;\n}\n\n.about-title {\n  color: var(--primary-color);\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n  font-style: italic;\n  font-size: 5rem;\n  font-family: cursive;\n}\n\n.about-description {\n  color: var(--primary-color);\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-family: cursive;\n  border: 2px solid var(--secondary-color);\n  font-size: 1.5rem;\n  padding: 1rem;\n  margin-top: 1.5rem;\n  width: 60rem;\n  min-height: 10rem;\n}\n\n.about-number-one-title {\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n  font-style: italic;\n  font-size: 3rem;\n  font-family: cursive;\n  color: var(--primary-color);\n  margin-top: 1.5rem;\n}\n\n.about-number-one {\n  color: var(--primary-color);\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-family: cursive;\n  border: 2px solid var(--secondary-color);\n  font-size: 3rem;\n  padding: 1rem;\n  margin-top: 1.5rem;\n  min-height: 4rem;\n}\n\n.about-number-two-title {\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n  font-style: italic;\n  font-size: 3rem;\n  font-family: cursive;\n  color: var(--primary-color);\n  margin-top: 1.5rem;\n}\n\n.about-number-two {\n  color: var(--primary-color);\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-family: cursive;\n  border: 2px solid var(--secondary-color);\n  font-size: 3rem;\n  padding: 1rem;\n  margin-top: 1.5rem;\n  min-height: 4rem;\n}\n\n.about-number-three-title {\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n  font-style: italic;\n  font-size: 3rem;\n  font-family: cursive;\n  color: var(--primary-color);\n  margin-top: 1.5rem;\n}\n\n.about-number-three {\n  color: var(--primary-color);\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  font-family: cursive;\n  border: 2px solid var(--secondary-color);\n  font-size: 3rem;\n  padding: 1rem;\n  margin-top: 1.5rem;\n  min-height: 4rem;\n}\n\n/* START OF MENU TAB */\n.menu-container {\n  width: 90rem;\n  margin: 5rem;\n  height: 64rem;\n  display: flex;\n  justify-content: space-around;\n}\n\n.clipped-container-drinks {\n  border: 2px solid var(--primary-color);\n  width: 20rem;\n  height: 60rem;\n  margin: 3rem;\n  position: absolute;\n  top: 14rem;\n  border-top: transparent;\n  padding: 1rem;\n}\n\n.clipped-container-entrees {\n  border: 2px solid var(--primary-color);\n  margin: 3rem;\n  width: 20rem;\n  height: 60rem;\n  position: absolute;\n  top: 14rem;\n  left: 7rem;\n  border-top: transparent;\n  padding: 1rem;\n}\n\n.clipped-container-deserts {\n  border: 2px solid var(--primary-color);\n  width: 20rem;\n  height: 60rem;\n  margin: 3rem;\n  position: absolute;\n  top: 14rem;\n  right: 67rem;\n  padding: 1rem;\n}\n\n.clipped-deserts,\n.clipped-entree,\n.clipped-drinks {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  font-size: 1.5rem;\n  font-style: italic;\n  font-family: cursive;\n  width: 20rem;\n  margin: 3rem;\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  clip-path: polygon(\n    40px 0,\n    calc(100% - 40px) 0,\n    100% 40px,\n    100% 100%,\n    calc(100% - 40px) 100%,\n    40px 100%,\n    0 100%,\n    0 40px\n  );\n}\n\n.clipped-container-entrees > h2 {\n  color: var(--secondary-color);\n  font-size: 3rem;\n  font-weight: bold;\n  font-style: italic;\n  font-family: cursive;\n}\n\n.clipped-container-entrees > p {\n  color: var(--primary-color);\n  font-family: cursive;\n  font-size: 1.2rem;\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  margin-bottom: 1rem;\n}\n\n.clipped-container-drinks > h2 {\n  color: var(--secondary-color);\n  font-size: 3rem;\n  font-weight: bold;\n  font-style: italic;\n  font-family: cursive;\n}\n\n.clipped-container-drinks > p {\n  color: var(--primary-color);\n  font-family: cursive;\n  font-size: 1.2rem;\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  margin-bottom: 1rem;\n}\n\n.clipped-container-deserts > h2 {\n  color: var(--secondary-color);\n  font-size: 3rem;\n  font-weight: bold;\n  font-style: italic;\n  font-family: cursive;\n}\n\n.clipped-container-deserts > p {\n  color: var(--primary-color);\n  font-family: cursive;\n  font-size: 1.2rem;\n  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n  margin-bottom: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c08fd8e0c3fcc57801e9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



var nav = document.querySelector('.nav'); // holds nav buttons & title
var navContainer = document.createElement('div'); // only holds nav buttons
navContainer.className = 'nav-container';
var tabs = document.querySelectorAll('.tabs'); // nav buttons

var title = document.createElement('h1');
title.className = 'title';
title.textContent = "Owen's Scrumptious Bar";
nav.appendChild(title);
navContainer.appendChild(tabs[0]);
navContainer.appendChild(tabs[1]);
navContainer.appendChild(tabs[2]);
nav.appendChild(navContainer);
function loadHomeTab() {
  var content = document.querySelector('#content'); // holds EVERYTHING
  content.innerHTML = '';
  var quoteContainer = document.createElement('div');
  quoteContainer.className = 'quote-container';
  content.appendChild(quoteContainer);
  var quote = document.createElement('div');
  quote.className = 'quote';
  quote.textContent = 'A Premium And Rewarding Restaurant';
  quoteContainer.appendChild(quote);
  var quoteButton = document.createElement('button');
  quoteButton.className = 'quote-button';
  quoteButton.textContent = 'Book A Table';
  quoteContainer.appendChild(quoteButton);
  var footer = document.createElement('footer');
  footer.textContent = '© 2024 Owen’s Scrumptious Bar';
  document.body.appendChild(footer);
}

// START OF OTHER TABS ------------------------------------

function clearContent() {
  content.innerHTML = '';
}
var aboutButton = document.querySelector('.tabs:nth-child(2)');
aboutButton.addEventListener('click', function () {
  clearContent();
  (0,_about__WEBPACK_IMPORTED_MODULE_1__.loadAboutTab)();
});
var menuButton = document.querySelector('.tabs:nth-child(3)');
menuButton.addEventListener('click', function () {
  clearContent();
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenuTab)();
});
var homeButton = document.querySelector('.tabs:nth-child(1)');
homeButton.addEventListener('click', function () {
  clearContent();
  loadHomeTab();
});
document.addEventListener('DOMContentLoaded', function () {
  loadHomeTab();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksV0FBVyxPQUFPLE9BQU8sWUFBWSxPQUFPLGNBQWMsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxX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b3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpOyAvLyBNYWtlIHN1cmUgdG8gc2VsZWN0IGNvbnRlbnQgaGVyZVxuICBjb250ZW50LmlubmVySFRNTCA9ICcnOyAvLyBDbGVhcnMgb25seSB0aGUgY29udGVudCBhcmVhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQWJvdXRUYWIoKSB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRDb250ZW50LmNsYXNzTmFtZSA9ICdhYm91dC1jb250YWluZXInO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29udGVudCk7XG5cbiAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGFib3V0VGl0bGUuY2xhc3NOYW1lID0gJ2Fib3V0LXRpdGxlJztcbiAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcblxuICBjb25zdCBhYm91dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhYm91dERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdhYm91dC1kZXNjcmlwdGlvbic7XG4gIGFib3V0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiV2VsY29tZSB0byBPd2VuJ3MgU2NydW1wdGlvdXMgQmFyISBBIHBsZWFzYW50LCB5ZXQgc28gZGVsaWNpb3VzIHJlc3RhdXJhbnQgZm9yIGZhbWlseSdzLCBjb3VwbGVzIGFuZCBldmVuIHRoZSBlbGRlcmx5ISBXZSBoYXZlIFRPTlMgb2YgZm9vZCBjaG9pY2VzIGZvciBhbnlvbmUgKGluY2x1ZGluZyBwaWNreSBlYXRlcnMpIGFuZCBvdXIgYW1hemluZyB0ZWFtIGhlcmUgd2lsbCBiZSBtb3JlIHRoYW4gaGFwcHkgdG8gYW5zd2VyIGFueSBxdWVzdGlvbnMgYW5kIGV2ZW4gaGVscCB5b3UgZGVjaWRlIHdoYXQgdG8gZ2V0IVwiO1xuICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXREZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgYWJvdXROdW1iZXJPbmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFib3V0TnVtYmVyT25lVGl0bGUuY2xhc3NOYW1lID0gJ2Fib3V0LW51bWJlci1vbmUtdGl0bGUnO1xuICBhYm91dE51bWJlck9uZVRpdGxlLnRleHRDb250ZW50ID0gJ1N0b3JlIERpcmVjdG9yJztcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0TnVtYmVyT25lVGl0bGUpO1xuXG4gIGNvbnN0IGFib3V0TnVtYmVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhYm91dE51bWJlck9uZS5jbGFzc05hbWUgPSAnYWJvdXQtbnVtYmVyLW9uZSc7XG4gIGFib3V0TnVtYmVyT25lLnRleHRDb250ZW50ID0gJzY5Ni05NjktNjk2OSc7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dE51bWJlck9uZSk7XG5cbiAgY29uc3QgYWJvdXROdW1iZXJUd29UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFib3V0TnVtYmVyVHdvVGl0bGUuY2xhc3NOYW1lID0gJ2Fib3V0LW51bWJlci10d28tdGl0bGUnO1xuICBhYm91dE51bWJlclR3b1RpdGxlLnRleHRDb250ZW50ID0gJ0hlYWQgQ2hlZic7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dE51bWJlclR3b1RpdGxlKTtcblxuICBjb25zdCBhYm91dE51bWJlclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXROdW1iZXJUd28uY2xhc3NOYW1lID0gJ2Fib3V0LW51bWJlci10d28nO1xuICBhYm91dE51bWJlclR3by50ZXh0Q29udGVudCA9ICc0MjAtNDIwLTY5NjknO1xuICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXROdW1iZXJUd28pO1xuXG4gIGNvbnN0IGFib3V0TnVtYmVyVGhyZWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFib3V0TnVtYmVyVGhyZWVUaXRsZS5jbGFzc05hbWUgPSAnYWJvdXQtbnVtYmVyLXRocmVlLXRpdGxlJztcbiAgYWJvdXROdW1iZXJUaHJlZVRpdGxlLnRleHRDb250ZW50ID0gJ0dlbmVyYWwgQ3VzdG9tZXIgU2VydmljZSc7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dE51bWJlclRocmVlVGl0bGUpO1xuXG4gIGNvbnN0IGFib3V0TnVtYmVyVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFib3V0TnVtYmVyVGhyZWUuY2xhc3NOYW1lID0gJ2Fib3V0LW51bWJlci10aHJlZSc7XG4gIGFib3V0TnVtYmVyVGhyZWUudGV4dENvbnRlbnQgPSAnMTIzLTQ1Ni02OTY5JztcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0TnVtYmVyVGhyZWUpO1xufVxuIiwiZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTsgLy8gTWFrZSBzdXJlIHRvIHNlbGVjdCBjb250ZW50IGhlcmVcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXJzIG9ubHkgdGhlIGNvbnRlbnQgYXJlYVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lbnVUYWIoKSB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGVudC5jbGFzc05hbWUgPSAnbWVudS1jb250YWluZXInO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcblxuICBjb25zdCBjbGlwcGVkRW50cmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNsaXBwZWRFbnRyZWUuY2xhc3NOYW1lID0gJ2NsaXBwZWQtZW50cmVlJztcbiAgY2xpcHBlZEVudHJlZS50ZXh0Q29udGVudCA9ICdFTlRSRUVTJztcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoY2xpcHBlZEVudHJlZSk7XG5cbiAgY29uc3QgY2xpcHBlZERyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjbGlwcGVkRHJpbmtzLmNsYXNzTmFtZSA9ICdjbGlwcGVkLWRyaW5rcyc7XG4gIGNsaXBwZWREcmlua3MudGV4dENvbnRlbnQgPSAnRFJJTktTJztcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoY2xpcHBlZERyaW5rcyk7XG5cbiAgY29uc3QgY2xpcHBlZERlc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2xpcHBlZERlc2VydHMuY2xhc3NOYW1lID0gJ2NsaXBwZWQtZGVzZXJ0cyc7XG4gIGNsaXBwZWREZXNlcnRzLnRleHRDb250ZW50ID0gJ0RFU0VSVFMnO1xuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChjbGlwcGVkRGVzZXJ0cyk7XG5cbiAgY29uc3QgY2xpcHBlZENvbnRhaW5lckRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjbGlwcGVkQ29udGFpbmVyRHJpbmtzLmNsYXNzTmFtZSA9ICdjbGlwcGVkLWNvbnRhaW5lci1kcmlua3MnO1xuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChjbGlwcGVkQ29udGFpbmVyRHJpbmtzKTtcblxuICBjb25zdCBjbGlwcGVkQ29udGFpbmVyRW50cmVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjbGlwcGVkQ29udGFpbmVyRW50cmVlcy5jbGFzc05hbWUgPSAnY2xpcHBlZC1jb250YWluZXItZW50cmVlcyc7XG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNsaXBwZWRDb250YWluZXJFbnRyZWVzKTtcblxuICBjb25zdCBjbGlwcGVkQ29udGFpbmVyRGVzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjbGlwcGVkQ29udGFpbmVyRGVzZXJ0cy5jbGFzc05hbWUgPSAnY2xpcHBlZC1jb250YWluZXItZGVzZXJ0cyc7XG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNsaXBwZWRDb250YWluZXJEZXNlcnRzKTtcblxuICBjb25zdCBmb29kSXRlbXMgPSB7XG4gICAgZW50cmVlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnU3RlYWsnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0p1aWN5IGFuZCB0ZW5kZXIsIGNvb2tlZCBqdXN0IGhvdyB5b3UgbmVlZCBpdCB0byBiZS4nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NoaWNrZW4nLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnRnJlc2ggYnJlYXN0cywgdGhpZ2hzLCBvciBsZWdzIGNvb2tlZCB0byBhIGRlbGljaW91cyBhbW91bnQgb2YgY3Jpc3AuJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQYXN0YScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRnJlc2hseSBtYWRlIHBhc3RhIGluIGEgcmljaCBtYXJpbmFyYSBzYXVjZS4nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NocmltcCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdTdHJhaWdodCBvdXQgb2YgdGhlIGZyeWVyIHNocmltcCwgd2l0aCBsZW1tb24gcGVwcGVyIHNlYXNvbmluZy4nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Fycm96IENvbiBQb2xsbycsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdZb3VyIGNob2ljZSBvZiBtZWF0IChDaGlja2VuIG9yIFN0ZWFrKSBkcmVuY2hlZCBpbiBxdWVzbyBjaGVlc2Ugd2l0aCBwZWFzIGFuZCByaWNlLicsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZHJpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSZWQgV2luZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmljaCBmbGF2b3IsIGZ1bGwgYm9kaWVkIHdpbmUuJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdXYXRlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnT3VyIHB1cmlmaWVkIHdhdGVyIG9ubHkgYXMgZnJlc2ggYXMgdGhleSBjb21lLicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ29jYSBDb2xhJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0FsbW9zdCBhcyBwZXJmZWN0IGFzIGEgbWNkb25hbGRzIGNva2UsIGJ1dCBzdGlsbCBwZXJmZWN0bHkgZnJlc2guJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNdG4gRGV3JyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ1RoZSBiZXN0IGdyZWVuIHNvZGEgaW4gdGhlIHRvd24sIGZyZXNoIG91dCB0aGUgZnJlZXplciB3aXRoIGEgc2x1c2h5IGxpa2UgdGV4dHVyZS4nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1lvdXIgQWxjb2hvbCBDaG9pY2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnV2UgY2FycnkgYWxtb3N0IGFsbCBtYWpvciBhbGNvaG9saWMvYmVlciBicmFuZHMuIEFzayB1cyBpZiB3ZSBoYXZlIHlvdXIgZmF2b3JpdGUgYW5kIHdlIHdpbGwgcHJvdmlkZSBmb3IgeW91IScsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZGVzZXJ0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2hlZXNlY2FrZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmljaCBhbmQgY3JlYW15IGNoZWVzZWNha2UuJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCcm93bmllcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmFrZWQgc3RyYWlnaHQgb3V0IG9mIHRoZSBvdmVuIGFuZCBzb2Z0LicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2hvY29sYXRlIENha2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnQSBjcmVhbXksIGJ1dCBzb2Z0LCBkZWxpY2lvdXMgY2hvY29sYXRleSBjYWtlIHdpdGggY2hvY29sYXRlIGZyb3N0aW5nLicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmFuYW5hIEJyZWFkJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ05vbi1jcnVuY2h5IGJhbmFuYSBicmVhZC4gU29mdCBhbGwgYXJvdW5kIHdpdGggbm9uLWNydW5jeSBiYW5hbmEgY2h1bmtzIGluc2lkZS4gVGFzdGVzIGp1c3QgbGlrZSB5b3VyIG1pZGRsZSBzY2hvb2xzIGJhbmFuYSBicmVhZC4nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Nvb2tpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnQSBiYXRjaCBvZiA0IChvciBtb3JlIG9mIHlvdXIgY2hvaWNlKSBmcmVzaCBjaG9jb2xhdGUgY2hpcCBjb29raWVzLicsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGFwcGVuZEZvb2RJdGVtcyhjbGlwcGVkQ29udGFpbmVyRW50cmVlcywgZm9vZEl0ZW1zLmVudHJlZXMpO1xuICBhcHBlbmRGb29kSXRlbXMoY2xpcHBlZENvbnRhaW5lckRyaW5rcywgZm9vZEl0ZW1zLmRyaW5rcyk7XG4gIGFwcGVuZEZvb2RJdGVtcyhjbGlwcGVkQ29udGFpbmVyRGVzZXJ0cywgZm9vZEl0ZW1zLmRlc2VydHMpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRGb29kSXRlbXMoY29udGFpbmVyLCBpdGVtcykge1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaXRlbUhlYWRlci50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1IZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICB9KTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxub2wsXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG46cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzhmNTkzYTtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNlZWE0N2Y7XG4gIC0tdGhpcmQtY29sb3I6IHdoaXRlO1xuICAtLXByaW1hcnktZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbn1cblxuLnRhYnMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IHZhcigtLXByaW1hcnktZm9udC1zaXplKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5xdW90ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDI1cmVtO1xuICBtYXJnaW4tdG9wOiA3cmVtO1xufVxuXG4ucXVvdGUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgd2lkdGg6IDQwcmVtO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ucXVvdGUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC44cmVtO1xuICB3aWR0aDogMTNyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxMy41cmVtO1xufVxuXG4vKiBBQk9VVCBVUyBUQUIgQ1NTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmFib3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjVyZW07XG4gIG1hcmdpbi10b3A6IDdyZW07XG59XG5cbi5hYm91dC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiA1cmVtO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgd2lkdGg6IDYwcmVtO1xuICBtaW4taGVpZ2h0OiAxMHJlbTtcbn1cblxuLmFib3V0LW51bWJlci1vbmUtdGl0bGUge1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLmFib3V0LW51bWJlci1vbmUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDNyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgbWluLWhlaWdodDogNHJlbTtcbn1cblxuLmFib3V0LW51bWJlci10d28tdGl0bGUge1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLmFib3V0LW51bWJlci10d28ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDNyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgbWluLWhlaWdodDogNHJlbTtcbn1cblxuLmFib3V0LW51bWJlci10aHJlZS10aXRsZSB7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYWJvdXQtbnVtYmVyLXRocmVlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIG1pbi1oZWlnaHQ6IDRyZW07XG59XG5cbi8qIFNUQVJUIE9GIE1FTlUgVEFCICovXG4ubWVudS1jb250YWluZXIge1xuICB3aWR0aDogOTByZW07XG4gIG1hcmdpbjogNXJlbTtcbiAgaGVpZ2h0OiA2NHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5jbGlwcGVkLWNvbnRhaW5lci1kcmlua3Mge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDYwcmVtO1xuICBtYXJnaW46IDNyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHJlbTtcbiAgYm9yZGVyLXRvcDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jbGlwcGVkLWNvbnRhaW5lci1lbnRyZWVzIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbjogM3JlbTtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDYwcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRyZW07XG4gIGxlZnQ6IDdyZW07XG4gIGJvcmRlci10b3A6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uY2xpcHBlZC1jb250YWluZXItZGVzZXJ0cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogNjByZW07XG4gIG1hcmdpbjogM3JlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cmVtO1xuICByaWdodDogNjdyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jbGlwcGVkLWRlc2VydHMsXG4uY2xpcHBlZC1lbnRyZWUsXG4uY2xpcHBlZC1kcmlua3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICB3aWR0aDogMjByZW07XG4gIG1hcmdpbjogM3JlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgIDQwcHggMCxcbiAgICBjYWxjKDEwMCUgLSA0MHB4KSAwLFxuICAgIDEwMCUgNDBweCxcbiAgICAxMDAlIDEwMCUsXG4gICAgY2FsYygxMDAlIC0gNDBweCkgMTAwJSxcbiAgICA0MHB4IDEwMCUsXG4gICAgMCAxMDAlLFxuICAgIDAgNDBweFxuICApO1xufVxuXG4uY2xpcHBlZC1jb250YWluZXItZW50cmVlcyA+IGgyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbi5jbGlwcGVkLWNvbnRhaW5lci1lbnRyZWVzID4gcCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY2xpcHBlZC1jb250YWluZXItZHJpbmtzID4gaDIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLmNsaXBwZWQtY29udGFpbmVyLWRyaW5rcyA+IHAge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNsaXBwZWQtY29udGFpbmVyLWRlc2VydHMgPiBoMiB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuXG4uY2xpcHBlZC1jb250YWluZXItZGVzZXJ0cyA+IHAge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7Ozs7O0VBVUUsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UseURBQThDO0VBQzlDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULHNDQUFzQztFQUN0QyxrQkFBa0I7RUFD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Vix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0Usc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjs7Ozs7Ozs7O0dBU0M7QUFDSDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDJDQUEyQztFQUMzQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzhmNTkzYTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZWVhNDdmO1xcbiAgLS10aGlyZC1jb2xvcjogd2hpdGU7XFxuICAtLXByaW1hcnktZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IC0xMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xcbn1cXG5cXG4udGFicyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tcHJpbWFyeS1mb250LXNpemUpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ucXVvdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1yaWdodDogMjVyZW07XFxuICBtYXJnaW4tdG9wOiA3cmVtO1xcbn1cXG5cXG4ucXVvdGUge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucXVvdGUtYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIHdpZHRoOiAxM3JlbTtcXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogMTMuNXJlbTtcXG59XFxuXFxuLyogQUJPVVQgVVMgVEFCIENTUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMjVyZW07XFxuICBtYXJnaW4tdG9wOiA3cmVtO1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxufVxcblxcbi5hYm91dC1kZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgd2lkdGg6IDYwcmVtO1xcbiAgbWluLWhlaWdodDogMTByZW07XFxufVxcblxcbi5hYm91dC1udW1iZXItb25lLXRpdGxlIHtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG5cXG4uYWJvdXQtbnVtYmVyLW9uZSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxufVxcblxcbi5hYm91dC1udW1iZXItdHdvLXRpdGxlIHtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG5cXG4uYWJvdXQtbnVtYmVyLXR3byB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxufVxcblxcbi5hYm91dC1udW1iZXItdGhyZWUtdGl0bGUge1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxufVxcblxcbi5hYm91dC1udW1iZXItdGhyZWUge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4vKiBTVEFSVCBPRiBNRU5VIFRBQiAqL1xcbi5tZW51LWNvbnRhaW5lciB7XFxuICB3aWR0aDogOTByZW07XFxuICBtYXJnaW46IDVyZW07XFxuICBoZWlnaHQ6IDY0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uY2xpcHBlZC1jb250YWluZXItZHJpbmtzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiA2MHJlbTtcXG4gIG1hcmdpbjogM3JlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTRyZW07XFxuICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jbGlwcGVkLWNvbnRhaW5lci1lbnRyZWVzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiA2MHJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTRyZW07XFxuICBsZWZ0OiA3cmVtO1xcbiAgYm9yZGVyLXRvcDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY2xpcHBlZC1jb250YWluZXItZGVzZXJ0cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogNjByZW07XFxuICBtYXJnaW46IDNyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE0cmVtO1xcbiAgcmlnaHQ6IDY3cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNsaXBwZWQtZGVzZXJ0cyxcXG4uY2xpcHBlZC1lbnRyZWUsXFxuLmNsaXBwZWQtZHJpbmtzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgNDBweCAwLFxcbiAgICBjYWxjKDEwMCUgLSA0MHB4KSAwLFxcbiAgICAxMDAlIDQwcHgsXFxuICAgIDEwMCUgMTAwJSxcXG4gICAgY2FsYygxMDAlIC0gNDBweCkgMTAwJSxcXG4gICAgNDBweCAxMDAlLFxcbiAgICAwIDEwMCUsXFxuICAgIDAgNDBweFxcbiAgKTtcXG59XFxuXFxuLmNsaXBwZWQtY29udGFpbmVyLWVudHJlZXMgPiBoMiB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxufVxcblxcbi5jbGlwcGVkLWNvbnRhaW5lci1lbnRyZWVzID4gcCB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5jbGlwcGVkLWNvbnRhaW5lci1kcmlua3MgPiBoMiB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxufVxcblxcbi5jbGlwcGVkLWNvbnRhaW5lci1kcmlua3MgPiBwIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmNsaXBwZWQtY29udGFpbmVyLWRlc2VydHMgPiBoMiB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxufVxcblxcbi5jbGlwcGVkLWNvbnRhaW5lci1kZXNlcnRzID4gcCB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBsb2FkQWJvdXRUYWIgfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IGxvYWRNZW51VGFiIH0gZnJvbSAnLi9tZW51JztcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpOyAvLyBob2xkcyBuYXYgYnV0dG9ucyAmIHRpdGxlXG5jb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gb25seSBob2xkcyBuYXYgYnV0dG9uc1xubmF2Q29udGFpbmVyLmNsYXNzTmFtZSA9ICduYXYtY29udGFpbmVyJztcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpOyAvLyBuYXYgYnV0dG9uc1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG50aXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIk93ZW4ncyBTY3J1bXB0aW91cyBCYXJcIjtcbm5hdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzWzBdKTtcbm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzWzFdKTtcbm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzWzJdKTtcbm5hdi5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuXG5mdW5jdGlvbiBsb2FkSG9tZVRhYigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7IC8vIGhvbGRzIEVWRVJZVEhJTkdcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBxdW90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBxdW90ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAncXVvdGUtY29udGFpbmVyJztcbiAgY29udGVudC5hcHBlbmRDaGlsZChxdW90ZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcXVvdGUuY2xhc3NOYW1lID0gJ3F1b3RlJztcbiAgcXVvdGUudGV4dENvbnRlbnQgPSAnQSBQcmVtaXVtIEFuZCBSZXdhcmRpbmcgUmVzdGF1cmFudCc7XG4gIHF1b3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1b3RlKTtcblxuICBjb25zdCBxdW90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBxdW90ZUJ1dHRvbi5jbGFzc05hbWUgPSAncXVvdGUtYnV0dG9uJztcbiAgcXVvdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQm9vayBBIFRhYmxlJztcbiAgcXVvdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVvdGVCdXR0b24pO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSAnwqkgMjAyNCBPd2Vu4oCZcyBTY3J1bXB0aW91cyBCYXInO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbi8vIFNUQVJUIE9GIE9USEVSIFRBQlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbn1cblxuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiczpudGgtY2hpbGQoMiknKTtcbmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgbG9hZEFib3V0VGFiKCk7XG59KTtcblxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzOm50aC1jaGlsZCgzKScpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGxvYWRNZW51VGFiKCk7XG59KTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzOm50aC1jaGlsZCgxKScpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGxvYWRIb21lVGFiKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbG9hZEhvbWVUYWIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImNsZWFyQ29udGVudCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJsb2FkQWJvdXRUYWIiLCJhYm91dENvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJhYm91dFRpdGxlIiwidGV4dENvbnRlbnQiLCJhYm91dERlc2NyaXB0aW9uIiwiYWJvdXROdW1iZXJPbmVUaXRsZSIsImFib3V0TnVtYmVyT25lIiwiYWJvdXROdW1iZXJUd29UaXRsZSIsImFib3V0TnVtYmVyVHdvIiwiYWJvdXROdW1iZXJUaHJlZVRpdGxlIiwiYWJvdXROdW1iZXJUaHJlZSIsImxvYWRNZW51VGFiIiwibWVudUNvbnRlbnQiLCJjbGlwcGVkRW50cmVlIiwiY2xpcHBlZERyaW5rcyIsImNsaXBwZWREZXNlcnRzIiwiY2xpcHBlZENvbnRhaW5lckRyaW5rcyIsImNsaXBwZWRDb250YWluZXJFbnRyZWVzIiwiY2xpcHBlZENvbnRhaW5lckRlc2VydHMiLCJmb29kSXRlbXMiLCJlbnRyZWVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZHJpbmtzIiwiZGVzZXJ0cyIsImFwcGVuZEZvb2RJdGVtcyIsImNvbnRhaW5lciIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJpdGVtSGVhZGVyIiwiaXRlbURlc2NyaXB0aW9uIiwibmF2IiwibmF2Q29udGFpbmVyIiwidGFicyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aXRsZSIsImxvYWRIb21lVGFiIiwicXVvdGVDb250YWluZXIiLCJxdW90ZSIsInF1b3RlQnV0dG9uIiwiZm9vdGVyIiwiYm9keSIsImFib3V0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lbnVCdXR0b24iLCJob21lQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==