import './styles.css';

const content = document.querySelector('#content');

const title = document.createElement('h1');
title.className = 'title';
title.textContent = "Owen's Scrumptious Bar!";

content.appendChild(title);
