const template = document.createElement('template');

template.innerHTML = `
  <div id="theClub" class="hero">
    <div class="hero__image the-club">
      <h2 class="hero__title">The Club</h2>
      <p class="hero__content">prepared with only natural </p>
    </div>
  </div>

  <div id="theBreakfast" class="hero offscreen">
    <div class="hero__image the-breakfast">
      <h2 class="hero__title">The Breakfast</h2>
      <p class="hero__content">hello with only natural</p>
    </div>
  </div>

  <div id="ourLocations" class="hero offscreen">
    <div class="hero__image our-locations">
      <h2 class="hero__title">Our Locations</h2>
      <p class="hero__content">ready with only natural </p>
    </div>
  </div>
`;

class Hero {
  hero() {
    const hero = document.createElement('div');
    hero.innerHTML = template.innerHTML;

    return hero;
  }
}

export default Hero;
