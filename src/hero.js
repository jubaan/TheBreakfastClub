const template = document.createElement('template');

template.innerHTML = `
  <div id="theClub" class="hero">
    <div class="hero__image the-club">
      <h2 class="hero__title">
      The<br>Breakfast<br>Club</h2>
      <h3></h3>
      <p>prepared with only natural </p>
    </div>
  </div>

  <div id="theBreakfast" class="hero offscreen">
    <div class="hero__image the-breakfast">
      <h2 class="hero__title">Breakfast</h2>
      <h3></h3>
      <p>hello with only natural </p>
    </div>
  </div>

  <div id="ourLocations" class="hero offscreen">
    <div class="hero__image our-locations">
      <h2 class="hero__title">Breakfast</h2>
      <h3></h3>
      <p>ready with only natural </p>
    </div>
  </div>
`;

function hero() {
  const hero = document.createElement('div');
  hero.innerHTML = template.innerHTML;

  return hero;
}

export default hero;
