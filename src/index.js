import './styles.css';

const content = document.querySelector('#content'); // holds EVERYTHING

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
