const switchTab = () => {
  let menu__links= [...document.getElementsByClassName('menu__link')];

  menu__links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const heros = [...document.getElementsByClassName('hero')];
      const contentID = link.dataset.type;

      heros.forEach((hero) => {
        hero.classList.add('offscreen');
      })

      menu__links.forEach((link) => {
        link.classList.remove('active');
      })

      document.getElementById(contentID).classList.remove('offscreen');
      e.currentTarget.classList.add('active');
    })
  })
}

export default switchTab;
