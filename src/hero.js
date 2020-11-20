const template = document.createElement('template');

template.innerHTML = `
  <div id="theClub" class="hero">
    <div class="hero__image the-club">
      <h2 class="hero__title">The Club</h2>
      <p class="hero__content">Social distancing never become so friendly, come to one of our clubs and discover open, well-ventilated, areas to enjoy with family and friends.</p>
    </div>
  </div>

  <div id="theBreakfast" class="hero offscreen">
    <div class="hero__image the-breakfast">
      <h2 class="hero__title">The Breakfast</h2>
      <p class="hero__content">All natural, prepared at the moment, delicius and nutritive breakfast. Ask for the Chef's recomendation, we are sure you'll be delight and surprised.</p>
    </div>
  </div>

  <div id="ourLocations" class="hero offscreen">
    <div class="hero__image our-locations">
      <h2 class="hero__title">Our Locations</h2>
      <p class="hero__content">Come to Edmonton, Alberta, there is always one Breakfast Club near you. We are located in almost every corner of our Downtown.</p>
    </div>
  </div>
`;

class Hero {
  hero() { //eslint-disable-line
    const hero = document.createElement('div');

    hero.innerHTML = template.innerHTML;

    return hero;
  }
}

export default Hero;
