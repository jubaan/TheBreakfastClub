import switchTab from './switchTab';
import myNavbar from './my-navbar';
import myHero from './my-hero';

const content = document.querySelector(".content");
const navbar = document.createElement("navbar");
const hero = new myHero();

content.appendChild(navbar);
content.appendChild(hero);

customElements.define('navbar', myNavbar);
customElements.define('hero', myHero);
