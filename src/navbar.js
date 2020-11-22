import NavbarContent from './navbar-content';

class Navbar {
  navbar() { // eslint-disable-line
    const navbar = document.createElement('nav');

    navbar.innerHTML = new NavbarContent().template();

    return navbar;
  }
}

export default Navbar;
