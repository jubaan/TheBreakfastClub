import './main.css';
import switchTab from './switchTab';
import navbar from './navbar';
import hero from './hero';

const content = document.querySelector('.content');

content.appendChild(navbar());
content.appendChild(hero());
