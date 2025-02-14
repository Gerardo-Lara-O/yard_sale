const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

navbarEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
navbarShoppingCart.addEventListener('click', toggleProductDetail)


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
}
function toggleProductDetail() {
    aside.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}
