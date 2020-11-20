const switchTab = (event, contentID) => {
  let i, hero, menu__link;

  hero = document.getElementsByClassName('hero');
  for (i = 0; i < hero.length; i += 1) {
    hero[i].classList.add('offscreen');
  }

  menu__link = document.getElementsByClassName('menu__link');
  for (i = 0; i < hero.length; i += 1) {
    menu__link[i].classList.remove('active');
  }

  document.getElementById(contentID).classList.remove('offscreen');
  event.currentTarget.classList.add('active');
}

export default switchTab;
