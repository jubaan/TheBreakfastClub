// const switchTab = (event, contentID) => {
//   let i, hero, menu__link;

//   hero = document.getElementsByClassName('hero');
//   for (i = 0; i < hero.length; i += 1) {
//     hero[i].classList.add('offscreen');
//   }

//   menu__link = document.getElementsByClassName('menu__link');
//   for (i = 0; i < hero.length; i += 1) {
//     menu__link[i].classList.remove('active');
//   }

//   document.getElementById(contentID).classList.remove('offscreen');
//   event.currentTarget.classList.add('active');
// }

const switchTab = () => {
  let menu__link = document.getElementsByClassName('menu__link');

  menu__link[0].addEventListener('click', (e) => {
    let i, hero;

    hero = document.getElementsByClassName('hero');

    for (i = 0; i < hero.length; i += 1) {
      hero[i].classList.add('offscreen');
    }

    for (i = 0; i < hero.length; i += 1) {
      menu__link[i].classList.remove('active');
    }

    document.getElementById('theClub').classList.remove('offscreen');
    e.currentTarget.classList.add('active');
  })

  menu__link[1].addEventListener('click', (e) => {
    let i, hero;

    hero = document.getElementsByClassName('hero');

    for (i = 0; i < hero.length; i += 1) {
      hero[i].classList.add('offscreen');
    }

    for (i = 0; i < hero.length; i += 1) {
      menu__link[i].classList.remove('active');
    }

    document.getElementById('theBreakfast').classList.remove('offscreen');
    e.currentTarget.classList.add('active');
  })

  menu__link[2].addEventListener('click', (e) => {
    let i, hero;

    hero = document.getElementsByClassName('hero');

    for (i = 0; i < hero.length; i += 1) {
      hero[i].classList.add('offscreen');
    }

    for (i = 0; i < hero.length; i += 1) {
      menu__link[i].classList.remove('active');
    }

    document.getElementById('ourLocations').classList.remove('offscreen');
    e.currentTarget.classList.add('active');
  })
}

export default switchTab;
