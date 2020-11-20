const template = document.createElement('template');

template.innerHTML = `
  <style>
    .navbar,
    .navbar__brand,
    .navbar__menu {
      display: flex;
      align-items: center;
    }

    .navbar__brand,
    .menu__link {
      text-decoration: none;
    }

    .navbar {
      height: 50px;
      padding: 0px 30px;
      justify-content: space-between;
    }

    .navbar__brand,
    .menu__link {
      font-family: Helvetica, 'sans-serif';
    }

    .navbar__brand {
      font-weight: 700;
    }

    .brand__logo {
      height: 24px;
      margin-right: 10px;
    }

    .menu__link {
      color: #949396;
    }

    .navbar__brand,
    .menu__link:hover,
    .menu__link.active {
      color: #000;
    }

    .menu__item {
      list-style-type: none;
    }

    .menu__link {
      margin: 0 5px;
    }
  </style>
  <nav class="navbar">
    <a class="navbar__brand" href="./index.html">
      <img class="brand__logo" src="https://img.icons8.com/ios/32/000000/coffee-to-go.png"/>
      <img class="brand__logo" src="https://img.icons8.com/ios/50/000000/bread-loaf.png"/>
      <img class="brand__logo" src="https://img.icons8.com/ios/50/000000/sunny-side-up-eggs.png"/>
      BREAKFAST CLUB
    </a>

    <ul class="navbar__menu">
      <li class="menu__item"><a class="menu__link active" href="#" onclick="switchTab(event, 'theClub')">The Club</a></li>
      <li class="menu__item"><a class="menu__link" href="#" onclick="switchTab(event, 'theBreakfast')">The Breakfast</a></li>
      <li class="menu__item"><a class="menu__link" href="#" onclick="switchTab(event, 'ourLocations')">Our Locations</a></li>
    </ul>
  </nav>
  <script src="./switchTab"></script>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Navbar;
