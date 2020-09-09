const navSlide = () => {
  const burger = document.querySelector('.humb-menu_icon');
  const nav = document.querySelector('.navigation-items');

  burger.addEventListener('click', () => {
    nav.classList.toggle('.active');
  });
};

navSlide();
