import './main.css';
import switchTab from './switchTab';
import Navbar from './navbar';
import HeroClub from './hero-theclub';
import HeroBreakfast from './hero-thebreakfast';
import HeroOurLocations from './hero-ourlocations';

const content = document.querySelector('.content');

// append elements to the index.html
content.appendChild(new Navbar().navbar());
content.appendChild(new HeroClub().render());
content.appendChild(new HeroBreakfast().render());
content.appendChild(new HeroOurLocations().render());

// Module with the logic to swith tabs
switchTab();
