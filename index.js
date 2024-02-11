console.log("siema")

const navButton = document.querySelector('.navbar__button-mobile');
const hamburger = document.querySelector('.navbar__hamburger-mobile');
const hamburgerCross = document.querySelector('.navbar__hamburger-active-mobile');

const navBarMenu = document.querySelector('.navbar__menu-mobile--js');

navButton.addEventListener("click", () => {
    hamburger.classList.toggle('show');
    hamburgerCross.classList.toggle('show');
    navBarMenu.classList.toggle('navbar__menu-mobile--show');
});
