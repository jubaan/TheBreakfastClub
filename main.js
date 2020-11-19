import switchTab from './switchTab';
import myNavbar from './my-navbar';
import myHero from './my-hero';

const content = document.querySelector(".content");
const navbar = document.createElement("navbar");
const hero1 = document.createElement("hero");
// const hero2 = new myHero();
// const hero3 = new myHero();

content.appendChild(navbar);
content.appendChild(hero1);

customElements.define('navbar', myNavbar);
customElements.define('hero', myHero);
