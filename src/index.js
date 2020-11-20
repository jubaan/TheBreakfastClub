import './main.css';
import switchTab from './switchTab';
import Navbar from './navbar';
import Hero from './hero';

const content = document.querySelector('.content');
const navbar = document.createElement('my-navbar');
const hero = document.createElement('my-hero');

content.appendChild(navbar);
content.appendChild(hero);

customElements.define('my-navbar', Navbar);
customElements.define('my-hero', Hero);
