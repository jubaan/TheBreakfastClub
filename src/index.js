import './main.css';
import switchTab from  './switchTab';
import Navbar from './navbar';
import Hero from './hero';

const content = document.querySelector('.content');

content.appendChild(new Navbar().navbar());
content.appendChild(new Hero().hero());

switchTab();
