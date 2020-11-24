class HeroClub {
  render() { //eslint-disable-line
    const template = document.createElement('div');

    template.innerHTML = `
      <div id="theBreakfast" class="hero offscreen">
        <div class="hero__image the-breakfast">
          <h2 class="hero__title">The Breakfast</h2>
          <p class="hero__content">All natural, prepared at the moment, delicius and nutritive breakfast. Ask for the Chef's recomendation, we are sure you'll be delight and surprised.</p>
        </div>
      </div>
    `;

    return template;
  }
}

export default HeroClub;
