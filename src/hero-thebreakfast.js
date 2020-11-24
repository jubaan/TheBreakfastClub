class HeroBreakfast {
  render() { //eslint-disable-line
    const template = document.createElement('div');

    template.innerHTML = `
      <div id="theClub" class="hero">
        <div class="hero__image the-club">
          <h2 class="hero__title">The Club</h2>
          <p class="hero__content">Social distancing never become so friendly, come to one of our clubs and discover open, well-ventilated, areas to enjoy with family and friends.</p>
        </div>
      </div>
    `;

    return template;
  }
}

export default HeroBreakfast;
