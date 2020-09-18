const navSlide = () => {
  const burger = document.querySelector('.hamb-menu_icon');
  const nav = document.querySelector('.navigation-items');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });
};

navSlide();
