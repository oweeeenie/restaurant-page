import './styles.css';

const content = document.querySelector('#content');

const nav = document.querySelector('.nav');
const navContainer = document.createElement('div');
navContainer.className = 'nav-container';
const tabs = document.querySelectorAll('.tabs');

const title = document.createElement('h1');
title.className = 'title';
title.textContent = "Owen's Scrumptious Bar";

nav.appendChild(title);

navContainer.appendChild(tabs[0]);
navContainer.appendChild(tabs[1]);
navContainer.appendChild(tabs[2]);
nav.appendChild(navContainer);
