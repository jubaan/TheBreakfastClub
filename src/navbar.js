const template = document.createElement('template');

template.innerHTML = `
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

function navbar() {
  const navbar = document.createElement('nav');
  navbar.innerHTML = template.innerHTML;

  return navbar;
}

export default navbar;
