import style from './hero';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    .hero {
      position: relative;
      padding: 0 30px;
      margin: auto;
      height: 94.8vh;
    }

    .hero__image {
      background-size: cover;
      position: absolute;
      top: 0px;
      left: 30px;
      right: 30px;
      bottom: 30px;
      border-radius: 10px;
      margin: auto;
    }

    .hero__title {
      font-family: 'Chango', cursive;
      font-size: 6rem;
      color: #FFF;
      text-align: center;
    }

    .the-club {
      background: url('https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80') 50% 50% no-repeat;
    }

    .the-breakfast {
      background: url('https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80') 50% 50% no-repeat;
    }

    .our-locations {
      background: url('https://images.unsplash.com/photo-1580280126518-3bcec8e0492b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80') 50% 50% no-repeat;
    }

    .offscreen {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  </style>
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

class Hero extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Hero;
