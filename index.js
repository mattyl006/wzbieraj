console.log("siema")

const navMenu = document.querySelector('.navbar__nav-button-mobile');
const hamburger = document.querySelector('.navbar__hamburger-mobile');
const hamburgerCross = document.querySelector('.navbar__hamburger-active-mobile');

navMenu.addEventListener("click", () => {
    hamburger.classList.toggle('show');
    hamburgerCross.classList.toggle('show');
});
