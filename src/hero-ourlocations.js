class HeroOurLocations {
  render() { //eslint-disable-line
    const template = document.createElement('div');

    template.innerHTML = `
      <div id="ourLocations" class="hero offscreen">
        <div class="hero__image our-locations">
          <h2 class="hero__title">Our Locations</h2>
          <p class="hero__content">Come to Edmonton, Alberta, there is always one Breakfast Club near you. We are located in almost every corner of our Downtown.</p>
        </div>
      </div>
    `;

    return template;
  }
}

export default HeroOurLocations;
