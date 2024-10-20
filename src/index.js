import './styles.css';
import { loadAboutTab } from './about';
import { loadMenuTab } from './menu';

const nav = document.querySelector('.nav'); // holds nav buttons & title
const navContainer = document.createElement('div'); // only holds nav buttons
navContainer.className = 'nav-container';
const tabs = document.querySelectorAll('.tabs'); // nav buttons

const title = document.createElement('h1');
title.className = 'title';
title.textContent = "Owen's Scrumptious Bar";
nav.appendChild(title);

navContainer.appendChild(tabs[0]);
navContainer.appendChild(tabs[1]);
navContainer.appendChild(tabs[2]);
nav.appendChild(navContainer);

function loadHomeTab() {
  const content = document.querySelector('#content'); // holds EVERYTHING
  content.innerHTML = '';

  const quoteContainer = document.createElement('div');
  quoteContainer.className = 'quote-container';
  content.appendChild(quoteContainer);

  const quote = document.createElement('div');
  quote.className = 'quote';
  quote.textContent = 'A Premium And Rewarding Restaurant';
  quoteContainer.appendChild(quote);

  const quoteButton = document.createElement('button');
  quoteButton.className = 'quote-button';
  quoteButton.textContent = 'Book A Table';
  quoteContainer.appendChild(quoteButton);

  const footer = document.createElement('footer');
  footer.textContent = '© 2024 Owen’s Scrumptious Bar';
  document.body.appendChild(footer);
}

// START OF OTHER TABS ------------------------------------

function clearContent() {
  content.innerHTML = '';
}

const aboutButton = document.querySelector('.tabs:nth-child(2)');
aboutButton.addEventListener('click', () => {
  clearContent();
  loadAboutTab();
});

const menuButton = document.querySelector('.tabs:nth-child(3)');
menuButton.addEventListener('click', () => {
  clearContent();
  loadMenuTab();
});

const homeButton = document.querySelector('.tabs:nth-child(1)');
homeButton.addEventListener('click', () => {
  clearContent();
  loadHomeTab();
});

document.addEventListener('DOMContentLoaded', () => {
  loadHomeTab();
});
